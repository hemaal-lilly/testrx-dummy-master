// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;

Given('I am on the login page', async function (this: ICustomWorld) {
  loginPage = new LoginPage(this.page);
  await loginPage.navigateToLoginPage();
});

When('I enter valid credentials', async function (this: ICustomWorld) {
  const username = 'validUsername'; // Replace with value from Excel
  const password = 'validPassword'; // Replace with value from Excel
  await loginPage.enterUsername(username);
  await loginPage.enterPassword(password);
});

When('I leave one required credential field empty', async function (this: ICustomWorld) {
  const password = 'validPassword'; // Replace with value from Excel
  await loginPage.enterPassword(password);
});

When('I enter invalid credentials', async function (this: ICustomWorld) {
  const username = 'invalidUsername';
  const password = 'invalidPassword';
  await loginPage.enterUsername(username);
  await loginPage.enterPassword(password);
});

When('I click the login button', async function (this: ICustomWorld) {
  await loginPage.clickLoginButton();
});

Then('I should see the home page with the top header navigation bar', async function (this: ICustomWorld) {
  await loginPage.expectHeaderNavigationVisible();
});

Then('I should see an error message indicating a missing credential', async function (this: ICustomWorld) {
  await loginPage.expectErrorMessageVisible();
});

Then('I should see an error message indicating invalid credentials', async function (this: ICustomWorld) {
  await loginPage.expectErrorMessageVisible();
});

Then('I should see the page header/navigation without logging in', async function (this: ICustomWorld) {
  await loginPage.expectHeaderNavigationVisible();
});