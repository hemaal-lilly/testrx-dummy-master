// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

let pageObject: PlaywrightHomePage;

Given('I navigate to the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new PlaywrightHomePage(this.page);
  await pageObject.navigate();
});

When('I verify the page title', async function (this: ICustomWorld) {
  await pageObject.verifyTitle();
});

Then('I should see the correct title displayed', async function (this: ICustomWorld) {
  // Title verification is already handled in the `verifyTitle` method.
  // No additional assertion is needed here.
});