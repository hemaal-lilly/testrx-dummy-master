// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

let pageObject: PlaywrightHomePage;

Given('I navigate to the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new PlaywrightHomePage(this.page);
  await pageObject.navigate();
});

When('I check the page title', async function (this: ICustomWorld) {
  const title = await pageObject.getTitle();
  this.context.title = title; // Store title for validation
});

Then('I should see the correct title', async function (this: ICustomWorld) {
  const expectedTitle = 'Fast and reliable end-to-end testing for modern web apps | Playwright';
  await pageObject.assertTitle(expectedTitle);
});