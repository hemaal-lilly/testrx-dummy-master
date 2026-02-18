// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

let pageObject: PlaywrightHomePage;

Given('I navigate to the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new PlaywrightHomePage(this.page);
  await pageObject.navigate();
});

When('I wait for the page to load', async function (this: ICustomWorld) {
  // Explicit wait is already handled in the Page Object's navigate method.
});

Then('I should see the correct page title', async function (this: ICustomWorld) {
  const expectedTitle = 'Fast and reliable end-to-end testing for modern web apps | Playwright';
  await pageObject.assertPageTitle(expectedTitle);
});