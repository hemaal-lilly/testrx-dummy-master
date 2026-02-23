// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';
import { ICustomWorld } from '../support/world';

let pageObject: PlaywrightHomePage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new PlaywrightHomePage(this.page);
  await pageObject.navigate();
});

When('I check for the "Node.js" button', async function (this: ICustomWorld) {
  // No action needed here, just preparing for the assertion
});

Then('I should see the "Node.js" button and it should be clickable', async function (this: ICustomWorld) {
  await pageObject.verifyNodeJsButton();
});