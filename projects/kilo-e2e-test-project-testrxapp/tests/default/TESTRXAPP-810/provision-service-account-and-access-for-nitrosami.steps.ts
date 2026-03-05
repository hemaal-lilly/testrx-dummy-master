// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { ProvisionServiceAccountAndAccessForNitrosamineAutomationPage } from './provision-service-account-and-access-for-nitrosami.page';

let pageObject: ProvisionServiceAccountAndAccessForNitrosamineAutomationPage;

Given('I am signed in as {string}', async function (this: ICustomWorld, accountName: string) {
  pageObject = new ProvisionServiceAccountAndAccessForNitrosamineAutomationPage(this.page);
  await pageObject.navigateToEmailClient();
  // Assume login logic is handled elsewhere
});

When('I compose and send an email to {string} with a unique subject and body', async function (this: ICustomWorld, recipient: string) {
  const subject = `Test Subject ${Date.now()}`;
  const body = `Test Body ${Date.now()}`;
  await pageObject.composeAndSendEmail(recipient, subject, body);
});

Then('I should see the email in the recipient\'s inbox', async function (this: ICustomWorld) {
  await pageObject.expectEmailSent();
});

Given('I start a provisioning request for the Nitrosamine service account', async function (this: ICustomWorld) {
  pageObject = new ProvisionServiceAccountAndAccessForNitrosamineAutomationPage(this.page);
  await pageObject.navigateToProvisioningPage();
});

When('I leave the Service Account field empty and populate other fields', async function (this: ICustomWorld) {
  await pageObject.submitProvisioningForm({
    unixGroups: ['brainiac-compute', 'gaussian'],
    lrlhpsPath: '/lrlhps/data/NirtosamineCalculation /Prod',
    guavaPath: '\\guava\\guava.grp\\MDPRDAUTOMATION\\PRD\\Nitrosamine_Calculation',
    monitoringDistribution: ['nitroso-ops@corp.example'],
  });
});

Then('the provisioning request should be submitted successfully', async function (this: ICustomWorld) {
  await pageObject.expectProvisioningSuccess();
});