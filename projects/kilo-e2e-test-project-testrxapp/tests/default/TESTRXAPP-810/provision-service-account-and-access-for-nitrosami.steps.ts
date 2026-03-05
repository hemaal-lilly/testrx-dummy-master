// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { ProvisionServiceAccountAndAccessForNitrosamineAutomationPage } from './provision-service-account-and-access-for-nitrosami.page';
import { getCredential } from '../../../utils/common';

let pageObject: ProvisionServiceAccountAndAccessForNitrosamineAutomationPage;

Given('I sign in to the email client as {string}', async function (this: ICustomWorld, email: string) {
  pageObject = new ProvisionServiceAccountAndAccessForNitrosamineAutomationPage(this.page);
  await pageObject.navigateToEmailClient();
  const password = getCredential('LOGIN_PASSWORD');
  await pageObject.signIn(email, password);
});

When('I compose and send an email to {string} with a unique subject and body', async function (this: ICustomWorld, recipient: string) {
  const uniqueSubject = `Test Subject ${Date.now()}`;
  const uniqueBody = `Test Body ${Date.now()}`;
  await pageObject.composeEmail(recipient, uniqueSubject, uniqueBody);
});

Then('I should receive a reply from {string}', async function (this: ICustomWorld, sender: string) {
  await pageObject.expectEmailReply();
});

Given('I start a provisioning request for the Nitrosamine service account', async function (this: ICustomWorld) {
  await pageObject.navigateToProvisioningForm();
});

When('I populate the fields and submit the request', async function (this: ICustomWorld) {
  const data = {
    accountName: 'svc_nitrosamine_bot',
    unixGroups: ['brainiac-compute', 'gaussian'],
    paths: ['/lrlhps/data/NirtosamineCalculation/Prod', '\\guava\\guava.grp\\MDPRDAUTOMATION\\PRD\\Nitrosamine_Calculation'],
    monitoringDistribution: ['nitroso-ops@corp.example'],
  };
  await pageObject.fillProvisioningForm(data);
  await pageObject.submitProvisioningRequest();
});

Then('I should see the provisioning request succeed', async function (this: ICustomWorld) {
  await pageObject.expectProvisioningSuccess();
});