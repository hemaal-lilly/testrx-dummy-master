// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { MarketplaceMarketplaceTabPage } from '../pages/MarketplaceMarketplaceTabPage';

let pageObject: MarketplaceMarketplaceTabPage;

Given('I set the viewport size to {int}x{int}', async function (this: ICustomWorld, width: number, height: number) {
  pageObject = new MarketplaceMarketplaceTabPage(this.page);
  await pageObject.setViewportSize(width, height);
});

Given('I navigate to the application URL', async function (this: ICustomWorld) {
  await pageObject.navigateToApp(this.config.app.url);
});

When('I enter the username into the email input field', async function (this: ICustomWorld) {
  await pageObject.fillEmail(this.config.app.defaults.username);
});

When('I click the "Next" button', async function (this: ICustomWorld) {
  await pageObject.clickNext();
});

When('I enter the password into the password input field', async function (this: ICustomWorld) {
  await pageObject.fillPassword(this.config.app.defaults.password);
});

When('I click the "Sign in" button', async function (this: ICustomWorld) {
  await pageObject.clickSignIn();
});

When('I click the "Marketplace" tab', async function (this: ICustomWorld) {
  await pageObject.clickMarketplaceTab();
});

Then('I should see the URL pathname as {string}', async function (this: ICustomWorld, expectedPathname: string) {
  await pageObject.assertURLPathname(expectedPathname);
});

Then('I should see the message {string}', async function (this: ICustomWorld, expectedMessage: string) {
  await pageObject.assertConstructionMessage(expectedMessage);
});

Then('the "Contact Us" link should have href {string}', async function (this: ICustomWorld, expectedHref: string) {
  await pageObject.assertContactUsLink(expectedHref);
});

Then('the "here" link should have href {string}', async function (this: ICustomWorld, expectedHref: string) {
  await pageObject.assertHereLink(expectedHref);
});

Then('I should see the heading {string}', async function (this: ICustomWorld, expectedText: string) {
  await pageObject.assertSuccessStoriesHeading(expectedText);
});

Then('I should see the "Success Stories" section content', async function (this: ICustomWorld) {
  await pageObject.assertSuccessStoriesSectionPresence();
});