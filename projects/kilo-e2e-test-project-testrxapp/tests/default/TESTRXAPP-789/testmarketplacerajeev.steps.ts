// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { TestMarketplaceRajeevPage } from '../pages/TestMarketplaceRajeevPage';

let pageObject: TestMarketplaceRajeevPage;

Given('I am on the login page', async function (this: ICustomWorld) {
  pageObject = new TestMarketplaceRajeevPage(this.page);
  await pageObject.navigateToLoginPage();
});

When('I enter valid username and password', async function (this: ICustomWorld) {
  const validUsername = 'validUsernameFromExcel'; // Replace with actual data from Excel
  const validPassword = 'validPasswordFromExcel'; // Replace with actual data from Excel
  await pageObject.enterUsername(validUsername);
  await pageObject.enterPassword(validPassword);
});

When('I leave the username field empty', async function (this: ICustomWorld) {
  const validPassword = 'validPasswordFromExcel'; // Replace with actual data from Excel
  await pageObject.enterPassword(validPassword);
});

When('I enter an invalid username or password', async function (this: ICustomWorld) {
  const invalidUsername = 'invalidUsername';
  const invalidPassword = 'invalidPassword';
  await pageObject.enterUsername(invalidUsername);
  await pageObject.enterPassword(invalidPassword);
});

When('I click the Login button', async function (this: ICustomWorld) {
  await pageObject.clickLoginButton();
});

Then('I should see the homepage with the top header navigation bar', async function (this: ICustomWorld) {
  await pageObject.expectHomepageHeader();
});

Then('I should see an error message indicating missing credentials', async function (this: ICustomWorld) {
  await pageObject.expectErrorMessage();
});

Then('I should see an error message indicating invalid credentials', async function (this: ICustomWorld) {
  await pageObject.expectErrorMessage();
});

Then('I should see the page header/navigation', async function (this: ICustomWorld) {
  await pageObject.expectHomepageHeader();
});