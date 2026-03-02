// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { ProvisionServiceAccountPage } from '../pages/ProvisionServiceAccountPage';

let pageObject: ProvisionServiceAccountPage;

Given('I am signed in as {string}', async function (this: ICustomWorld, account: string) {
  pageObject = new ProvisionServiceAccountPage(this.page);
  await pageObject.signIn(account);
});

When('I compose and send an email to {string}', async function (this: ICustomWorld, recipient: string) {
  const subject = `Test Subject ${Date.now()}`;
  const body = `Test Body ${Date.now()}`;
  await pageObject.composeEmail(recipient, subject, body);
});

Then('I should see the email in the recipient\'s inbox', async function (this: ICustomWorld) {
  const subject = `Test Subject ${Date.now()}`;
  await pageObject.refreshInbox();
  await pageObject.expectEmailInInbox(subject);
});

Given('I start a provisioning request for the Nitrosamine service account', async function (this: ICustomWorld) {
  pageObject = new ProvisionServiceAccountPage(this.page);
});

When('I populate the required fields and submit the request', async function (this: ICustomWorld) {
  const fields = {
    account_name: 'svc_nitrosamine_bot',
    unix_groups: ['brainiac-compute', 'gaussian'],
    lrlhps_path: '/lrlhps/data/NirtosamineCalculation/Prod',
    guava_path: '\\guava\\guava.grp\\MDPRDAUTOMATION\\PRD\\Nitrosamine_Calculation',
    monitoring_distribution: ['nitroso-ops@corp.example'],
  };
  await pageObject.submitProvisioningRequest(fields);
});

Then('I should see the provisioning request succeed', async function (this: ICustomWorld) {
  await pageObject.expectProvisioningSuccess();
});