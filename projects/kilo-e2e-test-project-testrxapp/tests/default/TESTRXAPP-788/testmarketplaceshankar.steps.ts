// Step Definitions for: Enterprise Automation homepage UI visibility and state
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { EnterpriseAutomationPage } from '../pages/EnterpriseAutomationPage';

let pageObject: EnterpriseAutomationPage;

Given('I open https://qa.automate.lilly.com', async function (this: ICustomWorld) {
  pageObject = new EnterpriseAutomationPage(this.page);
  await pageObject.navigate();
});

Given('I am on the page', async function (this: ICustomWorld) {
  pageObject = new EnterpriseAutomationPage(this.page);
  await pageObject.navigate();
});

Given('I am on the home page', async function (this: ICustomWorld) {
  pageObject = new EnterpriseAutomationPage(this.page);
  await pageObject.navigate();
});

When('the page loads', async function () {
  // No specific action needed; navigation already waits for page load.
});

Then('the Lilly logo is visible', async function () {
  await pageObject.assertLillyLogoVisible();
});

Then('the Lilly logo is not visible', async function () {
  await pageObject.assertLillyLogoNotVisible();
});

Then('the header title {string} is visible', async function (title: string) {
  await pageObject.assertHeaderTitleVisible(title);
});

Then('the header section is visible', async function () {
  await expect(pageObject.headerSection).toBeVisible({ timeout: 5000 });
});

Then('the hero banner is visible', async function () {
  await expect(pageObject.heroBanner).toBeVisible({ timeout: 5000 });
});

Then('the cards section is visible', async function () {
  await expect(pageObject.cardsSection).toBeVisible({ timeout: 5000 });
});

Then('the top header shows {string}', async function (item: string) {
  await pageObject.assertTopHeaderItemVisible(item);
});

Then('the top header does not show {string}', async function (item: string) {
  await pageObject.assertTopHeaderItemNotVisible(item);
});

Then('the CTA button {string} is visible', async function (buttonText: string) {
  await pageObject.assertCTAButtonVisible(buttonText);
});

Then('{string} tab is active/selected', async function (tabName: string) {
  if (tabName === 'Home') {
    await pageObject.assertHomeTabActive();
  }
});

Then('{string} tab is not active/selected', async function (tabName: string) {
  if (tabName === 'Home') {
    await pageObject.assertHomeTabNotActive();
  }
});