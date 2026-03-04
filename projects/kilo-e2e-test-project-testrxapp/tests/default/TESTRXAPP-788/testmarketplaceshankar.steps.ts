// Step Definitions for: Enterprise Automation homepage UI visibility and state
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { EnterpriseAutomationPage } from './testmarketplaceshankar.page';

let pageObject: EnterpriseAutomationPage;

Given('I open {string}', async function (this: ICustomWorld, url: string) {
  pageObject = new EnterpriseAutomationPage(this.page);
  await pageObject.navigate(url);
});

Given('I am on the page', async function (this: ICustomWorld) {
  pageObject = new EnterpriseAutomationPage(this.page);
  await pageObject.navigate('https://qa.automate.lilly.com');
});

Given('I am on the home page', async function (this: ICustomWorld) {
  pageObject = new EnterpriseAutomationPage(this.page);
  await pageObject.navigate('https://qa.automate.lilly.com');
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

Then('the header title {string} is visible', async function (this: ICustomWorld, title: string) {
  await pageObject.assertHeaderTitleVisible(title);
});

Then('the header section is visible', async function (this: ICustomWorld) {
  await expect(pageObject.headerSection).toBeVisible({ timeout: 5000 });
});

Then('the hero banner is visible', async function (this: ICustomWorld) {
  await expect(pageObject.heroBanner).toBeVisible({ timeout: 5000 });
});

Then('the cards section is visible', async function (this: ICustomWorld) {
  await expect(pageObject.cardsSection).toBeVisible({ timeout: 5000 });
});

Then('the top header shows {string}', async function (this: ICustomWorld, itemText: string) {
  await pageObject.assertNavigationItemVisible(itemText);
});

Then('the top header does not show {string}', async function (this: ICustomWorld, itemText: string) {
  await pageObject.assertNavigationItemNotVisible(itemText);
});

Then('the CTA button {string} is visible', async function (this: ICustomWorld, buttonText: string) {
  await pageObject.assertCTAButtonVisible(buttonText);
});

Then('"Home" tab is active/selected', async function (this: ICustomWorld) {
  await pageObject.assertHomeTabActive();
});

Then('"Home" tab is not active/selected', async function (this: ICustomWorld) {
  await pageObject.assertHomeTabNotActive();
});