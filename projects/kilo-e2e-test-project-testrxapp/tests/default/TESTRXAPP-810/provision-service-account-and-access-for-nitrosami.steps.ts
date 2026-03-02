// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { NitrosamineAutomationPage } from '../pages/NitrosamineAutomationPage';

let pageObject: NitrosamineAutomationPage;

Given('I am signed in as {string}', async function (this: ICustomWorld, email: string) {
  pageObject = new NitrosamineAutomationPage(this.page);
  await pageObject.navigateToEmailClient();
  await pageObject.signIn(email);
});

When('I compose and send an email to {string}', async function (this: ICustomWorld, recipient: string) {
  const subject = `Test Subject ${Date.now()}`;
  const body = `Test Body ${Date.now()}`;
  await pageObject.composeEmail(recipient, subject, body);
  await pageObject.sendEmail();
});

Then('I should receive a reply and verify the email content', async function (this: ICustomWorld) {
  await pageObject.refreshInbox();
  await pageObject.openReceivedEmail();
  await pageObject.verifyEmailContent('Reply Content');
});