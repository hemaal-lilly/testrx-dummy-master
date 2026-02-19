// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { TestCsaLaunchpadPage } from '../pages/TestCsaLaunchpadPage';

let pageObject: TestCsaLaunchpadPage;

Given('I navigate to the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new TestCsaLaunchpadPage(this.page);
  await pageObject.navigate();
});

When('the page has fully loaded', async function (this: ICustomWorld) {
  // Explicit wait is handled in the Page Object's navigate method
});

Then('I should see the correct page title', async function (this: ICustomWorld) {
  await pageObject.assertPageTitle();
});