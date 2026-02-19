// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;

Given('I am on the login page', async function (this: ICustomWorld) {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});

When('I enter valid credentials and submit', async function (this: ICustomWorld) {
  await loginPage.fillEmail('testuser@example.com');
  await loginPage.fillPassword('securePassword123');
  await loginPage.submitLogin();
});

Then('I should be logged in successfully', async function (this: ICustomWorld) {
  await loginPage.expectSuccessfulLogin();
});