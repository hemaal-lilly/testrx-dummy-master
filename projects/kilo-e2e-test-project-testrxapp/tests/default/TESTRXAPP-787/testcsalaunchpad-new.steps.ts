// Step Definitions for: Test_csa_launchpad-New
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { TestCsaLaunchpadNewPage } from './testcsalaunchpad-new.page';

let pageObject: TestCsaLaunchpadNewPage;

Given('the user navigates to {string}', async function (this: ICustomWorld, baseUrl: string) {
  pageObject = new TestCsaLaunchpadNewPage(this.page);
  await pageObject.navigateToHomePage(baseUrl);
});

Given('the user is on the home page', async function () {
  // No additional actions needed as navigation is handled in the previous step
});

When('the user views the top header', async function () {
  // Placeholder for context; no specific actions needed
});

Then('{string} is visible in the top header', async function (this: ICustomWorld, item: string) {
  switch (item) {
    case 'Home':
      await pageObject.expectHeaderNavigationItemsVisible();
      break;
    case 'Automation Platform':
      await expect(pageObject.automationPlatformDropdown).toBeVisible();
      break;
    case 'Marketplace':
      await expect(pageObject.marketplaceLink).toBeVisible();
      break;
    case 'TechZone':
      await expect(pageObject.techZoneLink).toBeVisible();
      break;
    case 'Admin Console':
      await expect(pageObject.adminConsoleLink).toBeVisible();
      break;
    default:
      throw new Error(`Unknown header navigation item: ${item}`);
  }
});

Then('the {string} button is visible', async function (this: ICustomWorld, buttonName: string) {
  if (buttonName === 'Submit an Idea') {
    await pageObject.expectSubmitIdeaButtonVisible();
  } else {
    throw new Error(`Unknown button: ${buttonName}`);
  }
});

When('the home page is loaded', async function () {
  // Placeholder for context; no specific actions needed
});

Then('the {string} tab is highlighted as active/selected', async function (this: ICustomWorld, tabName: string) {
  if (tabName === 'Home') {
    await pageObject.expectHomeTabHighlighted();
  } else {
    throw new Error(`Unknown tab: ${tabName}`);
  }
});

Then('the {string} tab is not highlighted as active/selected', async function (this: ICustomWorld, tabName: string) {
  if (tabName === 'Home') {
    await pageObject.expectHomeTabNotHighlighted();
  } else {
    throw new Error(`Unknown tab: ${tabName}`);
  }
});

When('the user clicks the {string} card', async function (this: ICustomWorld, cardName: string) {
  if (cardName === 'My LQS302 Risk Evaluations (LEval)') {
    await pageObject.clickMyLQS302Card();
  } else if (cardName === 'My IT Assets') {
    await pageObject.clickMyITAssetsCard();
  } else {
    throw new Error(`Unknown card: ${cardName}`);
  }
});

Then('the user is redirected to the {string} page', async function (this: ICustomWorld, expectedPage: string) {
  const expectedUrls: Record<string, string> = {
    'LQS302 Risk Evaluations': 'https://qa.csalaunchpad.lilly.com/lqs302-risk-evaluations',
    'My IT Assets': 'https://qa.csalaunchpad.lilly.com/my-it-assets',
  };

  const expectedUrl = expectedUrls[expectedPage];
  if (!expectedUrl) {
    throw new Error(`Unknown page: ${expectedPage}`);
  }

  await pageObject.expectRedirectToPage(expectedUrl);
});

Then('the {string} card is not visible', async function (this: ICustomWorld, cardName: string) {
  if (cardName === 'My IT Assets') {
    await pageObject.expectMyITAssetsCardNotVisible();
  } else if (cardName === 'My LQS302 Risk Evaluations (LEval)') {
    await pageObject.expectMyLQS302CardNotVisible();
  } else {
    throw new Error(`Unknown card: ${cardName}`);
  }
});

Then('the click action on {string} is not available', async function (this: ICustomWorld, cardName: string) {
  if (cardName === 'My IT Assets') {
    await expect(pageObject.myITAssetsCard).toBeHidden();
  } else {
    throw new Error(`Unknown card: ${cardName}`);
  }
});