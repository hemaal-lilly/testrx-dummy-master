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
  // No specific action required, page load is handled in the background step.
});

Then('the hero section is visible', async function () {
  await pageObject.expectHeroSectionVisible();
});

When('the hero section is viewed', async function () {
  // No specific action required, hero section is already visible.
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
  await pageObject.scrollToCardsSection();
});

Then('the section title {string} is visible', async function (expectedTitle: string) {
  await pageObject.expectCardsSectionTitleVisible(expectedTitle);
});

When('the cards under the "Automation Tech for Tech" section are viewed', async function () {
  // No specific action required, cards section is already visible.
});

Then('exactly three cards are visible', async function () {
  await pageObject.expectThreeCardsVisible();
});

Then('the card titles are {string}, {string}, and {string}', async function (...expectedTitles: string[]) {
  await pageObject.expectCardTitles(expectedTitles);
});

When('each displayed card under the "Automation Tech for Tech" section is inspected', async function () {
  // No specific action required, cards are already visible.
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
  const commonWidths = [
    { width: 375, height: 667 }, // Mobile
    { width: 768, height: 1024 }, // Tablet
    { width: 1440, height: 900 }, // Desktop
  ];
  for (const { width, height } of commonWidths) {
    await pageObject.resizeBrowserWindow(width, height);
  }
});

Then('the hero section remains visible', async function () {
  await pageObject.expectHeroSectionVisible();
});

Then('the "Automation Tech for Tech" section remains visible', async function () {
  await pageObject.expectCardsSectionTitleVisible('Automation Tech for Tech');
});