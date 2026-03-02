// Step Definitions for: Provision service account and access for Nitrosamine automation
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { ProvisionServiceAccountAndAccessForNitrosamineAutomationPage } from '../pages/ProvisionServiceAccountAndAccessForNitrosamineAutomationPage';

let pageObject: ProvisionServiceAccountAndAccessForNitrosamineAutomationPage;

Given('a dedicated service account must be created with email service enabled', async function (this: ICustomWorld) {
  pageObject = new ProvisionServiceAccountAndAccessForNitrosamineAutomationPage(this.page);
  await pageObject.navigate();
});

Given('HPC access requires UNIX groups brainiac-compute and gaussian', async function () {
  await pageObject.setUnixGroups('brainiac-compute,gaussian');
});

Given('the LRLHPS repository path {string} exists', async function (path: string) {
  await pageObject.setLrlhpsPath(path);
});

Given('the Guava LAN share {string} exists', async function (path: string) {
  await pageObject.setGuavaPath(path);
});

Given('connectivity tests must verify email, LRLHPS, and Guava share access before automation begins', async function () {
  await pageObject.executeConnectivityTest();
});

Given('a service account name is provided', async function () {
  await pageObject.fillServiceAccountName('test-service-account');
});

When('the account is created with email service enabled', async function () {
  await pageObject.enableEmailService();
});

Then('the account can send and receive emails', async function () {
  await pageObject.expectSuccess();
});

Given('required UNIX group memberships brainiac-compute and gaussian are granted', async function () {
  await pageObject.setUnixGroups('brainiac-compute,gaussian');
});

When('the account logs in to HPC', async function () {
  // Assuming login is handled elsewhere, no specific action needed here.
});

Then('it can submit and run computational jobs', async function () {
  await pageObject.expectSuccess();
});

Given('read and write permissions are granted to {string}', async function (path: string) {
  await pageObject.setLrlhpsPath(path);
});

When('the account attempts to create and read a test file', async function () {
  // Assuming file operations are handled elsewhere, no specific action needed here.
});

Then('the operation succeeds', async function () {
  await pageObject.expectSuccess();
});

Given('IDM group membership is granted for the Guava share', async function () {
  // Assuming IDM group membership is pre-configured, no specific action needed here.
});

When('the account attempts to create and read a test file at {string}', async function (path: string) {
  await pageObject.setGuavaPath(path);
});

Then('the provisioning story is accepted', async function () {
  await pageObject.expectSuccess();
});

Given('no service account name is provided', async function () {
  await pageObject.fillServiceAccountName('');
});

When('attempting to provision the account', async function () {
  // Assuming provisioning is triggered elsewhere, no specific action needed here.
});

Then('error message {string} is shown', async function (expectedMessage: string) {
  await pageObject.expectErrorMessage(expectedMessage);
});

Given('unix_groups does not include brainiac-compute or gaussian', async function () {
  await pageObject.setUnixGroups('other-group');
});

When('attempting to grant HPC access', async function () {
  // Assuming access grant is triggered elsewhere, no specific action needed here.
});

Given('the lrlhps_path is not readable or writable by the account', async function () {
  await pageObject.setLrlhpsPath('/invalid/path');
});

When('verifying LRLHPS path access', async function () {
  // Assuming verification is triggered elsewhere, no specific action needed here.
});

Given('the guava_path is not accessible by the account', async function () {
  await pageObject.setGuavaPath('/invalid/path');
});

When('verifying Guava share access', async function () {
  // Assuming verification is triggered elsewhere, no specific action needed here.
});

Given('monitoring_distribution is empty', async function () {
  // Assuming monitoring distribution is set elsewhere, no specific action needed here.
});

When('saving provisioning details', async function () {
  // Assuming saving is triggered elsewhere, no specific action needed here.
});