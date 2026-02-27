// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { MarketplacePage } from '../pages/MarketplacePage';

let marketplacePage: MarketplacePage;

Given('I am on the login page', async function (this: ICustomWorld) {
  marketplacePage = new MarketplacePage(this.page);
  await marketplacePage.navigateToLoginPage();
});

When('I enter valid username and password', async function (this: ICustomWorld) {
  const validUsername = 'validUsernameFromExcel'; // Replace with actual data from Excel
  const validPassword = 'validPasswordFromExcel'; // Replace with actual data from Excel
  await marketplacePage.enterUsername(validUsername);
  await marketplacePage.enterPassword(validPassword);
});

When('I leave the username field empty', async function (this: ICustomWorld) {
  const validPassword = 'validPasswordFromExcel'; // Replace with actual data from Excel
  await marketplacePage.enterPassword(validPassword);
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

Then('I should see the top header navigation bar', async function (this: ICustomWorld) {
  await marketplacePage.expectHeaderNavigationVisible();
});

Then('I should see an error message', async function (this: ICustomWorld) {
  await marketplacePage.expectErrorMessageVisible();
});

Then('I should see the page header/navigation', async function (this: ICustomWorld) {
  await marketplacePage.expectPageHeaderVisible();
});