// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { MarketplaceMarketplaceTabPage } from '../pages/MarketplaceMarketplaceTabPage';
import { ICustomWorld } from '../support/world';

let marketplacePage: MarketplaceMarketplaceTabPage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  marketplacePage = new MarketplaceMarketplaceTabPage(this.page);
  await marketplacePage.navigateToHomepage();
});

When('I click on the Marketplace tab', async function (this: ICustomWorld) {
  await marketplacePage.clickMarketplaceTab();
});

Then('I should see the Marketplace tab content', async function (this: ICustomWorld) {
  await marketplacePage.assertMarketplaceContentVisible();
});