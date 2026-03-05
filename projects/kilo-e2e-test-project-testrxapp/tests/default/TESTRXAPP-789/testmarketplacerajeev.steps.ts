// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { TestMarketplaceRajeevPage } from './testmarketplacerajeev.page';
import { getCredential } from '../../../utils/common';

let pageObject: TestMarketplaceRajeevPage;

Given('I navigate to the page {string}', async function (this: ICustomWorld, url: string) {
  pageObject = new TestMarketplaceRajeevPage(this.page);
  await pageObject.navigateToPage(url);
});

When('I enter valid credentials', async function (this: ICustomWorld) {
  const username = getCredential('LOGIN_USERNAME');
  const password = getCredential('LOGIN_PASSWORD');
  await pageObject.enterUsername(username);
  await pageObject.enterPassword(password);
  await pageObject.clickLogin();
});

Then('I should see the top header navigation bar', async function (this: ICustomWorld) {
  await pageObject.expectHeaderNavigationBarVisible();
});

When('I leave the username field empty and enter a valid password', async function (this: ICustomWorld) {
  const password = getCredential('LOGIN_PASSWORD');
  await pageObject.enterPassword(password);
  await pageObject.clickLogin();
});

Then('I should see an error message indicating missing credentials', async function (this: ICustomWorld) {
  await pageObject.expectErrorMessageVisible();
});

When('I enter invalid username or password', async function (this: ICustomWorld) {
  await pageObject.enterUsername('invalid_user');
  await pageObject.enterPassword('invalid_pass');
  await pageObject.clickLogin();
});

Then('I should see an error message indicating invalid credentials', async function (this: ICustomWorld) {
  await pageObject.expectErrorMessageVisible();
});

Then('I should see the page header and navigation options', async function (this: ICustomWorld) {
  await pageObject.expectPageHeaderVisible();
});