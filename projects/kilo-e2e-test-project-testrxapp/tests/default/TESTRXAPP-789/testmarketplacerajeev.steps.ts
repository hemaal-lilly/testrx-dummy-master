// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { TestMarketplaceRajeevPage } from './testmarketplacerajeev.page';

let pageObject: TestMarketplaceRajeevPage;

Given('I navigate to the {string} page', async function (this: ICustomWorld, url: string) {
  pageObject = new TestMarketplaceRajeevPage(this.page);
  await pageObject.navigateToLoginPage(url);
});

When('I enter valid username and password', async function (this: ICustomWorld) {
  const username = 'valid_username'; // Replace with data from Excel or test data source
  const password = 'valid_password'; // Replace with data from Excel or test data source
  await pageObject.enterUsername(username);
  await pageObject.enterPassword(password);
});

When('I leave the username field empty', async function (this: ICustomWorld) {
  await pageObject.enterUsername('');
});

When('I enter a valid password', async function (this: ICustomWorld) {
  const password = 'valid_password'; // Replace with data from Excel or test data source
  await pageObject.enterPassword(password);
});

When('I enter an invalid username or password', async function (this: ICustomWorld) {
  const invalidUsername = 'invalid_username'; // Replace with invalid test data
  const invalidPassword = 'invalid_password'; // Replace with invalid test data
  await pageObject.enterUsername(invalidUsername);
  await pageObject.enterPassword(invalidPassword);
});

When('I click the Login button', async function (this: ICustomWorld) {
  await pageObject.clickLoginButton();
});

Then('I should see the top header navigation bar on the home page', async function (this: ICustomWorld) {
  await pageObject.assertHeaderNavigationVisible();
});

Then('I should see an error message indicating {string}', async function (this: ICustomWorld, errorMessage: string) {
  await pageObject.assertErrorMessageVisible(errorMessage);
});

Then('I should see the page header/navigation without logging in', async function (this: ICustomWorld) {
  await pageObject.assertPageHeaderVisible();
});