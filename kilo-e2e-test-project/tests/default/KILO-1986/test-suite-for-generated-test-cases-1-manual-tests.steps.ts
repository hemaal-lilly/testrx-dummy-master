// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';
import { ICustomWorld } from '../support/world';

let pageObject: PlaywrightHomePage;

Given('I navigate to the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new PlaywrightHomePage(this.page);
  await pageObject.navigateToHomepage();
});

When('I check the page title', async function (this: ICustomWorld) {
  // No action needed here; title will be checked in the next step
});

Then('I should see the correct title', async function (this: ICustomWorld) {
  const expectedTitle = 'Fast and reliable end-to-end testing for modern web apps | Playwright';
  await pageObject.assertPageTitle(expectedTitle);
});