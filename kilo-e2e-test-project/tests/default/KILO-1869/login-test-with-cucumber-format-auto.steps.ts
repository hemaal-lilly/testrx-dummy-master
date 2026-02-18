// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  loginPage = new LoginPage(this.page);
  await loginPage.navigateToLoginPage();
});

When('I navigate to the login page and enter valid credentials', async function (this: ICustomWorld) {
  await loginPage.fillCredentials('testuser@example.com', 'securepassword123');
  await loginPage.clickLogin();
});

Then('I should be successfully logged in', async function (this: ICustomWorld) {
  await loginPage.verifyLoginSuccess();
});