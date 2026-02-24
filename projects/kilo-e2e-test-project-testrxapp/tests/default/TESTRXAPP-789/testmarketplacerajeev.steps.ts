// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { MarketplaceLoginPage } from '../pages/MarketplaceLoginPage';

let loginPage: MarketplaceLoginPage;

Given('I am on the login page', async function (this: ICustomWorld) {
  loginPage = new MarketplaceLoginPage(this.page);
  await loginPage.navigateToLoginPage();
});

When('I enter valid username and password', async function (this: ICustomWorld) {
  const username = 'validUsername'; // Replace with actual data from Excel sheet
  const password = 'validPassword'; // Replace with actual data from Excel sheet
  await loginPage.enterUsername(username);
  await loginPage.enterPassword(password);
});

When('I leave the username field empty', async function (this: ICustomWorld) {
  const password = 'validPassword'; // Replace with actual data from Excel sheet
  await loginPage.enterPassword(password);
});

When('I enter a valid password', async function (this: ICustomWorld) {
  const password = 'validPassword'; // Replace with actual data from Excel sheet
  await loginPage.enterPassword(password);
});

When('I enter an invalid username or password', async function (this: ICustomWorld) {
  const username = 'invalidUsername';
  const password = 'invalidPassword';
  await loginPage.enterUsername(username);
  await loginPage.enterPassword(password);
});

When('I click the Login button', async function (this: ICustomWorld) {
  await loginPage.clickLoginButton();
});

Then('I should see the home page header navigation bar', async function (this: ICustomWorld) {
  await loginPage.expectHeaderNavigationVisible();
});

Then('I should see an error message for missing credentials', async function (this: ICustomWorld) {
  await loginPage.expectErrorMessageVisible();
});

Then('I should see an error message for invalid credentials', async function (this: ICustomWorld) {
  await loginPage.expectErrorMessageVisible();
});

Then('I should see the page header/navigation', async function (this: ICustomWorld) {
  await loginPage.expectHeaderNavigationVisible();
});