// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { TestMarketplaceRajeevPage } from './testmarketplacerajeev.page';

let pageObject: TestMarketplaceRajeevPage;

Given('I navigate to the URL {string}', async function (this: ICustomWorld, url: string) {
  pageObject = new TestMarketplaceRajeevPage(this.page);
  await pageObject.navigateTo(url);
});

When('I enter valid username and password from the attached Excel sheet', async function (this: ICustomWorld) {
  const username = 'validUsername'; // Replace with dynamic data from Excel sheet
  const password = 'validPassword'; // Replace with dynamic data from Excel sheet
  await pageObject.enterUsername(username);
  await pageObject.enterPassword(password);
});

When('I leave the username field empty', async function (this: ICustomWorld) {
  const password = 'validPassword'; // Replace with dynamic data from Excel sheet
  await pageObject.enterPassword(password);
});

When('I enter a valid password from the attached Excel sheet', async function (this: ICustomWorld) {
  const password = 'validPassword'; // Replace with dynamic data from Excel sheet
  await pageObject.enterPassword(password);
});

When('I enter an invalid username or password', async function (this: ICustomWorld) {
  const username = 'invalidUsername';
  const password = 'invalidPassword';
  await pageObject.enterUsername(username);
  await pageObject.enterPassword(password);
});

When('I click the Login button', async function (this: ICustomWorld) {
  await pageObject.clickLogin();
});

Then('I should see the top header navigation bar', async function (this: ICustomWorld) {
  await pageObject.expectNavigationBarVisible();
});

Then('I should see an error message indicating missing credentials', async function (this: ICustomWorld) {
  await pageObject.expectErrorMessageVisible();
});

Then('I should see an error message indicating invalid credentials', async function (this: ICustomWorld) {
  await pageObject.expectErrorMessageVisible();
});

Then('I should see the page header/navigation', async function (this: ICustomWorld) {
  await pageObject.expectPageHeaderVisible();
});