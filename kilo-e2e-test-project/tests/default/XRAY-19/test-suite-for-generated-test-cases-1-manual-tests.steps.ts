// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

let playwrightHomePage: PlaywrightHomePage;

Given('I navigate to the Playwright homepage', async function (this: ICustomWorld) {
  playwrightHomePage = new PlaywrightHomePage(this.page);
  await playwrightHomePage.navigate();
});

When('the page is fully loaded', async function (this: ICustomWorld) {
  // Implicitly handled by the navigate method's waitForLoadState
});

Then('I should see the correct page title', async function (this: ICustomWorld) {
  await playwrightHomePage.assertPageTitle();
});