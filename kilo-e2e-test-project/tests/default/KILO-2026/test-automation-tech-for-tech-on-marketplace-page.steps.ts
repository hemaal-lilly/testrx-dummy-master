// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { MarketPlacePage } from '../pages/MarketPlacePage';

let marketPlacePage: MarketPlacePage;

Given('I set the viewport size to {int}x{int}', async function (this: ICustomWorld, width: number, height: number) {
  marketPlacePage = new MarketPlacePage(this.page);
  await marketPlacePage.setViewport(width, height);
});

Given('I navigate to the application URL', async function (this: ICustomWorld) {
  const appUrl = this.parameters.app.url;
  await marketPlacePage.navigateTo(appUrl);
});

When('I enter the username in the email field', async function (this: ICustomWorld) {
  const userName = this.parameters.userNameMarketPlace;
  await marketPlacePage.enterEmail(userName);
});

When('I click the login button', async function (this: ICustomWorld) {
  await marketPlacePage.clickLoginButton();
});

When('I enter the password in the password field', async function (this: ICustomWorld) {
  const password = this.parameters.passwordMarketPlace;
  await marketPlacePage.enterPassword(password);
});

Then('I should see the Brand Logo with alt text {string}', async function (this: ICustomWorld, expectedAltText: string) {
  await marketPlacePage.assertBrandLogoAltText(expectedAltText);
});

Then('I should see the heading {string}', async function (this: ICustomWorld, expectedText: string) {
  await marketPlacePage.assertHeadingText(expectedText);
});

Then('I should see the description {string}', async function (this: ICustomWorld, expectedText: string) {
  await marketPlacePage.assertDescriptionText(expectedText);
});

Then('I should see the platform images with alt text {string}', async function (this: ICustomWorld, expectedAltText: string) {
  await marketPlacePage.assertPlatformImagesCount(3);
});

When('I click the "Get Started" button', async function (this: ICustomWorld) {
  await marketPlacePage.clickGetStartedButton();
});

When('I switch to the {string} tab', async function (this: ICustomWorld, tabTitle: string) {
  await marketPlacePage.switchToTab(tabTitle);
});

When('I switch back to the initial tab', async function (this: ICustomWorld) {
  const initialTabTitle = 'Automation Tech for Tech';
  await marketPlacePage.switchToTab(initialTabTitle);
});

Then('I should see the heading {string} again', async function (this: ICustomWorld, expectedText: string) {
  await marketPlacePage.assertHeadingText(expectedText);
});