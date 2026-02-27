// Step Definitions for: Test_marketPlace
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { MarketplacePage } from '../pages/MarketplacePage';

let marketplacePage: MarketplacePage;

Given('the marketplace page is loaded', async function (this: ICustomWorld) {
  marketplacePage = new MarketplacePage(this.page);
  await marketplacePage.navigateToMarketplace();
});

When('the page renders', async function () {
  // No additional actions needed for rendering
});

Then('the hero section is visible', async function () {
  await marketplacePage.expectHeroSectionVisible();
});

When('the hero section is viewed', async function () {
  // No additional actions needed for viewing
});

Then('the heading text equals {string}', async function (text: string) {
  await marketplacePage.expectHeroHeadingEquals(text);
});

Then('a short descriptive text is displayed directly under the heading', async function () {
  await marketplacePage.expectHeroDescriptionVisible();
});

Then('a "Get Started" button is visible', async function () {
  await marketplacePage.expectGetStartedButtonVisible();
});

Then('a hero image is displayed on the right side of the hero section', async function () {
  await marketplacePage.expectHeroImageVisible();
});

When('the user scrolls to the cards section', async function () {
  await marketplacePage.scrollToCardsSection();
});

Then('the section title {string} is visible', async function (title: string) {
  await marketplacePage.expectCardsSectionTitleVisible(title);
});

When('the cards under the {string} section are viewed', async function () {
  // No additional actions needed for viewing cards
});

Then('exactly {int} cards are visible', async function (count: number) {
  await marketplacePage.expectCardsCount(count);
});

Then('the card titles are {string}, {string}, and {string}', async function (title1: string, title2: string, title3: string) {
  await marketplacePage.expectCardTitlesMatch([title1, title2, title3]);
});

When('each displayed card under the {string} section is inspected', async function () {
  // No additional actions needed for inspection
});

Then('each card shows an image', async function () {
  await marketplacePage.expectCardElementsVisible();
});

Then('each card shows a title', async function () {
  await marketplacePage.expectCardElementsVisible();
});

Then('each card shows supporting descriptive text', async function () {
  await marketplacePage.expectCardElementsVisible();
});

Then('the "Get Started" button is not visible', async function () {
  await marketplacePage.expectGetStartedButtonNotVisible();
});

When('the browser is refreshed', async function () {
  await marketplacePage.refreshPage();
});

When('the page is hard reloaded bypassing cache', async function () {
  await marketplacePage.hardReload();
});

When('the browser window is resized between common mobile and desktop widths', async function () {
  const sizes = [
    { width: 375, height: 667 }, // Mobile
    { width: 768, height: 1024 }, // Tablet
    { width: 1440, height: 900 }, // Desktop
  ];
  for (const size of sizes) {
    await marketplacePage.resizeBrowserWindow(size.width, size.height);
  }
});

Then('the hero section remains visible', async function () {
  await marketplacePage.expectHeroSectionVisible();
});

Then('the {string} section remains visible', async function (sectionTitle: string) {
  await marketplacePage.expectCardsSectionTitleVisible(sectionTitle);
});