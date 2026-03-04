// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { ProvisionServiceAccountAndAccessForNitrosamineAutomationPage } from './provision-service-account-and-access-for-nitrosami.page';

let pageObject: ProvisionServiceAccountAndAccessForNitrosamineAutomationPage;

Given('I sign in to the email client as {string}', async function (this: ICustomWorld, accountName: string) {
  pageObject = new ProvisionServiceAccountAndAccessForNitrosamineAutomationPage(this.page);
  await pageObject.navigateToEmailClient();
});

When('I compose a new email to {string} with a unique subject and body', async function (this: ICustomWorld, recipient: string) {
  const uniqueSubject = `Test Subject ${Date.now()}`;
  const uniqueBody = `Test Body ${Date.now()}`;
  await pageObject.composeEmail(recipient, uniqueSubject, uniqueBody);
});

When('I send the email', async function (this: ICustomWorld) {
  await pageObject.sendEmail();
});

Then('I should see the email in the monitoring recipient mailbox', async function (this: ICustomWorld) {
  await pageObject.validateEmailReceived();
});

Given('I start a new provisioning request for the Nitrosamine service account', async function (this: ICustomWorld) {
  await pageObject.navigateToProvisioningForm();
});

When('I populate the fields with valid data', async function (this: ICustomWorld) {
  const provisioningData = {
    accountName: 'svc_nitrosamine_bot',
    unixGroups: ['brainiac-compute', 'gaussian'],
    lrlhpsPath: '/lrlhps/data/NirtosamineCalculation/Prod',
    guavaPath: '\\guava\\guava.grp\\MDPRDAUTOMATION\\PRD\\Nitrosamine_Calculation',
    monitoringDistribution: ['nitroso-ops@corp.example'],
  };
  await pageObject.fillProvisioningForm(provisioningData);
});

When('I submit the provisioning request', async function (this: ICustomWorld) {
  await pageObject.submitProvisioningRequest();
});

Then('the provisioning request should be successful', async function (this: ICustomWorld) {
  await pageObject.validateProvisioningSuccess();
});