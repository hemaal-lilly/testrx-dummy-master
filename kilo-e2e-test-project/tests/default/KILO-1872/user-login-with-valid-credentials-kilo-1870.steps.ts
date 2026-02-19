// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { UserLoginWithValidCredentialskilo1870Page } from '../pages/UserLoginWithValidCredentialskilo1870Page';

let pageObject: UserLoginWithValidCredentialskilo1870Page;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new UserLoginWithValidCredentialskilo1870Page(this.page);
  await pageObject.navigate();
});

When('I enter valid credentials and submit the login form', async function (this: ICustomWorld) {
  await pageObject.fillEmail('test@example.com');
  await pageObject.fillPassword('securePassword123');
  await pageObject.submit();
});

Then('I should be redirected to the success page', async function (this: ICustomWorld) {
  await pageObject.expectSuccess();
});