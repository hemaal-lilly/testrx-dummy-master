// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { ICustomWorld } from '../support/world';

let loginPage: LoginPage;

Given('I am on the login page', async function (this: ICustomWorld) {
  loginPage = new LoginPage(this.page);
  await loginPage.navigateToLoginPage();
});

When('I enter valid username and password', async function (this: ICustomWorld) {
  const username = 'valid_username'; // Replace with data from Excel sheet
  const password = 'valid_password'; // Replace with data from Excel sheet
  await loginPage.enterUsername(username);
  await loginPage.enterPassword(password);
});

When('I leave one credential field empty', async function (this: ICustomWorld) {
  const password = 'valid_password'; // Replace with data from Excel sheet
  await loginPage.enterPassword(password);
});

When('I enter invalid username or password', async function (this: ICustomWorld) {
  const username = 'invalid_username';
  const password = 'invalid_password';
  await loginPage.enterUsername(username);
  await loginPage.enterPassword(password);
});

When('I click the login button', async function (this: ICustomWorld) {
  await loginPage.clickLoginButton();
});

Then('I should see the home page with the top header navigation bar', async function (this: ICustomWorld) {
  await loginPage.expectHomePageHeader();
});

Then('I should see an error message indicating missing credentials', async function (this: ICustomWorld) {
  await loginPage.expectErrorMessage();
});

Then('I should see an error message indicating invalid credentials', async function (this: ICustomWorld) {
  await loginPage.expectErrorMessage();
});

Then('I should see the page header/navigation without logging in', async function (this: ICustomWorld) {
  await loginPage.expectPageHeaderWithoutLogin();
});