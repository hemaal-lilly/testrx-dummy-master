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
  // Implicit wait handled in navigation
});

Then('the Lilly logo is visible', async function (this: ICustomWorld) {
  await pageObject.expectLillyLogoVisible();
});

Then('the header title "Enterprise Automation" is visible', async function (this: ICustomWorld) {
  await pageObject.expectHeaderTitleVisible();
});

Then('the header section is visible', async function (this: ICustomWorld) {
  await pageObject.expectHeaderSectionVisible();
});

Then('the hero banner is visible', async function (this: ICustomWorld) {
  await pageObject.expectHeroBannerVisible();
});

Then('the cards section is visible', async function (this: ICustomWorld) {
  await pageObject.expectCardsSectionVisible();
});

Then('the top header shows {string}', async function (this: ICustomWorld, text: string) {
  await pageObject.expectTopHeaderContains(text);
});

Then('the CTA button "Submit an Idea" is visible', async function (this: ICustomWorld) {
  await pageObject.expectCTASubmitButtonVisible();
});

Then('"Home" tab is active/selected', async function (this: ICustomWorld) {
  await pageObject.expectHomeTabActive();
});

Then('the Lilly logo is not visible', async function (this: ICustomWorld) {
  await pageObject.expectLillyLogoNotVisible();
});

Then('the top header does not show {string}', async function (this: ICustomWorld, text: string) {
  await pageObject.expectTopHeaderDoesNotContain(text);
});

Then('"Home" tab is not active/selected', async function (this: ICustomWorld) {
  await pageObject.expectHomeTabNotActive();
});