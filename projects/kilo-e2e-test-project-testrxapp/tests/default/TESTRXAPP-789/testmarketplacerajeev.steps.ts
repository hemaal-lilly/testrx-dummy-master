// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;

Given('I navigate to the login page', async function (this: ICustomWorld) {
  loginPage = new LoginPage(this.page);
  await loginPage.navigateToLoginPage();
});

When('I enter valid username and password', async function (this: ICustomWorld) {
  const validUsername = 'validUsernameFromExcel';
  const validPassword = 'validPasswordFromExcel';
  await loginPage.fillUsername(validUsername);
  await loginPage.fillPassword(validPassword);
  await loginPage.clickLoginButton();
});

Then('I should see the home page with the top header navigation bar', async function (this: ICustomWorld) {
  await loginPage.assertHeaderNavigationVisible();
});

When('I leave the username field empty and enter a valid password', async function (this: ICustomWorld) {
  const validPassword = 'validPasswordFromExcel';
  await loginPage.fillPassword(validPassword);
  await loginPage.clickLoginButton();
});

Then('I should see an error message indicating missing username', async function (this: ICustomWorld) {
  await loginPage.assertErrorMessage('Username is required');
});

When('I enter invalid username or password', async function (this: ICustomWorld) {
  const invalidUsername = 'invalidUsername';
  const invalidPassword = 'invalidPassword';
  await loginPage.fillUsername(invalidUsername);
  await loginPage.fillPassword(invalidPassword);
  await loginPage.clickLoginButton();
});

Then('I should see an error message indicating invalid credentials', async function (this: ICustomWorld) {
  await loginPage.assertErrorMessage('Invalid username or password');
});

Then('I should see the page header/navigation without logging in', async function (this: ICustomWorld) {
  await loginPage.assertHeaderNavigationVisible();
});