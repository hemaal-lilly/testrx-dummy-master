// Step Definitions for: Test_marketPlace
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { TestMarketplacePage } from '../pages/TestMarketplacePage';

let pageObject: TestMarketplacePage;

Given('the marketplace page is loaded', async function (this: ICustomWorld) {
  pageObject = new TestMarketplacePage(this.page);
  await pageObject.navigateToMarketplace();
});

When('the page renders', async function (this: ICustomWorld) {
  // No additional actions needed for this step
});

Then('the hero section is visible', async function (this: ICustomWorld) {
  await pageObject.expectHeroSectionVisible();
});

When('the hero section is viewed', async function (this: ICustomWorld) {
  // No additional actions needed for this step
});

Then('the heading text equals {string}', async function (this: ICustomWorld, heading: string) {
  await expect(pageObject.heroHeading).toHaveText(heading);
});

Then('a short descriptive text is displayed directly under the heading', async function (this: ICustomWorld) {
  await expect(pageObject.heroDescription).toBeVisible();
});

Then('a {string} button is visible', async function (this: ICustomWorld, buttonText: string) {
  await expect(pageObject.getStartedButton).toBeVisible();
});

Then('a hero image is displayed on the right side of the hero section', async function (this: ICustomWorld) {
  await expect(pageObject.heroImage).toBeVisible();
});

When('the user scrolls to the cards section', async function (this: ICustomWorld) {
  await pageObject.scrollToCardsSection();
});

Then('the section title {string} is visible', async function (this: ICustomWorld, title: string) {
  await expect(pageObject.automationTechSectionTitle).toHaveText(title);
});

When('the cards under the {string} section are viewed', async function (this: ICustomWorld, section: string) {
  // No additional actions needed for this step
});

Then('exactly three cards are visible', async function (this: ICustomWorld) {
  await pageObject.expectThreeCardsVisible();
});

Then('the card titles are {string}, {string}, and {string}', async function (this: ICustomWorld, title1: string, title2: string, title3: string) {
  const expectedTitles = [title1, title2, title3];
  const actualTitles = await pageObject.cardTitles.allTextContents();
  expect(actualTitles).toEqual(expectedTitles);
});

When('each displayed card under the {string} section is inspected', async function (this: ICustomWorld, section: string) {
  // No additional actions needed for this step
});

Then('each card shows an image', async function (this: ICustomWorld) {
  await expect(pageObject.cardImages).toHaveCount(3);
});

Then('each card shows a title', async function (this: ICustomWorld) {
  await expect(pageObject.cardTitles).toHaveCount(3);
});

Then('each card shows supporting descriptive text', async function (this: ICustomWorld) {
  await expect(pageObject.cardDescriptions).toHaveCount(3);
});

Then('the {string} button is not visible', async function (this: ICustomWorld, buttonText: string) {
  await pageObject.expectGetStartedButtonAbsent();
});

When('the browser is refreshed', async function (this: ICustomWorld) {
  await pageObject.refreshPage();
});

When('the page is hard reloaded bypassing cache', async function (this: ICustomWorld) {
  await pageObject.hardReloadPage();
});

When('the browser window is resized between common mobile and desktop widths', async function (this: ICustomWorld) {
  const sizes = [
    { width: 375, height: 667 }, // Mobile
    { width: 768, height: 1024 }, // Tablet
    { width: 1440, height: 900 }, // Desktop
  ];
  for (const size of sizes) {
    await pageObject.resizeBrowser(size.width, size.height);
  }
});

Then('the hero section remains visible', async function (this: ICustomWorld) {
  await pageObject.expectHeroSectionVisible();
});

Then('the {string} section remains visible', async function (this: ICustomWorld, section: string) {
  await pageObject.expectAutomationTechTitleVisible();
});