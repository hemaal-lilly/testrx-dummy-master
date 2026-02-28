// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { MarketplaceLoginPage } from '../pages/MarketplaceLoginPage';

let loginPage: MarketplaceLoginPage;

Given('I navigate to the login page', async function (this: ICustomWorld) {
  loginPage = new MarketplaceLoginPage(this.page);
  await loginPage.navigate();
});

When('I enter valid credentials', async function (this: ICustomWorld) {
  const username = 'validUsername'; // Replace with actual data from Excel
  const password = 'validPassword'; // Replace with actual data from Excel
  await loginPage.enterUsername(username);
  await loginPage.enterPassword(password);
});

When('I leave the username field empty', async function (this: ICustomWorld) {
  await loginPage.enterUsername('');
});

When('I enter a valid password', async function (this: ICustomWorld) {
  const password = 'validPassword'; // Replace with actual data from Excel
  await loginPage.enterPassword(password);
});

When('I enter invalid credentials', async function (this: ICustomWorld) {
  const username = 'invalidUsername';
  const password = 'invalidPassword';
  await loginPage.enterUsername(username);
  await loginPage.enterPassword(password);
});

When('I click the login button', async function (this: ICustomWorld) {
  await loginPage.clickLogin();
});

Then('I should see the home page header', async function (this: ICustomWorld) {
  await loginPage.expectHeaderVisible();
});

Then('I should see an error message for missing credentials', async function (this: ICustomWorld) {
  await loginPage.expectErrorMessageVisible();
});

Then('I should see an error message for invalid credentials', async function (this: ICustomWorld) {
  await loginPage.expectErrorMessageVisible();
});

Then('I should see the page header', async function (this: ICustomWorld) {
  await loginPage.expectHeaderVisible();
});