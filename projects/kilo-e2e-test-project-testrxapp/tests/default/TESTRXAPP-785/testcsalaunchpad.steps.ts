// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { TestCsaLaunchpadPage } from './testcsalaunchpad.page';

let pageObject: TestCsaLaunchpadPage;

Given('I navigate to the {string} homepage', async function (this: ICustomWorld, siteName: string) {
  pageObject = new TestCsaLaunchpadPage(this.page);
  if (siteName === 'Playwright') {
    await pageObject.navigateToHomepage();
  } else {
    throw new Error(`Unsupported site: ${siteName}`);
  }
});

When('the page is fully loaded', async function (this: ICustomWorld) {
  // Ensure the page has finished loading
  await this.page?.waitForLoadState('networkidle');
});

Then('I should see the title {string}', async function (this: ICustomWorld, expectedTitle: string) {
  await pageObject.verifyPageTitle(expectedTitle);
});