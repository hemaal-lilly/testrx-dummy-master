// Step Definitions for: Test_csa_launchpad-New
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { CsaLaunchpadHomePage } from '../pages/CsaLaunchpadHomePage';

let pageObject: CsaLaunchpadHomePage;

Given('the user navigates to https://qa.csalaunchpad.lilly.com', async function (this: ICustomWorld) {
  pageObject = new CsaLaunchpadHomePage(this.page);
  await pageObject.navigateToHomePage();
});

Given('the user is on the home page', async function (this: ICustomWorld) {
  // Assuming navigation ensures the user is on the home page
});

When('the user views the top header', async function (this: ICustomWorld) {
  // No action needed; header is static
});

When('the home page is loaded', async function (this: ICustomWorld) {
  // No action needed; page load is implicit
});

When('the user clicks the {string} card', async function (this: ICustomWorld, cardName: string) {
  if (cardName === 'My LQS302 Risk Evaluations (LEval)') {
    await pageObject.clickMyLqs302Card();
  } else if (cardName === 'My IT Assets') {
    await pageObject.clickMyItAssetsCard();
  }
});

When('the user tries to click the {string} card', async function (this: ICustomWorld, cardName: string) {
  // No action needed; validation will be in the assertion
});

Then('"{string}" is visible in the top header', async function (this: ICustomWorld, itemName: string) {
  const itemMap = {
    'Home': pageObject.homeTab,
    'Automation Platform': pageObject.automationPlatformDropdown,
    'Marketplace': pageObject.marketplaceLink,
    'TechZone': pageObject.techZoneLink,
    'Admin Console': pageObject.adminConsoleLink,
  };
  await pageObject.expectHeaderItemVisible(itemMap[itemName], itemName);
});

Then('the "{string}" button is visible', async function (this: ICustomWorld, buttonName: string) {
  if (buttonName === 'Submit an Idea') {
    await pageObject.expectHeaderItemVisible(pageObject.submitIdeaButton, buttonName);
  }
});

Then('the "{string}" tab is highlighted as active/selected', async function (this: ICustomWorld, tabName: string) {
  if (tabName === 'Home') {
    await pageObject.expectTabActive(pageObject.homeTab, tabName);
  }
});

Then('the "{string}" tab is not highlighted as active/selected', async function (this: ICustomWorld, tabName: string) {
  if (tabName === 'Home') {
    await pageObject.expectTabNotActive(pageObject.homeTab, tabName);
  }
});

Then('"{string}" card is visible', async function (this: ICustomWorld, cardName: string) {
  const cardMap = {
    'My LQS302 Risk Evaluations (LEval)': pageObject.myLqs302Card,
    'My IT Assets': pageObject.myItAssetsCard,
  };
  await pageObject.expectCardVisible(cardMap[cardName], cardName);
});

Then('the "{string}" card is not visible', async function (this: ICustomWorld, cardName: string) {
  const cardMap = {
    'My IT Assets': pageObject.myItAssetsCard,
  };
  await pageObject.expectCardNotVisible(cardMap[cardName], cardName);
});

Then('the click action on "{string}" is not available', async function (this: ICustomWorld, cardName: string) {
  const cardMap = {
    'My IT Assets': pageObject.myItAssetsCard,
  };
  await pageObject.expectCardNotClickable(cardMap[cardName], cardName);
});

Then('the user is redirected to the {string} page', async function (this: ICustomWorld, pageName: string) {
  const pageUrlMap = {
    'LQS302 Risk Evaluations': '/lqs302-risk-evaluations',
    'My IT Assets': '/my-it-assets',
  };
  await expect(this.page).toHaveURL(new RegExp(pageUrlMap[pageName]), { timeout: 5000 });
});