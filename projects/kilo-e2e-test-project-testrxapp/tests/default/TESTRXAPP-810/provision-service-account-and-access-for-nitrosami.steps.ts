// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { ProvisionServiceAccountAndAccessPage } from './provision-service-account-and-access-for-nitrosami.page';

let pageObject: ProvisionServiceAccountAndAccessPage;

Given('I am signed in as {string}', async function (this: ICustomWorld, email: string) {
  pageObject = new ProvisionServiceAccountAndAccessPage(this.page);
  await pageObject.signIn(email);
});

When('I compose and send an email to {string}', async function (this: ICustomWorld, recipient: string) {
  const subject = `Test Subject ${Date.now()}`;
  const body = `Test Body ${Date.now()}`;
  await pageObject.composeAndSendEmail(recipient, subject, body);
  this.scenarioContext = { subject, body };
});

When('I receive a reply from {string}', async function (this: ICustomWorld, sender: string) {
  await pageObject.refreshInbox();
  await pageObject.openFirstEmail();
});

Then('I should see the reply in my inbox', async function (this: ICustomWorld) {
  const { subject } = this.scenarioContext;
  await pageObject.expectEmailReply(subject);
});

When('I submit a test computational job', async function (this: ICustomWorld) {
  await pageObject.submitHPCJob();
});

When('I monitor the job status until it completes', async function (this: ICustomWorld) {
  await pageObject.monitorJobCompletion();
});

Then('the job should complete successfully', async function () {
  // No additional assertion needed, handled in monitorJobCompletion
});

When('I create and read a test file in {string}', async function (this: ICustomWorld, path: string) {
  const content = `Test Content ${Date.now()}`;
  await pageObject.createFile(content);
  this.scenarioContext = { content };
});

Then('the file operations should succeed', async function (this: ICustomWorld) {
  const { content } = this.scenarioContext;
  await pageObject.expectFileContent(content);
});