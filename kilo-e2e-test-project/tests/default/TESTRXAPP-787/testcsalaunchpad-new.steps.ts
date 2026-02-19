// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { TestCsaLaunchpadNewPage } from '../pages/TestCsaLaunchpadNewPage';
import { ICustomWorld } from '../support/world';

let pageObject: TestCsaLaunchpadNewPage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new TestCsaLaunchpadNewPage(this.page);
  await pageObject.navigate();
});

When('I check the page title', async function (this: ICustomWorld) {
  // No explicit action needed here; title will be checked in the next step.
});

Then('I should see the correct page title', async function (this: ICustomWorld) {
  const expectedTitle = 'Fast and reliable end-to-end testing for modern web apps | Playwright';
  await pageObject.assertPageTitle(expectedTitle);
});