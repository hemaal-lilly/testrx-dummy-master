// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';
import { ICustomWorld } from '../support/world';

let playwrightHomePage: PlaywrightHomePage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  playwrightHomePage = new PlaywrightHomePage(this.page);
  await playwrightHomePage.navigateToHomePage();
});

When('I check for the "Node.js" button', async function (this: ICustomWorld) {
  // No additional actions needed for this step
});

Then('I should see the "Node.js" button displayed', async function (this: ICustomWorld) {
  await playwrightHomePage.verifyNodeJsButtonVisible();
});