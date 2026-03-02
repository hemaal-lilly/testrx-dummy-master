// Step Definitions for: Test_marketPlace
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { MarketplacePage } from '../pages/MarketplacePage';

let pageObject: MarketplacePage;

Given('the marketplace page is loaded', async function (this: ICustomWorld) {
  pageObject = new MarketplacePage(this.page);
  await pageObject.navigate();
});

When('the page renders', async function () {
  // No specific action required, page is already loaded
});

Then('the hero section is visible', async function () {
  await pageObject.expectHeroSectionVisible();
});

When('the hero section is viewed', async function () {
  // No specific action required, hero section is already loaded
});

Then('the heading text equals {string}', async function (expectedText: string) {
  await pageObject.expectHeroHeadingText(expectedText);
});

Then('a short descriptive text is displayed directly under the heading', async function () {
  await pageObject.expectHeroDescriptionVisible();
});

Then('a "Get Started" button is visible', async function () {
  await pageObject.expectGetStartedButtonVisible();
});

Then('a hero image is displayed on the right side of the hero section', async function () {
  await pageObject.expectHeroImageVisible();
});

When('the user scrolls to the cards section', async function () {
  await pageObject.cardsSectionTitle.scrollIntoViewIfNeeded();
});

Then('the section title {string} is visible', async function (expectedText: string) {
  await pageObject.expectCardsSectionTitleVisible(expectedText);
});

When('the cards under the {string} section are viewed', async function () {
  // No specific action required, cards section is already loaded
});

Then('exactly {int} cards are visible', async function (expectedCount: number) {
  await pageObject.expectCardCount(expectedCount);
});

Then('the card titles are {string}, {string}, and {string}', async function (title1: string, title2: string, title3: string) {
  await pageObject.expectCardTitles([title1, title2, title3]);
});

When('each displayed card under the {string} section is inspected', async function () {
  // No specific action required, cards are already loaded
});

Then('each card shows an image', async function () {
  await pageObject.expectCardElementsVisible();
});

Then('each card shows a title', async function () {
  await pageObject.expectCardElementsVisible();
});

Then('each card shows supporting descriptive text', async function () {
  await pageObject.expectCardElementsVisible();
});

Then('the "Get Started" button is not visible', async function () {
  await pageObject.expectGetStartedButtonNotVisible();
});

When('the browser is refreshed', async function () {
  await pageObject.refreshPage();
});

When('the page is hard reloaded bypassing cache', async function () {
  await pageObject.hardReload();
});

When('the browser window is resized between common mobile and desktop widths', async function () {
  await pageObject.resizeWindow(375, 667); // Mobile size
  await pageObject.resizeWindow(1280, 720); // Desktop size
});

Then('the hero section remains visible', async function () {
  await pageObject.expectHeroSectionVisible();
});

Then('the {string} section remains visible', async function (sectionTitle: string) {
  await pageObject.expectCardsSectionTitleVisible(sectionTitle);
});