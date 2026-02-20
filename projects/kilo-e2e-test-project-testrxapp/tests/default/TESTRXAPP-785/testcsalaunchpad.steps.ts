// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { TestCsaLaunchpadPage } from '../pages/TestCsaLaunchpadPage';

let pageObject: TestCsaLaunchpadPage;

Given('I navigate to the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new TestCsaLaunchpadPage(this.page);
  await pageObject.navigateToHomepage();
});

When('the page is loaded', async function (this: ICustomWorld) {
  // Explicit wait handled in the Page Object during navigation
});

Then('I should see the correct title', async function (this: ICustomWorld) {
  await pageObject.validatePageTitle();
});