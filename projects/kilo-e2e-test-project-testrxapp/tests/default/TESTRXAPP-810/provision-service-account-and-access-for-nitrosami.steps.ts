// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { ProvisionServiceAccountPage } from '../pages/ProvisionServiceAccountPage';

let provisionPage: ProvisionServiceAccountPage;

Given('I am signed in as {string}', async function (this: ICustomWorld, email: string) {
  provisionPage = new ProvisionServiceAccountPage(this.page);
  await provisionPage.signIn(email);
});

When('I compose and send an email to {string}', async function (this: ICustomWorld, recipient: string) {
  const subject = `Test Subject ${Date.now()}`;
  const body = 'This is a test email body.';
  await provisionPage.composeEmail(recipient, subject, body);
});

Then('I should receive a reply and verify the inbox', async function (this: ICustomWorld) {
  await provisionPage.refreshInbox();
  await provisionPage.expectEmailReceived();
});

Given('I start a provisioning request for the Nitrosamine service account', async function (this: ICustomWorld) {
  provisionPage = new ProvisionServiceAccountPage(this.page);
});

When('I submit the request with valid parameters', async function (this: ICustomWorld) {
  const requestData = {
    accountName: 'svc_nitrosamine_bot',
    unixGroups: ['brainiac-compute', 'gaussian'],
    lrlhpsPath: '/lrlhps/data/NirtosamineCalculation /Prod',
    guavaPath: '\\guava\\guava.grp\\MDPRDAUTOMATION\\PRD\\Nitrosamine_Calculation',
    monitoringDistribution: ['nitroso-ops@corp.example'],
  };
  await provisionPage.submitProvisioningRequest(requestData);
});

Then('the provisioning request should succeed', async function (this: ICustomWorld) {
  await provisionPage.expectProvisioningSuccess();
});