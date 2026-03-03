// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../../../support/world';
import { TestCsaLaunchpadPage } from './testcsalaunchpad.page';

let pageObject: TestCsaLaunchpadPage;

Given('I navigate to the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new TestCsaLaunchpadPage(this.page);
  await pageObject.navigateToHomepage();
});

When('I wait for the page to load', async function (this: ICustomWorld) {
  // Explicit wait handled within the Page Object navigate method.
});

Then('I should see the correct page title', async function (this: ICustomWorld) {
  await pageObject.validatePageTitle();
});