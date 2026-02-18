// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { UserLoginPage } from '../pages/UserLoginPage';

let loginPage: UserLoginPage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  loginPage = new UserLoginPage(this.page);
  await loginPage.navigate();
});

When('I enter valid credentials and submit', async function (this: ICustomWorld) {
  await loginPage.fillEmail('test@example.com');
  await loginPage.fillPassword('securePassword123');
  await loginPage.submit();
});

Then('I should be redirected to the success page', async function (this: ICustomWorld) {
  await loginPage.expectSuccess();
});