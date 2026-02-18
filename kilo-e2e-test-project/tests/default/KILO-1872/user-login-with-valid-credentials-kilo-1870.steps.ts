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

When('I log in with valid credentials', async function (this: ICustomWorld) {
  await loginPage.fillEmail('validuser@example.com');
  await loginPage.fillPassword('securepassword123');
  await loginPage.clickLogin();
});

Then('I should see the dashboard page', async function (this: ICustomWorld) {
  await loginPage.expectDashboardPage();
});