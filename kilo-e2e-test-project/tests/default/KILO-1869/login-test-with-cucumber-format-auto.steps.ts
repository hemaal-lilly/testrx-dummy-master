// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

let homePage: PlaywrightHomePage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  homePage = new PlaywrightHomePage(this.page);
});

When('I navigate to the page', async function (this: ICustomWorld) {
  await homePage.navigate();
});

Then('I should see the correct page title', async function (this: ICustomWorld) {
  await homePage.validatePageTitle();
});