// Step Definitions for: Test_MarketPlace_Shankar
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

Then('the header title {string} is visible', async function (this: ICustomWorld, title: string) {
  await pageObject.assertHeaderTitleVisible();
});

Then('the header section is visible', async function () {
  await pageObject.assertHeaderSectionVisible();
});

Then('the hero banner is visible', async function () {
  await pageObject.assertHeroBannerVisible();
});

Then('the cards section is visible', async function () {
  await pageObject.assertCardsSectionVisible();
});

Then('the top header shows {string}', async function (this: ICustomWorld, text: string) {
  await pageObject.assertTopHeaderContains(text);
});

Then('the top header does not show {string}', async function (this: ICustomWorld, text: string) {
  await pageObject.assertTopHeaderDoesNotContain(text);
});

Then('the CTA button {string} is visible', async function (this: ICustomWorld, buttonText: string) {
  await pageObject.assertCTAButtonVisible();
});

Then('{string} tab is active/selected', async function (this: ICustomWorld, tabName: string) {
  await pageObject.assertHomeTabActive();
});

Then('{string} tab is not active/selected', async function (this: ICustomWorld, tabName: string) {
  await pageObject.assertHomeTabNotActive();
});