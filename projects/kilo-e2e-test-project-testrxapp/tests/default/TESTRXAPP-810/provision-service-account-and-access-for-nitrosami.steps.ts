// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { ProvisionServiceAccountPage } from '../pages/ProvisionServiceAccountPage';

let pageObject: ProvisionServiceAccountPage;

Given('I am signed in as {string}', async function (this: ICustomWorld, account: string) {
  pageObject = new ProvisionServiceAccountPage(this.page);
  await pageObject.navigateToEmailClient();
  // Assume sign-in logic is handled elsewhere
});

When('I send an email to {string} and receive a reply', async function (this: ICustomWorld, recipient: string) {
  const subject = `Test Subject ${Date.now()}`;
  const body = 'This is a test email.';
  await pageObject.sendEmail(recipient, subject, body);
  await pageObject.refreshInbox();
});

Then('I should be able to read the reply email', async function (this: ICustomWorld) {
  const expectedReply = 'Reply content';
  await pageObject.expectEmailContent(expectedReply);
});

Given('I start a new provisioning request', async function (this: ICustomWorld) {
  pageObject = new ProvisionServiceAccountPage(this.page);
  await pageObject.navigateToEmailClient(); // Assuming provisioning is part of the same UI
});

When('I submit the request with specific configurations', async function (this: ICustomWorld) {
  const config = {
    account_name: 'svc_nitrosamine_bot',
    unix_groups: ['brainiac-compute', 'gaussian'],
    lrlhps_path: '/lrlhps/data/NirtosamineCalculation/Prod',
    guava_path: '\\guava\\guava.grp\\MDPRDAUTOMATION\\PRD\\Nitrosamine_Calculation',
    monitoring_distribution: ['nitroso-ops@corp.example'],
  };
  await pageObject.submitProvisioningRequest(config);
});

Then('I should see the request processed successfully', async function (this: ICustomWorld) {
  await pageObject.expectProvisioningSuccess();
});