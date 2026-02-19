// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { MarketplaceTestAutomationPage } from '../pages/MarketplaceTestAutomationPage';

let pageObject: MarketplaceTestAutomationPage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new MarketplaceTestAutomationPage(this.page);
  await pageObject.navigateToHomepage();
});

When('I check the page title', async function (this: ICustomWorld) {
  // No additional action needed for this step
});

Then('the title should be {string}', async function (this: ICustomWorld, expectedTitle: string) {
  await pageObject.assertPageTitle(expectedTitle);
});