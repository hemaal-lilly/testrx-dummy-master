// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;

Given('I navigate to the login page', async function (this: ICustomWorld) {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});

When('I enter valid username and password', async function (this: ICustomWorld) {
  const validUsername = 'validUsernameFromExcel'; // Replace with actual data from Excel
  const validPassword = 'validPasswordFromExcel'; // Replace with actual data from Excel
  await loginPage.fillUsername(validUsername);
  await loginPage.fillPassword(validPassword);
});

When('I leave one credential field empty', async function (this: ICustomWorld) {
  const validPassword = 'validPasswordFromExcel'; // Replace with actual data from Excel
  await loginPage.fillPassword(validPassword);
});

When('I enter invalid username or password', async function (this: ICustomWorld) {
  const invalidUsername = 'invalidUsername';
  const invalidPassword = 'invalidPassword';
  await loginPage.fillUsername(invalidUsername);
  await loginPage.fillPassword(invalidPassword);
});

When('I click the login button', async function (this: ICustomWorld) {
  await loginPage.clickLoginButton();
});

Then('I should see the top header navigation bar', async function (this: ICustomWorld) {
  await loginPage.assertHeaderNavigationVisible();
});

Then('I should see an error message', async function (this: ICustomWorld) {
  await loginPage.assertErrorMessageVisible();
});

Then('I should see the page header/navigation', async function (this: ICustomWorld) {
  await loginPage.assertHeaderNavigationVisible();
});