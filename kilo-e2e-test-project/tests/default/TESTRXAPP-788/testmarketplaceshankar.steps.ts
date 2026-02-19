// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

let homePage: PlaywrightHomePage;

Given('I navigate to the Playwright homepage', async function (this: ICustomWorld) {
  homePage = new PlaywrightHomePage(this.page);
  await homePage.navigate();
});

When('I check the page title', async function (this: ICustomWorld) {
  // No action needed here as the title is checked in the next step
});

Then('I should see the correct page title', async function (this: ICustomWorld) {
  const expectedTitle = 'Fast and reliable end-to-end testing for modern web apps | Playwright';
  await homePage.verifyPageTitle(expectedTitle);
});