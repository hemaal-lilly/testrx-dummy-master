// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { TestCsaLaunchpadPage } from './testcsalaunchpad.page';

let pageObject: TestCsaLaunchpadPage;

Given('I navigate to the {string} page', async function (this: ICustomWorld, url: string) {
  pageObject = new TestCsaLaunchpadPage(this.page);
  await pageObject.navigate(url);
});

When('I verify the page title', async function (this: ICustomWorld) {
  // No action needed here as the title will be asserted in the next step
});

Then('the page title should be {string}', async function (this: ICustomWorld, expectedTitle: string) {
  await pageObject.assertPageTitle(expectedTitle);
});