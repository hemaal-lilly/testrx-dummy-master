// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { MarketplacePage } from '../pages/MarketplacePage';

let pageObject: MarketplacePage;

Given('I navigate to the login page', async function (this: ICustomWorld) {
  pageObject = new MarketplacePage(this.page);
  await pageObject.navigateToLoginPage();
});

When('I enter valid username and password', async function (this: ICustomWorld) {
  const username = 'validUsername'; // Replace with value from Excel sheet
  const password = 'validPassword'; // Replace with value from Excel sheet
  await pageObject.enterUsername(username);
  await pageObject.enterPassword(password);
});

When('I leave the username field empty', async function (this: ICustomWorld) {
  const password = 'validPassword'; // Replace with value from Excel sheet
  await pageObject.enterPassword(password);
});

When('I enter invalid username or password', async function (this: ICustomWorld) {
  const username = 'invalidUsername';
  const password = 'invalidPassword';
  await pageObject.enterUsername(username);
  await pageObject.enterPassword(password);
});

When('I click the login button', async function (this: ICustomWorld) {
  await pageObject.clickLoginButton();
});

Then('I should see the top header navigation bar', async function (this: ICustomWorld) {
  await pageObject.expectHeaderNavigationVisible();
});

Then('I should see an error message for missing credentials', async function (this: ICustomWorld) {
  await pageObject.expectErrorMessageVisible();
});

Then('I should see an error message for invalid credentials', async function (this: ICustomWorld) {
  await pageObject.expectErrorMessageVisible();
});

Then('I should see the page header/navigation', async function (this: ICustomWorld) {
  await pageObject.expectHeaderNavigationVisible();
});