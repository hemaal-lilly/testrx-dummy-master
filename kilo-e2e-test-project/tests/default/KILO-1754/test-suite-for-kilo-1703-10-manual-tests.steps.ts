// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';
import { ICustomWorld } from '../support/world';

let pageObject: PlaywrightHomePage;

Given('I navigate to the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new PlaywrightHomePage(this.page);
  await pageObject.navigate();
});

When('I wait for the page to load completely', async function (this: ICustomWorld) {
  // Explicit wait handled in the page object navigate method
});

Then('I should see the correct page title', async function (this: ICustomWorld) {
  await pageObject.validateTitle();
});