// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { MarketplacePage } from '../pages/MarketplacePage';

let marketplacePage: MarketplacePage;

Given('I navigate to the login page', async function (this: ICustomWorld) {
  marketplacePage = new MarketplacePage(this.page);
  await marketplacePage.navigateToLoginPage();
});

When('I enter valid username and password', async function (this: ICustomWorld) {
  const username = 'validUsername'; // Replace with data from Excel sheet
  const password = 'validPassword'; // Replace with data from Excel sheet
  await marketplacePage.enterUsername(username);
  await marketplacePage.enterPassword(password);
});

When('I leave the username field empty', async function (this: ICustomWorld) {
  const password = 'validPassword'; // Replace with data from Excel sheet
  await marketplacePage.enterPassword(password);
});

When('I enter an invalid username or password', async function (this: ICustomWorld) {
  const invalidUsername = 'invalidUsername';
  const invalidPassword = 'invalidPassword';
  await marketplacePage.enterUsername(invalidUsername);
  await marketplacePage.enterPassword(invalidPassword);
});

When('I click the Login button', async function (this: ICustomWorld) {
  await marketplacePage.clickLoginButton();
});

Then('I should see the top header navigation bar on the home page', async function (this: ICustomWorld) {
  await marketplacePage.expectHeaderNavigationVisible();
});

Then('I should see an error message for missing credentials', async function (this: ICustomWorld) {
  await marketplacePage.expectErrorMessageVisible();
});

Then('I should see an error message for invalid credentials', async function (this: ICustomWorld) {
  await marketplacePage.expectErrorMessageVisible();
});

Then('I should see the page header/navigation without logging in', async function (this: ICustomWorld) {
  await marketplacePage.expectHeaderWithoutLogin();
});