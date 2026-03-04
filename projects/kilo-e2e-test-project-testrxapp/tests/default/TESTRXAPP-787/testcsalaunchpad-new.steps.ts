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

Given('the user is on the home page', async function (this: ICustomWorld) {
  // Assuming the user is already on the home page after navigation
});

When('the user views the top header', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.topHeader);
});

Then('{string} is visible in the top header', async function (this: ICustomWorld, item: string) {
  const locatorMap = {
    "Home": pageObject.homeTab,
    "Automation Platform": pageObject.automationPlatformDropdown,
    "Marketplace": pageObject.marketplaceLink,
    "TechZone": pageObject.techZoneLink,
    "Admin Console": pageObject.adminConsoleLink,
  };
  await pageObject.expectElementVisible(locatorMap[item]);
});

Then('the {string} button is visible', async function (this: ICustomWorld, buttonName: string) {
  if (buttonName === "Submit an Idea") {
    await pageObject.expectElementVisible(pageObject.submitIdeaButton);
  }
});

Then('the {string} tab is highlighted as active/selected', async function (this: ICustomWorld, tabName: string) {
  if (tabName === "Home") {
    await pageObject.expectElementHighlighted(pageObject.homeTab);
  }
});

Then('{string} card is visible', async function (this: ICustomWorld, cardName: string) {
  const locatorMap = {
    "My LQS302 Risk Evaluations (LEval)": pageObject.myLQS302Card,
    "My IT Assets": pageObject.myITAssetsCard,
  };
  await pageObject.expectElementVisible(locatorMap[cardName]);
});

Then('the {string} card shows a relevant icon', async function (this: ICustomWorld, cardName: string) {
  const locatorMap = {
    "My LQS302 Risk Evaluations (LEval)": pageObject.myLQS302Icon,
    "My IT Assets": pageObject.myITAssetsIcon,
  };
  await pageObject.expectElementVisible(locatorMap[cardName]);
});

Then('the {string} card shows a right-arrow navigation indicator', async function (this: ICustomWorld, cardName: string) {
  const locatorMap = {
    "My LQS302 Risk Evaluations (LEval)": pageObject.myLQS302Arrow,
    "My IT Assets": pageObject.myITAssetsArrow,
  };
  await pageObject.expectElementVisible(locatorMap[cardName]);
});

When('the user clicks the {string} card', async function (this: ICustomWorld, cardName: string) {
  if (cardName === "My LQS302 Risk Evaluations (LEval)") {
    await pageObject.clickMyLQS302Card();
  } else if (cardName === "My IT Assets") {
    await pageObject.clickMyITAssetsCard();
  }
});

Then('the user is redirected to the {string} page', async function (this: ICustomWorld, expectedPageUrl: string) {
  await pageObject.expectRedirect(expectedPageUrl);
});

Then('the {string} tab is not highlighted as active/selected', async function (this: ICustomWorld, tabName: string) {
  if (tabName === "Home") {
    await pageObject.expectElementNotHighlighted(pageObject.homeTab);
  }
});

Then('{string} dropdown is not visible in the top header', async function (this: ICustomWorld, dropdownName: string) {
  if (dropdownName === "Automation Platform") {
    await pageObject.expectElementNotVisible(pageObject.automationPlatformDropdown);
  }
});

When('the user tries to click the {string} card', async function (this: ICustomWorld, cardName: string) {
  const locatorMap = {
    "My IT Assets": pageObject.myITAssetsCard,
  };
  await pageObject.expectElementNotVisible(locatorMap[cardName]);
});

Then('the {string} card is not visible', async function (this: ICustomWorld, cardName: string) {
  const locatorMap = {
    "My IT Assets": pageObject.myITAssetsCard,
  };
  await pageObject.expectElementNotVisible(locatorMap[cardName]);
});

Then('the click action on {string} is not available', async function (this: ICustomWorld, cardName: string) {
  const locatorMap = {
    "My IT Assets": pageObject.myITAssetsCard,
  };
  await expect(locatorMap[cardName]).not.toBeEnabled({ timeout: 5000 });
});