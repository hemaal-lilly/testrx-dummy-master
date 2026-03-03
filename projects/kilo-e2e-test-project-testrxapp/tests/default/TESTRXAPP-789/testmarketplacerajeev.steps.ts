// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { TestMarketplaceRajeevPage } from './testmarketplacerajeev.page';

let pageObject: TestMarketplaceRajeevPage;

Given('I navigate to the login page', async function (this: ICustomWorld) {
  pageObject = new TestMarketplaceRajeevPage(this.page);
  await pageObject.navigateToLoginPage();
});

When('I enter valid username and password', async function (this: ICustomWorld) {
  const username = 'valid_username'; // Replace with data from Excel sheet
  const password = 'valid_password'; // Replace with data from Excel sheet
  await pageObject.enterUsername(username);
  await pageObject.enterPassword(password);
});

When('I leave the username field empty', async function (this: ICustomWorld) {
  const password = 'valid_password'; // Replace with data from Excel sheet
  await pageObject.enterPassword(password);
});

When('I enter an invalid username or password', async function (this: ICustomWorld) {
  const username = 'invalid_username';
  const password = 'invalid_password';
  await pageObject.enterUsername(username);
  await pageObject.enterPassword(password);
});

When('I click the login button', async function (this: ICustomWorld) {
  await pageObject.clickLoginButton();
});

Then('I should see the top header navigation bar', async function (this: ICustomWorld) {
  await pageObject.expectHeaderNavigationBarVisible();
});

Then('I should see an error message indicating missing credentials', async function (this: ICustomWorld) {
  await pageObject.expectErrorMessageVisible();
});

Then('I should see an error message indicating invalid credentials', async function (this: ICustomWorld) {
  await pageObject.expectErrorMessageVisible();
});

Then('I should see the page header/navigation', async function (this: ICustomWorld) {
  await pageObject.expectHeaderNavigationBarVisible();
});