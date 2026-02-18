// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  loginPage = new LoginPage(this.page);
  await loginPage.navigateToLogin();
});

When('I navigate to the login page', async function (this: ICustomWorld) {
  // Navigation is already handled in the Given step; this step is redundant.
});

When('I enter valid credentials', async function (this: ICustomWorld) {
  await loginPage.fillEmail('testuser@example.com');
  await loginPage.fillPassword('securepassword123');
});

When('I submit the login form', async function (this: ICustomWorld) {
  await loginPage.submitLoginForm();
});

Then('I should be logged in successfully', async function (this: ICustomWorld) {
  await loginPage.expectSuccessfulLogin();
});