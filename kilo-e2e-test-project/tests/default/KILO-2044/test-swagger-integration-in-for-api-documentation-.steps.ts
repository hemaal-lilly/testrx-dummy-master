// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

let playwrightHomePage: PlaywrightHomePage;

Given('I navigate to the Playwright homepage', async function (this: ICustomWorld) {
  playwrightHomePage = new PlaywrightHomePage(this.page);
  await playwrightHomePage.navigate();
});

When('I check the page title', async function (this: ICustomWorld) {
  // No action needed here as the title will be checked in the next step
});

Then('I should see the correct title displayed', async function (this: ICustomWorld) {
  const expectedTitle = 'Fast and reliable end-to-end testing for modern web apps | Playwright';
  await playwrightHomePage.assertPageTitle(expectedTitle);
});