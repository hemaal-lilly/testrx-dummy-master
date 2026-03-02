// Step Definitions for: Enterprise Automation homepage UI visibility and state
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { EnterpriseAutomationPage } from '../pages/EnterpriseAutomationPage';

let pageObject: EnterpriseAutomationPage;

Given('I open https://qa.automate.lilly.com', async function (this: ICustomWorld) {
  pageObject = new EnterpriseAutomationPage(this.page);
  await pageObject.navigateToHomePage();
});

Given('I am on the page', async function (this: ICustomWorld) {
  pageObject = new EnterpriseAutomationPage(this.page);
  await pageObject.navigateToHomePage();
});

Given('I am on the home page', async function (this: ICustomWorld) {
  pageObject = new EnterpriseAutomationPage(this.page);
  await pageObject.navigateToHomePage();
});

When('the page loads', async function (this: ICustomWorld) {
  // Explicit wait is handled in the page object navigation method
});

Then('the Lilly logo is visible', async function (this: ICustomWorld) {
  await pageObject.assertLogoVisibility(true);
});

Then('the Lilly logo is not visible', async function (this: ICustomWorld) {
  await pageObject.assertLogoVisibility(false);
});

Then('the header title {string} is visible', async function (this: ICustomWorld, title: string) {
  await pageObject.assertHeaderTitleVisibility(title);
});

Then('the header section is visible', async function (this: ICustomWorld) {
  await pageObject.assertSectionVisibility(pageObject.headerSection);
});

Then('the hero banner is visible', async function (this: ICustomWorld) {
  await pageObject.assertSectionVisibility(pageObject.heroBanner);
});

Then('the cards section is visible', async function (this: ICustomWorld) {
  await pageObject.assertSectionVisibility(pageObject.cardsSection);
});

Then('the top header shows {string}', async function (this: ICustomWorld, item: string) {
  await pageObject.assertNavigationItemVisibility(item, true);
});

Then('the top header does not show {string}', async function (this: ICustomWorld, item: string) {
  await pageObject.assertNavigationItemVisibility(item, false);
});

Then('the CTA button {string} is visible', async function (this: ICustomWorld, buttonText: string) {
  await pageObject.assertCTAButtonVisibility(true);
});

Then('{string} tab is active/selected', async function (this: ICustomWorld, tabName: string) {
  await pageObject.assertTabActive(tabName, true);
});

Then('{string} tab is not active/selected', async function (this: ICustomWorld, tabName: string) {
  await pageObject.assertTabActive(tabName, false);
});