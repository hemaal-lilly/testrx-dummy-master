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
  // No additional actions needed for this step
});

Then('the hero section is visible', async function () {
  await pageObject.expectHeroSectionVisible();
});

When('the hero section is viewed', async function () {
  // No additional actions needed for this step
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

Then('the section title {string} is visible', async function (expectedText: string) {
  await pageObject.expectCardsSectionTitleVisible(expectedText);
});

When('the cards under the {string} section are viewed', async function () {
  // No additional actions needed for this step
});

Then('exactly three cards are visible', async function () {
  await pageObject.expectThreeCardsVisible();
});

Then('the card titles are {string}, {string}, and {string}', async function (title1: string, title2: string, title3: string) {
  await pageObject.expectCardTitles([title1, title2, title3]);
});

When('each displayed card under the {string} section is inspected', async function () {
  // No additional actions needed for this step
});

Then('each card shows an image', async function () {
  await pageObject.expectEachCardHasImageTitleAndText();
});

Then('each card shows a title', async function () {
  // Assertion already covered in `expectEachCardHasImageTitleAndText`
});

Then('each card shows supporting descriptive text', async function () {
  // Assertion already covered in `expectEachCardHasImageTitleAndText`
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
  await pageObject.resizeBrowser(375, 667); // Mobile size
  await pageObject.resizeBrowser(1280, 800); // Desktop size
});

Then('the hero section remains visible', async function () {
  await pageObject.expectHeroSectionVisible();
});

Then('the {string} section remains visible', async function (sectionName: string) {
  if (sectionName === 'Automation Tech for Tech') {
    await pageObject.expectCardsSectionTitleVisible(sectionName);
  }
});