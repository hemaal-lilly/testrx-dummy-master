// Step Definitions for: Test_marketPlace
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { TestMarketplacePage } from '../pages/TestMarketplacePage';

let pageObject: TestMarketplacePage;

Given('the marketplace page is loaded', async function (this: ICustomWorld) {
  pageObject = new TestMarketplacePage(this.page);
  await pageObject.navigateToMarketplace();
});

When('the page renders', async function () {
  // No explicit action needed; page is already loaded.
});

Then('the hero section is visible', async function () {
  await pageObject.expectHeroSectionVisible();
});

When('the hero section is viewed', async function () {
  // No explicit action needed; hero section is already in view.
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
  await pageObject.cardsSection.scrollIntoViewIfNeeded();
});

Then('the section title {string} is visible', async function (expectedText: string) {
  await pageObject.expectAutomationTechTitleVisible(expectedText);
});

When('the cards under the "Automation Tech for Tech" section are viewed', async function () {
  // No explicit action needed; cards section is already in view.
});

Then('exactly {int} cards are visible', async function (expectedCount: number) {
  await pageObject.expectCardsCount(expectedCount);
});

Then('the card titles are {string}, {string}, and {string}', async function (title1: string, title2: string, title3: string) {
  await pageObject.expectCardTitles([title1, title2, title3]);
});

When('each displayed card under the "Automation Tech for Tech" section is inspected', async function () {
  // No explicit action needed; cards are already displayed.
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
  await pageObject.hardReloadPage();
});

When('the browser window is resized between common mobile and desktop widths', async function () {
  await pageObject.resizeBrowser(375, 667); // Mobile
  await pageObject.resizeBrowser(1280, 720); // Desktop
});

Then('the hero section remains visible', async function () {
  await pageObject.expectHeroSectionVisible();
});

Then('the "Automation Tech for Tech" section remains visible', async function () {
  await pageObject.expectAutomationTechTitleVisible('Automation Tech for Tech');
});