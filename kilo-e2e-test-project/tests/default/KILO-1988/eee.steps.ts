// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

let homePage: PlaywrightHomePage;

Given('I navigate to the Playwright homepage', async function (this: ICustomWorld) {
  homePage = new PlaywrightHomePage(this.page);
  await homePage.navigate();
});

When('I wait for the page to load', async function (this: ICustomWorld) {
  // Explicit wait is handled in the Page Object's navigate method
});

Then('I should see the correct page title', async function (this: ICustomWorld) {
  await homePage.expectCorrectTitle();
});