// Step Definitions for: Enterprise Automation homepage UI visibility and state
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
  // Implicit wait handled in navigate() method.
});

Then('the Lilly logo is visible', async function () {
  await pageObject.assertLillyLogoVisible();
});

Then('the Lilly logo is not visible', async function () {
  await pageObject.assertLillyLogoNotVisible();
});

Then('the header title {string} is visible', async function (expectedTitle: string) {
  await pageObject.assertHeaderTitleVisible(expectedTitle);
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

Then('the top header shows {string}', async function (navItemText: string) {
  await pageObject.assertNavItemVisible(navItemText);
});

Then('the top header does not show {string}', async function (navItemText: string) {
  await pageObject.assertNavItemNotVisible(navItemText);
});

Then('the CTA button {string} is visible', async function (buttonText: string) {
  await pageObject.assertCTAButtonVisible(buttonText);
});

Then('{string} tab is active/selected', async function (tabName: string) {
  if (tabName === 'Home') {
    await pageObject.assertHomeTabActive();
  }
});

Then('{string} tab is not active/selected', async function (tabName: string) {
  if (tabName === 'Home') {
    await pageObject.assertHomeTabNotActive();
  }
});