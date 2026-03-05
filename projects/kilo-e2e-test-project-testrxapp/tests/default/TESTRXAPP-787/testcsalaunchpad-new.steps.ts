// Step Definitions for: Test_csa_launchpad-New
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { TestCsaLaunchpadNewPage } from './testcsalaunchpad-new.page';

let pageObject: TestCsaLaunchpadNewPage;

Given('the user navigates to {string}', async function (this: ICustomWorld, url: string) {
  pageObject = new TestCsaLaunchpadNewPage(this.page);
  await pageObject.navigateToHomePage(url);
});

Given('the user is on the home page', async function () {
  // No additional actions required; page state assumed to be correct
});

When('the user views the top header', async function () {
  // No specific action required; header is static
});

When('the home page is loaded', async function () {
  // No specific action required; page load assumed
});

When('the user clicks the {string} card', async function (this: ICustomWorld, cardName: string) {
  if (cardName === 'My LQS302 Risk Evaluations (LEval)') {
    await pageObject.clickMyLQS302Card();
  } else if (cardName === 'My IT Assets') {
    await pageObject.clickMyITAssetsCard();
  } else {
    throw new Error(`Unknown card name: ${cardName}`);
  }
});

When('the user tries to click the {string} card', async function (this: ICustomWorld, cardName: string) {
  if (cardName === 'My IT Assets') {
    await expect(pageObject.myITAssetsCard).toBeHidden({ timeout: 5000 });
  } else {
    throw new Error(`Unknown card name: ${cardName}`);
  }
});

Then('{string} is visible in the top header', async function (this: ICustomWorld, headerItem: string) {
  const headerLocators = {
    'Home': pageObject.homeTab,
    'Automation Platform': pageObject.automationPlatformDropdown,
    'Marketplace': pageObject.marketplaceLink,
    'TechZone': pageObject.techZoneLink,
    'Admin Console': pageObject.adminConsoleLink,
  };
  const locator = headerLocators[headerItem];
  if (!locator) throw new Error(`Unknown header item: ${headerItem}`);
  await pageObject.expectHeaderItemVisible(locator);
});

Then('the {string} button is visible', async function (this: ICustomWorld, buttonName: string) {
  if (buttonName === 'Submit an Idea') {
    await pageObject.expectHeaderItemVisible(pageObject.submitIdeaButton);
  } else {
    throw new Error(`Unknown button name: ${buttonName}`);
  }
});

Then('the {string} tab is highlighted as active/selected', async function (this: ICustomWorld, tabName: string) {
  if (tabName === 'Home') {
    await pageObject.expectTabHighlighted(pageObject.homeTab);
  } else {
    throw new Error(`Unknown tab name: ${tabName}`);
  }
});

Then('the {string} tab is not highlighted as active/selected', async function (this: ICustomWorld, tabName: string) {
  if (tabName === 'Home') {
    await pageObject.expectTabNotHighlighted(pageObject.homeTab);
  } else {
    throw new Error(`Unknown tab name: ${tabName}`);
  }
});

Then('{string} card is visible', async function (this: ICustomWorld, cardName: string) {
  const cardLocators = {
    'My LQS302 Risk Evaluations (LEval)': pageObject.myLQS302Card,
    'My IT Assets': pageObject.myITAssetsCard,
  };
  const locator = cardLocators[cardName];
  if (!locator) throw new Error(`Unknown card name: ${cardName}`);
  await pageObject.expectCardVisible(locator);
});

Then('the {string} card shows a relevant icon', async function (this: ICustomWorld, cardName: string) {
  const cardIconLocators = {
    'My LQS302 Risk Evaluations (LEval)': pageObject.myLQS302CardIcon,
    'My IT Assets': pageObject.myITAssetsCardIcon,
  };
  const locator = cardIconLocators[cardName];
  if (!locator) throw new Error(`Unknown card name: ${cardName}`);
  await pageObject.expectCardIconVisible(locator);
});

Then('the {string} card shows a right-arrow navigation indicator', async function (this: ICustomWorld, cardName: string) {
  const cardArrowLocators = {
    'My LQS302 Risk Evaluations (LEval)': pageObject.myLQS302CardArrow,
    'My IT Assets': pageObject.myITAssetsCardArrow,
  };
  const locator = cardArrowLocators[cardName];
  if (!locator) throw new Error(`Unknown card name: ${cardName}`);
  await pageObject.expectCardArrowVisible(locator);
});

Then('the user is redirected to the {string} page', async function (this: ICustomWorld, pageName: string) {
  const pageUrls = {
    'LQS302 Risk Evaluations': '/lqs302-risk-evaluations',
    'My IT Assets': '/my-it-assets',
  };
  const expectedUrl = pageUrls[pageName];
  if (!expectedUrl) throw new Error(`Unknown page name: ${pageName}`);
  await expect(this.page).toHaveURL(expectedUrl, { timeout: 5000 });
});

Then('the {string} card is not visible', async function (this: ICustomWorld, cardName: string) {
  const cardLocators = {
    'My IT Assets': pageObject.myITAssetsCard,
  };
  const locator = cardLocators[cardName];
  if (!locator) throw new Error(`Unknown card name: ${cardName}`);
  await pageObject.expectCardNotVisible(locator);
});

Then('the click action on {string} is not available', async function (this: ICustomWorld, cardName: string) {
  const cardLocators = {
    'My IT Assets': pageObject.myITAssetsCard,
  };
  const locator = cardLocators[cardName];
  if (!locator) throw new Error(`Unknown card name: ${cardName}`);
  await expect(locator).toBeHidden({ timeout: 5000 });
});