// Step Definitions for: Enterprise Automation homepage UI visibility and state
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { EnterpriseAutomationPage } from '../pages/EnterpriseAutomationPage';

let pageObject: EnterpriseAutomationPage;

Given('I open https://qa.automate.lilly.com', async function (this: ICustomWorld) {
  pageObject = new EnterpriseAutomationPage(this.page);
  await pageObject.navigate();
});

Given('I am on the page', async function (this: ICustomWorld) {
  pageObject = new EnterpriseAutomationPage(this.page);
  await pageObject.navigate();
});

Given('I am on the home page', async function (this: ICustomWorld) {
  pageObject = new EnterpriseAutomationPage(this.page);
  await pageObject.navigate();
});

When('the page loads', async function (this: ICustomWorld) {
  await this.page.waitForLoadState('networkidle');
});

Then('the Lilly logo is visible', async function (this: ICustomWorld) {
  await pageObject.assertLillyLogoVisible();
});

Then('the Lilly logo is not visible', async function (this: ICustomWorld) {
  await pageObject.assertLillyLogoNotVisible();
});

Then('the header title "Enterprise Automation" is visible', async function (this: ICustomWorld) {
  await pageObject.assertHeaderTitleVisible();
});

Then('the header section is visible', async function (this: ICustomWorld) {
  await pageObject.assertHeaderSectionVisible();
});

Then('the hero banner is visible', async function (this: ICustomWorld) {
  await pageObject.assertHeroBannerVisible();
});

Then('the cards section is visible', async function (this: ICustomWorld) {
  await pageObject.assertCardsSectionVisible();
});

Then('the top header shows {string}', async function (this: ICustomWorld, item: string) {
  await pageObject.assertTopHeaderItemVisible(item);
});

Then('the top header does not show {string}', async function (this: ICustomWorld, item: string) {
  await pageObject.assertTopHeaderItemNotVisible(item);
});

Then('the CTA button "Submit an Idea" is visible', async function (this: ICustomWorld) {
  await pageObject.assertCTAButtonVisible();
});

Then('"Home" tab is active/selected', async function (this: ICustomWorld) {
  await pageObject.assertHomeTabActive();
});

Then('"Home" tab is not active/selected', async function (this: ICustomWorld) {
  await pageObject.assertHomeTabNotActive();
});