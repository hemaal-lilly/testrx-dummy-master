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

Given('the user is on the home page', async function (this: ICustomWorld) {
  // Assuming the user is already navigated to the home page in the previous step
});

When('the user views the top header', async function (this: ICustomWorld) {
  // No specific action needed; header visibility is checked in assertions
});

Then('{string} is visible in the top header', async function (this: ICustomWorld, item: string) {
  switch (item) {
    case 'Home':
      await expect(pageObject.homeTab).toBeVisible();
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
      throw new Error(`Unknown header item: ${item}`);
  }
});

Then('the {string} button is visible', async function (this: ICustomWorld, button: string) {
  if (button === 'Submit an Idea') {
    await pageObject.expectSubmitIdeaButtonVisible();
  } else {
    throw new Error(`Unknown button: ${button}`);
  }
});

When('the home page is loaded', async function (this: ICustomWorld) {
  // No specific action needed; page load state is assumed
});

Then('the {string} tab is highlighted as active/selected', async function (this: ICustomWorld, tab: string) {
  if (tab === 'Home') {
    await pageObject.expectHomeTabActive();
  } else {
    throw new Error(`Unknown tab: ${tab}`);
  }
});

Then('the {string} tab is not highlighted as active/selected', async function (this: ICustomWorld, tab: string) {
  if (tab === 'Home') {
    await pageObject.expectHomeTabNotActive();
  } else {
    throw new Error(`Unknown tab: ${tab}`);
  }
});

Then('{string} card is visible', async function (this: ICustomWorld, card: string) {
  if (card === 'My LQS302 Risk Evaluations (LEval)') {
    await pageObject.expectMyLqs302CardVisible();
  } else if (card === 'My IT Assets') {
    await pageObject.expectMyItAssetsCardVisible();
  } else {
    throw new Error(`Unknown card: ${card}`);
  }
});

Then('the {string} card is not visible', async function (this: ICustomWorld, card: string) {
  if (card === 'My IT Assets') {
    await pageObject.expectMyItAssetsCardNotVisible();
  } else {
    throw new Error(`Unknown card: ${card}`);
  }
});

When('the user clicks the {string} card', async function (this: ICustomWorld, card: string) {
  if (card === 'My LQS302 Risk Evaluations (LEval)') {
    await pageObject.clickMyLqs302Card();
  } else if (card === 'My IT Assets') {
    await pageObject.clickMyItAssetsCard();
  } else {
    throw new Error(`Unknown card: ${card}`);
  }
});

Then('the user is redirected to the {string} page', async function (this: ICustomWorld, pageName: string) {
  const expectedUrls = {
    'LQS302 Risk Evaluations': '/lqs302-risk-evaluations',
    'My IT Assets': '/my-it-assets',
  };

  const expectedUrl = expectedUrls[pageName];
  if (!expectedUrl) {
    throw new Error(`Unknown page name: ${pageName}`);
  }

  await expect(this.page).toHaveURL(expectedUrl);
});

Then('the click action on {string} is not available', async function (this: ICustomWorld, card: string) {
  if (card === 'My IT Assets') {
    await expect(pageObject.myItAssetsCard).toBeHidden();
  } else {
    throw new Error(`Unknown card: ${card}`);
  }
});