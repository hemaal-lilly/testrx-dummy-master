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

When('the page renders', async function () {
  // No specific action needed, page is already loaded
});

Then('the hero section is visible', async function () {
  await pageObject.expectHeroSectionVisible();
});

When('the hero section is viewed', async function () {
  // No specific action needed, hero section is already visible
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
  // No specific action needed, cards are already visible
});

Then('exactly {int} cards are visible', async function (expectedCount: number) {
  await pageObject.expectCardsCount(expectedCount);
});

Then('the card titles are {string}', async function (expectedTitles: string) {
  const titlesArray = expectedTitles.split(', ');
  await pageObject.expectCardTitles(titlesArray);
});

When('each displayed card under the {string} section is inspected', async function () {
  // No specific action needed, inspecting cards
});

Then('each card shows an image', async function () {
  await pageObject.expectEachCardElementsVisible();
});

Then('each card shows a title', async function () {
  await pageObject.expectEachCardElementsVisible();
});

Then('each card shows supporting descriptive text', async function () {
  await pageObject.expectEachCardElementsVisible();
});

Then('the "Get Started" button is not visible', async function () {
  await pageObject.expectGetStartedButtonNotVisible();
});

When('the browser is refreshed', async function () {
  await pageObject.refreshPage();
});

When('the page is hard reloaded bypassing cache', async function () {
  await pageObject.hardReloadPage();
});

When('the browser window is resized between common mobile and desktop widths', async function () {
  await pageObject.resizeBrowser(375, 812); // Mobile
  await pageObject.resizeBrowser(1280, 720); // Desktop
});

Then('the hero section remains visible', async function () {
  await pageObject.expectHeroSectionVisible();
});

Then('the {string} section remains visible', async function (expectedText: string) {
  await pageObject.expectCardsSectionTitleVisible(expectedText);
});