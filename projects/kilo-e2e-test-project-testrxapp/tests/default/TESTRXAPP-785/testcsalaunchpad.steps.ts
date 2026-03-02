// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

let pageObject: PlaywrightHomePage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new PlaywrightHomePage(this.page);
  await pageObject.navigate();
});

When('I check for the Node.js button', async function (this: ICustomWorld) {
  // No specific action needed for this step
});

Then('I should see the Node.js button', async function (this: ICustomWorld) {
  await pageObject.isNodeJsButtonVisible();
});