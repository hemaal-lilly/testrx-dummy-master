// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { ProvisionServiceAccountAndAccessForNitrosamineAutomationPage } from './provision-service-account-and-access-for-nitrosami.page';

let provisionPage: ProvisionServiceAccountAndAccessForNitrosamineAutomationPage;

Given('I am signed in as {string}', async function (this: ICustomWorld, accountName: string) {
  provisionPage = new ProvisionServiceAccountAndAccessForNitrosamineAutomationPage(this.page);
  await provisionPage.signIn(accountName);
});

When('I compose and send an email to {string} with a unique subject and body', async function (this: ICustomWorld, recipient: string) {
  const uniqueSubject = `Test Subject ${Date.now()}`;
  const uniqueBody = `Test Body ${Date.now()}`;
  await provisionPage.composeEmail(uniqueSubject, uniqueBody);
  await provisionPage.sendEmail();
});

Then('I should see the email in the recipient\'s inbox and send a reply back', async function (this: ICustomWorld) {
  await provisionPage.verifyEmailSent();
});

Given('I start a new provisioning request for the Nitrosamine service account', async function (this: ICustomWorld) {
  // No explicit action needed for this step
});

When('I populate the required fields and submit the request', async function (this: ICustomWorld) {
  const requestData = {
    account_name: 'svc_nitrosamine_bot',
    unix_groups: ['brainiac-compute', 'gaussian'],
    lrlhps_path: '/lrlhps/data/NirtosamineCalculation /Prod',
    guava_path: '\\guava\\guava.grp\\MDPRDAUTOMATION\\PRD\\Nitrosamine_Calculation',
    monitoring_distribution: ['nitroso-ops@corp.example']
  };
  await provisionPage.submitProvisioningRequest(requestData);
});

Then('I should verify the provisioning request is successful', async function (this: ICustomWorld) {
  await provisionPage.verifyProvisioningSuccess();
});