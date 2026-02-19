// Step Definitions for: Test_MarketPlace_Shankar
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { EnterpriseAutomationHomePage } from '../pages/EnterpriseAutomationHomePage';

let pageObject: EnterpriseAutomationHomePage;

Given('I navigate to {string}', async function (this: ICustomWorld, url: string) {
  pageObject = new EnterpriseAutomationHomePage(this.page);
  await pageObject.navigateToHomepage();
});

Given('the homepage is open', async function (this: ICustomWorld) {
  pageObject = new EnterpriseAutomationHomePage(this.page);
  await pageObject.navigateToHomepage();
});

When('the page finishes loading', async function () {
  await pageObject.page.waitForLoadState('networkidle');
});

When('I inspect the top navigation bar', async function () {
  await pageObject.expectElementVisible(pageObject.topNavBar);
});

When('I refresh the browser', async function () {
  await pageObject.refreshBrowser();
});

When('I resize the browser window to a mobile width', async function () {
  await pageObject.resizeBrowser(375, 667); // Example mobile dimensions
});

When('I set the browser zoom to {int}%', async function (zoomPercentage: number) {
  await pageObject.setZoomLevel(zoomPercentage);
});

When('I click the {string} dropdown toggle', async function (dropdown: string) {
  if (dropdown === 'Automation Platform') {
    await pageObject.toggleAutomationPlatformDropdown();
  }
});

When('I perform a hard reload', async function () {
  await pageObject.page.reload({ waitUntil: 'networkidle' });
});

Then('the Lilly logo is visible', async function () {
  await pageObject.expectElementVisible(pageObject.lillyLogo);
});

Then('the header title displays {string}', async function (expectedText: string) {
  await pageObject.expectHeaderTitleText(expectedText);
});

Then('the header section is visible', async function () {
  await pageObject.expectElementVisible(pageObject.headerSection);
});

Then('the hero banner is visible', async function () {
  await pageObject.expectElementVisible(pageObject.heroBanner);
});

Then('the cards section is visible', async function () {
  await pageObject.expectElementVisible(pageObject.cardsSection);
});

Then('the {string} nav item is visible', async function (navItem: string) {
  const navLocators = {
    'Home': pageObject.homeNavItem,
    'Automation Platform': pageObject.automationPlatformDropdown,
    'Marketplace': pageObject.marketplaceNavItem,
    'TechZone': pageObject.techZoneNavItem,
    'Admin Console': pageObject.adminConsoleNavItem,
  };
  await pageObject.expectElementVisible(navLocators[navItem]);
});

Then('the {string} button is visible', async function (button: string) {
  if (button === 'Submit an Idea') {
    await pageObject.expectElementVisible(pageObject.submitIdeaButton);
  }
});

Then('the {string} tab appears active or selected', async function (tab: string) {
  if (tab === 'Home') {
    await pageObject.expectNavItemActive(pageObject.homeNavItem);
  }
});

Then('the dropdown menu is visible', async function () {
  await pageObject.expectElementVisible(pageObject.automationPlatformDropdownMenu);
});

Then('the dropdown menu is not visible', async function () {
  await pageObject.expectElementNotVisible(pageObject.automationPlatformDropdownMenu);
});

Then('the {string} button is not visible', async function (button: string) {
  if (button === 'Submit an Idea') {
    await pageObject.expectElementNotVisible(pageObject.submitIdeaButton);
  }
});

Then('no click action is available for {string}', async function (button: string) {
  if (button === 'Submit an Idea') {
    await expect(pageObject.submitIdeaButton).not.toBeEnabled();
  }
});

Then('the {string} tab is not marked as active or selected', async function (tab: string) {
  if (tab === 'Home') {
    await pageObject.expectNavItemNotActive(pageObject.homeNavItem);
  }
});