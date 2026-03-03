// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { ProvisionServiceAccountPage } from '../pages/ProvisionServiceAccountPage';

let pageObject: ProvisionServiceAccountPage;

Given('I am signed in as {string}', async function (this: ICustomWorld, accountName: string) {
  pageObject = new ProvisionServiceAccountPage(this.page);
  await pageObject.navigateToEmailClient();
  // Assume sign-in logic is handled externally
});

When('I compose and send an email to {string}', async function (this: ICustomWorld, recipient: string) {
  const subject = `Test Subject ${Date.now()}`;
  const body = `Test Body ${Date.now()}`;
  await pageObject.composeEmail(recipient, subject, body);
  await pageObject.sendEmail();
});

Then('I should receive a reply and verify the response', async function (this: ICustomWorld) {
  await pageObject.replyToEmail();
  await pageObject.expectEmailSent();
});

Given('I start a new provisioning request', async function (this: ICustomWorld) {
  await pageObject.navigateToProvisioningForm();
});

When('I populate the required fields and submit the request', async function (this: ICustomWorld) {
  const fields = {
    account_name: 'svc_nitrosamine_bot',
    unix_groups: ['brainiac-compute', 'gaussian'],
    lrlhps_path: '/lrlhps/data/NirtosamineCalculation/Prod',
    guava_path: '\\guava\\guava.grp\\MDPRDAUTOMATION\\PRD\\Nitrosamine_Calculation',
    monitoring_distribution: ['nitroso-ops@corp.example']
  };
  await pageObject.fillProvisioningForm(fields);
  await pageObject.submitProvisioningForm();
});

Then('I should verify the provisioning request outcome', async function (this: ICustomWorld) {
  await pageObject.expectProvisioningSuccess();
});