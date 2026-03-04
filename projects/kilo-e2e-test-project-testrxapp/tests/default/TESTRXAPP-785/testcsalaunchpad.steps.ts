// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { TestCsaLaunchpadPage } from './testcsalaunchpad.page';

let pageObject: TestCsaLaunchpadPage;

Given('I navigate to the Playwright launchpad page at {string}', async function (this: ICustomWorld, url: string) {
  pageObject = new TestCsaLaunchpadPage(this.page);
  await pageObject.navigateTo(url);
});

When('I wait for the page to load', async function (this: ICustomWorld) {
  // Explicit wait handled in the Page Object during navigation
});

Then('I should see the page title as {string}', async function (this: ICustomWorld, expectedTitle: string) {
  await pageObject.assertPageTitle(expectedTitle);
});