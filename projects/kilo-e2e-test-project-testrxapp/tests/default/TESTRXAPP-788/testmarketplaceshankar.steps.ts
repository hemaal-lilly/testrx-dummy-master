// Step Definitions for: Enterprise Automation Homepage UI visibility and state
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { TestMarketplaceShankarPage } from './testmarketplaceshankar.page';

let pageObject: TestMarketplaceShankarPage;

Given('I open {string}', async function (this: ICustomWorld, url: string) {
  pageObject = new TestMarketplaceShankarPage(this.page);
  await pageObject.navigateTo(url);
});

Given('I am on the page', async function (this: ICustomWorld) {
  pageObject = new TestMarketplaceShankarPage(this.page);
  await pageObject.navigateTo('https://qa.automate.lilly.com');
});

Given('I am on the home page', async function (this: ICustomWorld) {
  pageObject = new TestMarketplaceShankarPage(this.page);
  await pageObject.navigateTo('https://qa.automate.lilly.com');
});

When('the page loads', async function (this: ICustomWorld) {
  await this.page.waitForLoadState('networkidle');
});

Then('the Lilly logo is visible', async function (this: ICustomWorld) {
  await pageObject.assertElementVisible(pageObject.lillyLogo);
});

Then('the Lilly logo is not visible', async function (this: ICustomWorld) {
  await pageObject.assertElementNotVisible(pageObject.lillyLogo);
});

Then('the header title {string} is visible', async function (this: ICustomWorld, title: string) {
  await expect(pageObject.headerTitle).toHaveText(title, { timeout: 5000 });
});

Then('the header section is visible', async function (this: ICustomWorld) {
  await pageObject.assertElementVisible(pageObject.headerSection);
});

Then('the hero banner is visible', async function (this: ICustomWorld) {
  await pageObject.assertElementVisible(pageObject.heroBanner);
});

Then('the cards section is visible', async function (this: ICustomWorld) {
  await pageObject.assertElementVisible(pageObject.cardsSection);
});

Then('the top header shows {string}', async function (this: ICustomWorld, item: string) {
  await pageObject.assertNavItemVisible(item);
});

Then('the top header does not show {string}', async function (this: ICustomWorld, item: string) {
  await pageObject.assertNavItemNotVisible(item);
});

Then('the CTA button {string} is visible', async function (this: ICustomWorld, text: string) {
  await pageObject.assertElementVisible(pageObject.ctaButton(text));
});

Then('{string} tab is active/selected', async function (this: ICustomWorld, tabName: string) {
  if (tabName === 'Home') {
    await pageObject.assertHomeTabActive();
  }
});

Then('{string} tab is not active/selected', async function (this: ICustomWorld, tabName: string) {
  if (tabName === 'Home') {
    await pageObject.assertHomeTabNotActive();
  }
});