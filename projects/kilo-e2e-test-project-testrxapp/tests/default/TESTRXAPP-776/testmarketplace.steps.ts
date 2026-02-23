// Step Definitions for: Test_marketPlace
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { MarketplacePage } from '../pages/MarketplacePage';

let marketplacePage: MarketplacePage;

Given('the marketplace page is loaded', async function (this: ICustomWorld) {
  marketplacePage = new MarketplacePage(this.page);
  await marketplacePage.navigate();
});

When('the page renders', async function () {
  // No specific action needed; page is already loaded.
});

Then('the hero section is visible', async function () {
  await marketplacePage.assertHeroSectionVisible();
});

When('the hero section is viewed', async function () {
  // No specific action needed; hero section is already visible.
});

Then('the heading text equals {string}', async function (expectedText: string) {
  await marketplacePage.assertHeroHeadingText(expectedText);
});

Then('a short descriptive text is displayed directly under the heading', async function () {
  await marketplacePage.assertHeroDescriptionVisible();
});

Then('a "Get Started" button is visible', async function () {
  await marketplacePage.assertGetStartedButtonVisible();
});

Then('a hero image is displayed on the right side of the hero section', async function () {
  await marketplacePage.assertHeroImageVisible();
});

When('the user scrolls to the cards section', async function () {
  await marketplacePage.scrollToCardsSection();
});

Then('the section title {string} is visible', async function (expectedText: string) {
  await marketplacePage.assertCardsSectionTitle(expectedText);
});

When('the cards under the {string} section are viewed', async function () {
  // No specific action needed; cards section is already visible.
});

Then('exactly {int} cards are visible', async function (expectedCount: number) {
  await marketplacePage.assertCardCount(expectedCount);
});

Then('the card titles are {string}, {string}, and {string}', async function (title1: string, title2: string, title3: string) {
  await marketplacePage.assertCardTitles([title1, title2, title3]);
});

When('each displayed card under the {string} section is inspected', async function () {
  // No specific action needed; cards are already visible.
});

Then('each card shows an image', async function () {
  await marketplacePage.assertEachCardHasContent();
});

Then('each card shows a title', async function () {
  await marketplacePage.assertEachCardHasContent();
});

Then('each card shows supporting descriptive text', async function () {
  await marketplacePage.assertEachCardHasContent();
});

Then('the "Get Started" button is not visible', async function () {
  await marketplacePage.assertGetStartedButtonNotVisible();
});

When('the browser is refreshed', async function () {
  await marketplacePage.refreshPage();
});

When('the page is hard reloaded bypassing cache', async function () {
  await marketplacePage.hardReload();
});

When('the browser window is resized between common mobile and desktop widths', async function () {
  await marketplacePage.resizeWindow(375, 667); // Mobile size
  await marketplacePage.resizeWindow(1440, 900); // Desktop size
});

Then('the hero section remains visible', async function () {
  await marketplacePage.assertHeroSectionVisible();
});

Then('the {string} section remains visible', async function (sectionTitle: string) {
  await marketplacePage.assertCardsSectionTitle(sectionTitle);
});