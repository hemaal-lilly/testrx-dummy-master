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
});

Given('I am on the home page', async function (this: ICustomWorld) {
  pageObject = new TestMarketplaceShankarPage(this.page);
});

When('the page loads', async function (this: ICustomWorld) {
  await this.page.waitForLoadState('networkidle');
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
  await pageObject.assertSectionVisible(pageObject.headerSection);
});

Then('the hero banner is visible', async function () {
  await pageObject.assertSectionVisible(pageObject.heroBanner);
});

Then('the cards section is visible', async function () {
  await pageObject.assertSectionVisible(pageObject.cardsSection);
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

Then('Home tab is active/selected', async function () {
  await pageObject.assertHomeTabActive();
});

Then('Home tab is not active/selected', async function () {
  await pageObject.assertHomeTabNotActive();
});