// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { ProvisionServiceAccountAndAccessForNitrosamineAutomationPage } from './provision-service-account-and-access-for-nitrosami.page';

let pageObject: ProvisionServiceAccountAndAccessForNitrosamineAutomationPage;

Given('I sign in as {string}', async function (this: ICustomWorld, email: string) {
  pageObject = new ProvisionServiceAccountAndAccessForNitrosamineAutomationPage(this.page);
  await pageObject.navigateToEmailClient();
  await pageObject.signIn(email);
});

When('I compose and send an email to {string} with a unique subject and body', async function (this: ICustomWorld, recipient: string) {
  const uniqueSubject = `Subject-${Date.now()}`;
  const uniqueBody = `Body-${Date.now()}`;
  await pageObject.composeAndSendEmail(recipient, uniqueSubject, uniqueBody);
});

Then('I should receive a reply and verify its contents', async function (this: ICustomWorld) {
  await pageObject.verifyReply();
});

Given('I start a provisioning request for the Nitrosamine service account', async function (this: ICustomWorld) {
  await pageObject.navigateToProvisioningForm();
});

When('I populate the required fields and submit the request', async function (this: ICustomWorld) {
  const fields = {
    unixGroups: ['brainiac-compute', 'gaussian'],
    lrlhpsPath: '/lrlhps/data/NirtosamineCalculation /Prod',
    guavaPath: '\\guava\\guava.grp\\MDPRDAUTOMATION\\PRD\\Nitrosamine_Calculation',
    monitoringDistribution: ['nitroso-ops@corp.example']
  };
  await pageObject.fillProvisioningForm(fields);
  await pageObject.submitProvisioningRequest();
});

Then('I should verify the provisioning request is successful', async function (this: ICustomWorld) {
  await pageObject.verifyProvisioningSuccess();
});