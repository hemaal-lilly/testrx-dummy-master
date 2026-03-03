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

When('the page loads', async function (this: ICustomWorld) {
  // Implicit wait handled by navigate() method
});

Then('the Lilly logo is visible', async function (this: ICustomWorld) {
  await pageObject.expectLillyLogoVisible();
});

Then('the header title {string} is visible', async function (this: ICustomWorld, title: string) {
  await pageObject.expectHeaderTitleVisible(title);
});

Then('the header section is visible', async function (this: ICustomWorld) {
  await pageObject.expectSectionVisible(pageObject.headerSection);
});

Then('the hero banner is visible', async function (this: ICustomWorld) {
  await pageObject.expectSectionVisible(pageObject.heroBanner);
});

Then('the cards section is visible', async function (this: ICustomWorld) {
  await pageObject.expectSectionVisible(pageObject.cardsSection);
});

Then('the top header shows {string}', async function (this: ICustomWorld, text: string) {
  await pageObject.expectTopHeaderContains(text);
});

Then('the CTA button {string} is visible', async function (this: ICustomWorld, buttonText: string) {
  await pageObject.expectCTAButtonVisible();
});

Then('{string} tab is active/selected', async function (this: ICustomWorld, tabName: string) {
  if (tabName === 'Home') {
    await pageObject.expectHomeTabActive();
  }
});

Then('{string} tab is not active/selected', async function (this: ICustomWorld, tabName: string) {
  if (tabName === 'Home') {
    await pageObject.expectHomeTabNotActive();
  }
});

Then('the Lilly logo is not visible', async function (this: ICustomWorld) {
  await pageObject.expectElementNotVisible(pageObject.lillyLogo);
});

Then('the top header does not show {string}', async function (this: ICustomWorld, text: string) {
  await pageObject.expectElementNotVisible(pageObject.topHeader.locator(`text=${text}`));
});