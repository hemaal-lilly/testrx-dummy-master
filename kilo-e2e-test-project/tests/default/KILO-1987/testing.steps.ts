// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

let pageObject: PlaywrightHomePage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new PlaywrightHomePage(this.page);
  await pageObject.navigate();
});

When('I check the page title', async function (this: ICustomWorld) {
  // The page title is retrieved but not asserted here; assertion happens in Then step.
});

Then('I should see the correct page title', async function (this: ICustomWorld) {
  const expectedTitle = 'Fast and reliable end-to-end testing for modern web apps | Playwright';
  await pageObject.expectPageTitle(expectedTitle);
});