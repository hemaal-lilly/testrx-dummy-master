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
  const validUsername = 'validUsernameFromExcel'; // Replace with actual data from Excel
  const validPassword = 'validPasswordFromExcel'; // Replace with actual data from Excel
  await loginPage.enterUsername(validUsername);
  await loginPage.enterPassword(validPassword);
});

When('I leave the username field empty', async function (this: ICustomWorld) {
  const validPassword = 'validPasswordFromExcel'; // Replace with actual data from Excel
  await loginPage.enterPassword(validPassword);
});

When('I enter an invalid username or password', async function (this: ICustomWorld) {
  const invalidUsername = 'invalidUsername';
  const invalidPassword = 'invalidPassword';
  await loginPage.enterUsername(invalidUsername);
  await loginPage.enterPassword(invalidPassword);
});

When('I click the Login button', async function (this: ICustomWorld) {
  await loginPage.clickLoginButton();
});

Then('I should see the navigation bar on the home page', async function (this: ICustomWorld) {
  await loginPage.expectNavigationBarVisible();
});

Then('I should see an error message indicating missing credentials', async function (this: ICustomWorld) {
  await loginPage.expectErrorMessageVisible();
});

Then('I should see an error message indicating invalid credentials', async function (this: ICustomWorld) {
  await loginPage.expectErrorMessageVisible();
});

Then('I should see the page header/navigation', async function (this: ICustomWorld) {
  await loginPage.expectPageHeaderVisible();
});