// Step Definitions for: Test_MarketPlace_Shankar
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { EnterpriseAutomationHomePage } from '../pages/EnterpriseAutomationHomePage';

let pageObject: EnterpriseAutomationHomePage;

Given('I open https://qa.automate.lilly.com', async function (this: ICustomWorld) {
  pageObject = new EnterpriseAutomationHomePage(this.page);
  await pageObject.navigate();
});

Given('I am on the page', async function (this: ICustomWorld) {
  pageObject = new EnterpriseAutomationHomePage(this.page);
  await pageObject.navigate();
});

Given('I am on the home page', async function (this: ICustomWorld) {
  pageObject = new EnterpriseAutomationHomePage(this.page);
  await pageObject.navigate();
});

When('the page loads', async function () {
  // No additional actions needed as navigation ensures the page is loaded
});

Then('the Lilly logo is visible', async function () {
  await pageObject.assertLillyLogoVisible();
});

Then('the Lilly logo is not visible', async function () {
  await pageObject.assertLillyLogoNotVisible();
});

Then('the header title {string} is visible', async function (title: string) {
  await pageObject.assertHeaderTitleVisible(title);
});

Then('the header section is visible', async function () {
  await pageObject.assertSectionVisible(pageObject.headerSection);
});

Then('the hero banner is visible', async function () {
  await pageObject.assertSectionVisible(pageObject.heroBanner);
});

Then('the cards section is visible', async function () {
  await pageObject.assertSectionVisible(pageObject.cardsSection);
});

Then('the top header shows {string}', async function (item: string) {
  await pageObject.assertNavItemVisible(item);
});

Then('the top header does not show {string}', async function (item: string) {
  await pageObject.assertNavItemNotVisible(item);
});

Then('the CTA button {string} is visible', async function (buttonText: string) {
  await pageObject.assertCTAButtonVisible(buttonText);
});

Then('Home tab is active/selected', async function () {
  await pageObject.assertHomeTabActive();
});

Then('Home tab is not active/selected', async function () {
  await pageObject.assertHomeTabNotActive();
});