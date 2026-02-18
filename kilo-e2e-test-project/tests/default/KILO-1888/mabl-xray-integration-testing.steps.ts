// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';
import { ICustomWorld } from '../support/world';

let pageObject: PlaywrightHomePage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new PlaywrightHomePage(this.page);
  await pageObject.navigate();
});

When('I verify the page title', async function (this: ICustomWorld) {
  // No explicit action needed; verification happens in the next step
});

Then('I should see the correct title displayed', async function (this: ICustomWorld) {
  const expectedTitle = 'Fast and reliable end-to-end testing for modern web apps | Playwright';
  await pageObject.assertPageTitle(expectedTitle);
});