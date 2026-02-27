// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { TestCsaLaunchpadPage } from '../pages/TestCsaLaunchpadPage';

let pageObject: TestCsaLaunchpadPage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new TestCsaLaunchpadPage(this.page);
  await pageObject.navigate();
});

When('I check for the "Node.js" button', async function (this: ICustomWorld) {
  const isVisible = await pageObject.isNodeJsButtonVisible();
  expect(isVisible).toBe(true);
});

Then('I should see the "Node.js" button is visible', async function (this: ICustomWorld) {
  await pageObject.assertNodeJsButtonVisible();
});