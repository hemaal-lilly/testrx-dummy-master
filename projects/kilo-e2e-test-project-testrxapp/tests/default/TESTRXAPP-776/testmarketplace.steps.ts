// Step Definitions for: Test_marketPlace
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { TestMarketplacePage } from '../pages/TestMarketplacePage';

let pageObject: TestMarketplacePage;

Given('the marketplace page is loaded', async function (this: ICustomWorld) {
  pageObject = new TestMarketplacePage(this.page);
  await pageObject.navigate();
});

When('the page renders', async function () {
  // No specific action needed, page is already loaded.
});

Then('the hero section is visible', async function () {
  await pageObject.assertHeroSectionVisible();
});

When('the hero section is viewed', async function () {
  // No specific action needed, hero section is already visible.
});

Then('the heading text equals {string}', async function (expectedHeading: string) {
  await pageObject.assertHeroHeadingText(expectedHeading);
});

Then('a short descriptive text is displayed directly under the heading', async function () {
  await pageObject.assertHeroDescriptionVisible();
});

Then('a "Get Started" button is visible', async function () {
  await pageObject.assertGetStartedButtonVisible();
});

Then('a hero image is displayed on the right side of the hero section', async function () {
  await pageObject.assertHeroImageVisible();
});

When('the user scrolls to the cards section', async function () {
  await pageObject.cardsSectionTitle.scrollIntoViewIfNeeded();
});

Then('the section title {string} is visible', async function (expectedTitle: string) {
  await pageObject.assertCardsSectionTitle(expectedTitle);
});

When('the cards under the {string} section are viewed', async function () {
  // No specific action needed, cards are already visible.
});

Then('exactly {int} cards are visible', async function (expectedCount: number) {
  await pageObject.assertCardCount(expectedCount);
});

Then('the card titles are {string}, {string}, and {string}', async function (title1: string, title2: string, title3: string) {
  await pageObject.assertCardTitles([title1, title2, title3]);
});

When('each displayed card under the {string} section is inspected', async function () {
  // No specific action needed, cards are already visible.
});

Then('each card shows an image', async function () {
  await pageObject.assertCardsHaveImageTitleDescription();
});

Then('each card shows a title', async function () {
  await pageObject.assertCardsHaveImageTitleDescription();
});

Then('each card shows supporting descriptive text', async function () {
  await pageObject.assertCardsHaveImageTitleDescription();
});

Then('the "Get Started" button is not visible', async function () {
  await pageObject.assertGetStartedButtonNotVisible();
});

When('the browser is refreshed', async function () {
  await pageObject.refresh();
});

When('the page is hard reloaded bypassing cache', async function () {
  await pageObject.hardReload();
});

When('the browser window is resized between common mobile and desktop widths', async function () {
  const sizes = [
    { width: 375, height: 667 }, // Mobile
    { width: 768, height: 1024 }, // Tablet
    { width: 1440, height: 900 }, // Desktop
  ];
  for (const size of sizes) {
    await pageObject.resizeWindow(size.width, size.height);
  }
});

Then('the hero section remains visible', async function () {
  await pageObject.assertHeroSectionVisible();
});

Then('the {string} section remains visible', async function (sectionTitle: string) {
  await pageObject.assertCardsSectionTitle(sectionTitle);
});