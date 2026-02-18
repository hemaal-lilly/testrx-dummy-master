// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { MarketplaceTestAutomationPage } from '../pages/MarketplaceTestAutomationPage';

let pageObject: MarketplaceTestAutomationPage;

Given('I navigate to the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new MarketplaceTestAutomationPage(this.page);
  await pageObject.navigateToHomepage();
});

When('I check the page title', async function (this: ICustomWorld) {
  // No explicit action needed, title will be checked in the next step
});

Then('I should see the correct page title', async function (this: ICustomWorld) {
  const expectedTitle = 'Fast and reliable end-to-end testing for modern web apps | Playwright';
  await pageObject.assertPageTitle(expectedTitle);
});