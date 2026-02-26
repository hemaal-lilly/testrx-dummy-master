// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { TestMarketplaceRajeevPage } from '../pages/TestMarketplaceRajeevPage';

let pageObject: TestMarketplaceRajeevPage;

Given('I navigate to the login page', async function (this: ICustomWorld) {
  pageObject = new TestMarketplaceRajeevPage(this.page);
  await pageObject.navigateToLoginPage();
});

When('I enter valid username and password', async function (this: ICustomWorld) {
  const username = 'validUsername'; // Replace with data from Excel sheet
  const password = 'validPassword'; // Replace with data from Excel sheet
  await pageObject.fillUsername(username);
  await pageObject.fillPassword(password);
});

When('I leave one required credential field empty', async function (this: ICustomWorld) {
  const password = 'validPassword'; // Replace with data from Excel sheet
  await pageObject.fillPassword(password);
});

When('I enter valid value into the other field', async function (this: ICustomWorld) {
  const username = 'validUsername'; // Replace with data from Excel sheet
  await pageObject.fillUsername(username);
});

When('I enter invalid username or password', async function (this: ICustomWorld) {
  const username = 'invalidUsername';
  const password = 'invalidPassword';
  await pageObject.fillUsername(username);
  await pageObject.fillPassword(password);
});

When('I click the Login button', async function (this: ICustomWorld) {
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