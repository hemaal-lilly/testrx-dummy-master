// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { TestMarketplaceRajeevPage } from './testmarketplacerajeev.page';

let pageObject: TestMarketplaceRajeevPage;

Given('I navigate to the marketplace at "{string}"', async function (this: ICustomWorld, url: string) {
  pageObject = new TestMarketplaceRajeevPage(this.page);
  await pageObject.navigateToMarketplace(url);
});

When('I enter valid username from the Excel sheet', async function (this: ICustomWorld) {
  const validUsername = this.data.username; // Assuming data is passed via ICustomWorld
  await pageObject.enterUsername(validUsername);
});

When('I enter valid password from the Excel sheet', async function (this: ICustomWorld) {
  const validPassword = this.data.password; // Assuming data is passed via ICustomWorld
  await pageObject.enterPassword(validPassword);
});

When('I leave the username field empty', async function (this: ICustomWorld) {
  await pageObject.enterUsername('');
});

When('I enter an invalid username or password', async function (this: ICustomWorld) {
  const invalidUsername = 'invalidUser';
  const invalidPassword = 'invalidPass';
  await pageObject.enterUsername(invalidUsername);
  await pageObject.enterPassword(invalidPassword);
});

When('I click the Login button', async function (this: ICustomWorld) {
  await pageObject.clickLoginButton();
});

Then('I should see the top header navigation bar', async function (this: ICustomWorld) {
  await pageObject.expectHeaderNavigationBarVisible();
});

Then('I should see an error message for missing credentials', async function (this: ICustomWorld) {
  await pageObject.expectErrorMessageVisible();
});

Then('I should see an error message for invalid credentials', async function (this: ICustomWorld) {
  await pageObject.expectErrorMessageVisible();
});

Then('I should see the page header/navigation', async function (this: ICustomWorld) {
  await pageObject.expectPageHeaderVisible();
});