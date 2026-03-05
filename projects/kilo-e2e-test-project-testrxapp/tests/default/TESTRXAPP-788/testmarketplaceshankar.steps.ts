// Step Definitions for: Enterprise Automation homepage UI visibility and state
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { TestMarketplaceShankarPage } from './testmarketplaceshankar.page';

let pageObject: TestMarketplaceShankarPage;

Given('I open {string}', async function (this: ICustomWorld, url: string) {
  pageObject = new TestMarketplaceShankarPage(this.page);
  await pageObject.navigate(url);
});

Given('I am on the page', async function (this: ICustomWorld) {
  pageObject = new TestMarketplaceShankarPage(this.page);
  await pageObject.navigate('https://qa.automate.lilly.com');
});

Given('I am on the home page', async function (this: ICustomWorld) {
  pageObject = new TestMarketplaceShankarPage(this.page);
  await pageObject.navigate('https://qa.automate.lilly.com');
});

When('the page loads', async function () {
  await this.page.waitForLoadState('networkidle');
});

Then('the Lilly logo is visible', async function () {
  await pageObject.assertLillyLogoVisible();
});

Then('the Lilly logo is not visible', async function () {
  await pageObject.assertLillyLogoNotVisible();
});

Then('the header title {string} is visible', async function (expectedTitle: string) {
  await pageObject.assertHeaderTitle(expectedTitle);
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

Then('the top header shows {string}', async function (itemText: string) {
  await pageObject.assertNavigationItemVisible(itemText);
});

Then('the top header does not show {string}', async function (itemText: string) {
  await pageObject.assertNavigationItemNotVisible(itemText);
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