// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { TestMarketplaceRajeevPage } from './testmarketplacerajeev.page';
import { getCredential } from '../../../utils/common';

let pageObject: TestMarketplaceRajeevPage;

Given('I navigate to the login page at {string}', async function (this: ICustomWorld, url: string) {
  pageObject = new TestMarketplaceRajeevPage(this.page);
  await pageObject.navigateToLoginPage(url);
});

When('I enter valid credentials from environment variables', async function (this: ICustomWorld) {
  const username = getCredential('LOGIN_USERNAME');
  const password = getCredential('LOGIN_PASSWORD');
  await pageObject.enterUsername(username);
  await pageObject.enterPassword(password);
});

When('I leave the username field empty', async function (this: ICustomWorld) {
  const password = getCredential('LOGIN_PASSWORD');
  await pageObject.enterUsername('');
  await pageObject.enterPassword(password);
});

When('I enter an invalid username or password', async function (this: ICustomWorld) {
  await pageObject.enterUsername('invalid_user');
  await pageObject.enterPassword('invalid_pass');
});

When('I click the login button', async function (this: ICustomWorld) {
  await pageObject.clickLoginButton();
});

Then('I should see the home page with the top header navigation bar', async function (this: ICustomWorld) {
  await pageObject.expectHeaderNavigationVisible();
});

Then('I should see an error message indicating missing credentials', async function (this: ICustomWorld) {
  await pageObject.expectErrorMessageVisible();
});

Then('I should see an error message indicating invalid credentials', async function (this: ICustomWorld) {
  await pageObject.expectErrorMessageVisible();
});

Then('I should see the page header/navigation without logging in', async function (this: ICustomWorld) {
  await pageObject.expectHeaderNavigationVisible();
});