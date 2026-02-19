// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { TestMarketplaceRajeevPage } from '../pages/TestMarketplaceRajeevPage';

let pageObject: TestMarketplaceRajeevPage;

Given('I navigate to the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new TestMarketplaceRajeevPage(this.page);
  await pageObject.navigateToHomepage();
});

When('I check the page title', async function (this: ICustomWorld) {
  const title = await pageObject.getPageTitle();
  this.sharedData = { pageTitle: title }; // Store title for later use
});

Then('I should see the correct title', async function (this: ICustomWorld) {
  const expectedTitle = 'Fast and reliable end-to-end testing for modern web apps | Playwright';
  await pageObject.assertPageTitle(expectedTitle);
});