// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { MarketplaceTabPage } from '../pages/MarketplaceTabPage';

let pageObject: MarketplaceTabPage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new MarketplaceTabPage(this.page);
  await pageObject.navigateToHomePage();
});

When('I navigate to the Marketplace tab', async function (this: ICustomWorld) {
  await pageObject.clickMarketplaceTab();
});

Then('I should see the Marketplace tab content', async function (this: ICustomWorld) {
  await pageObject.expectMarketplaceContentVisible();
});