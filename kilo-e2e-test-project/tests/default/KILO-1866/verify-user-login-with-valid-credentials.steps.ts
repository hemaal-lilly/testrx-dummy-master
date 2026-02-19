// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;

Given('I am on the login page', async function (this: ICustomWorld) {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});

When('I enter valid credentials and submit', async function (this: ICustomWorld) {
  await loginPage.fillEmail('validuser@example.com');
  await loginPage.fillPassword('securepassword123');
  await loginPage.submit();
});

Then('I should be redirected to the dashboard', async function (this: ICustomWorld) {
  await loginPage.expectDashboard();
});