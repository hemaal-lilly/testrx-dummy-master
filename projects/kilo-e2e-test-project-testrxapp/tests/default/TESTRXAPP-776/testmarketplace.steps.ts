// Step Definitions for: Test_marketPlace
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { TestMarketplacePage } from './testmarketplace.page';

let pageObject: TestMarketplacePage;

Given('the marketplace page is loaded', async function (this: ICustomWorld) {
  pageObject = new TestMarketplacePage(this.page);
  await pageObject.navigateToMarketplace();
});

When('the page renders', async function (this: ICustomWorld) {
  // No additional action required, as the page is already loaded.
});

Then('the hero section is visible', async function (this: ICustomWorld) {
  await pageObject.assertHeroSectionVisible();
});

When('the hero section is viewed', async function (this: ICustomWorld) {
  // No additional action required, as the hero section is already visible.
});

Then('the heading text equals {string}', async function (this: ICustomWorld, expectedText: string) {
  await pageObject.assertHeroHeadingText(expectedText);
});

Then('a short descriptive text is displayed directly under the heading', async function (this: ICustomWorld) {
  await pageObject.assertHeroDescriptionVisible();
});

Then('a "Get Started" button is visible', async function (this: ICustomWorld) {
  await pageObject.assertGetStartedButtonVisible();
});

Then('a hero image is displayed on the right side of the hero section', async function (this: ICustomWorld) {
  await pageObject.assertHeroImageVisible();
});

When('the user scrolls to the cards section', async function (this: ICustomWorld) {
  await pageObject.scrollToCardsSection();
});

Then('the section title {string} is visible', async function (this: ICustomWorld, expectedText: string) {
  await pageObject.assertCardsSectionTitleVisible(expectedText);
});

When('the cards under the {string} section are viewed', async function (this: ICustomWorld) {
  // No additional action required, as the cards section is already visible.
});

Then('exactly {int} cards are visible', async function (this: ICustomWorld, expectedCount: number) {
  await pageObject.assertCardsCount(expectedCount);
});

Then('the card titles are {string}, {string}, and {string}', async function (this: ICustomWorld, title1: string, title2: string, title3: string) {
  await pageObject.assertCardTitles([title1, title2, title3]);
});

When('each displayed card under the {string} section is inspected', async function (this: ICustomWorld) {
  // No additional action required, as the cards are already visible.
});

Then('each card shows an image', async function (this: ICustomWorld) {
  await pageObject.assertCardElementsVisible();
});

Then('each card shows a title', async function (this: ICustomWorld) {
  await pageObject.assertCardElementsVisible();
});

Then('each card shows supporting descriptive text', async function (this: ICustomWorld) {
  await pageObject.assertCardElementsVisible();
});

Then('the "Get Started" button is not visible', async function (this: ICustomWorld) {
  await pageObject.assertGetStartedButtonNotVisible();
});

When('the browser is refreshed', async function (this: ICustomWorld) {
  await pageObject.refreshPage();
});

When('the page is hard reloaded bypassing cache', async function (this: ICustomWorld) {
  await pageObject.hardReload();
});

When('the browser window is resized between common mobile and desktop widths', async function (this: ICustomWorld) {
  await pageObject.resizeWindow(375, 812); // Mobile
  await pageObject.resizeWindow(1920, 1080); // Desktop
});

Then('the hero section remains visible', async function (this: ICustomWorld) {
  await pageObject.assertHeroSectionVisible();
});

Then('the {string} section remains visible', async function (this: ICustomWorld, sectionTitle: string) {
  await pageObject.assertCardsSectionTitleVisible(sectionTitle);
});