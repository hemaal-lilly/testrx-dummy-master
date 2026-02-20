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
  // No additional action needed; page is already loaded.
});

Then('the hero section is visible', async function () {
  await marketplacePage.assertHeroSectionVisible();
});

When('the hero section is viewed', async function () {
  // No additional action needed; hero section is already visible.
});

Then('the heading text equals {string}', async function (heading: string) {
  await expect(marketplacePage.heroHeading).toHaveText(heading);
});

Then('a short descriptive text is displayed directly under the heading', async function () {
  await expect(marketplacePage.heroDescription).toBeVisible();
});

Then('a {string} button is visible', async function (buttonText: string) {
  await expect(marketplacePage.getStartedButton).toBeVisible();
});

Then('a hero image is displayed on the right side of the hero section', async function () {
  await expect(marketplacePage.heroImage).toBeVisible();
});

When('the user scrolls to the cards section', async function () {
  await marketplacePage.scrollToCardsSection();
});

Then('the section title {string} is visible', async function (title: string) {
  await expect(marketplacePage.cardsSectionTitle).toHaveText(title);
});

When('the cards under the {string} section are viewed', async function () {
  // No additional action needed; cards section is already scrolled into view.
});

Then('exactly three cards are visible', async function () {
  await marketplacePage.assertThreeCardsVisible();
});

Then('the card titles are {string}, {string}, and {string}', async function (title1: string, title2: string, title3: string) {
  const expectedTitles = [title1, title2, title3];
  const actualTitles = await marketplacePage.cardTitles.allInnerTexts();
  expect(actualTitles).toEqual(expectedTitles);
});

When('each displayed card under the {string} section is inspected', async function () {
  // No additional action needed; cards are already visible.
});

Then('each card shows an image', async function () {
  await marketplacePage.assertCardElements();
});

Then('each card shows a title', async function () {
  await marketplacePage.assertCardElements();
});

Then('each card shows supporting descriptive text', async function () {
  await marketplacePage.assertCardElements();
});

Then('the {string} button is not visible', async function (buttonText: string) {
  await marketplacePage.assertGetStartedButtonAbsent();
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
    await marketplacePage.resizeWindow(size.width, size.height);
  }
});

Then('the hero section remains visible', async function () {
  await marketplacePage.assertHeroSectionVisible();
});

Then('the {string} section remains visible', async function (sectionTitle: string) {
  await expect(marketplacePage.cardsSectionTitle).toHaveText(sectionTitle);
});