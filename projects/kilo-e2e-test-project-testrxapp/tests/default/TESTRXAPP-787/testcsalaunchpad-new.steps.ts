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
  // Assuming the navigation step ensures the user is on the home page
});

When('the user views the top header', async function (this: ICustomWorld) {
  // No specific action needed for viewing the header
});

Then('{string} is visible in the top header', async function (this: ICustomWorld, item: string) {
  const locators = {
    'Home': pageObject.homeTab,
    'Automation Platform': pageObject.automationPlatformDropdown,
    'Marketplace': pageObject.marketplaceLink,
    'TechZone': pageObject.techZoneLink,
    'Admin Console': pageObject.adminConsoleLink,
  };
  await pageObject.expectHeaderItemVisible(locators[item]);
});

Then('the "Submit an Idea" button is visible', async function (this: ICustomWorld) {
  await pageObject.expectHeaderItemVisible(pageObject.submitIdeaButton);
});

When('the home page is loaded', async function (this: ICustomWorld) {
  // No specific action needed for page load
});

Then('the "Home" tab is highlighted as active/selected', async function (this: ICustomWorld) {
  await pageObject.expectHomeTabActive();
});

Then('the "Home" tab is not highlighted as active/selected', async function (this: ICustomWorld) {
  await pageObject.expectHomeTabNotActive();
});

Then('{string} card is visible', async function (this: ICustomWorld, card: string) {
  const locators = {
    'My LQS302 Risk Evaluations (LEval)': pageObject.lqs302Card,
    'My IT Assets': pageObject.itAssetsCard,
  };
  await pageObject.expectCardVisible(locators[card]);
});

Then('the {string} card shows a relevant icon', async function (this: ICustomWorld, card: string) {
  const locators = {
    'My LQS302 Risk Evaluations (LEval)': pageObject.lqs302CardIcon,
    'My IT Assets': pageObject.itAssetsCardIcon,
  };
  await pageObject.expectCardIconVisible(locators[card]);
});

Then('the {string} card shows a right-arrow navigation indicator', async function (this: ICustomWorld, card: string) {
  const locators = {
    'My LQS302 Risk Evaluations (LEval)': pageObject.lqs302CardArrow,
    'My IT Assets': pageObject.itAssetsCardArrow,
  };
  await pageObject.expectCardArrowVisible(locators[card]);
});

When('the user clicks the {string} card', async function (this: ICustomWorld, card: string) {
  const actions = {
    'My LQS302 Risk Evaluations (LEval)': pageObject.clickLqs302Card.bind(pageObject),
    'My IT Assets': pageObject.clickItAssetsCard.bind(pageObject),
  };
  await actions[card]();
});

Then('the user is redirected to the {string} page', async function (this: ICustomWorld, page: string) {
  const urls = {
    'LQS302 Risk Evaluations': 'https://qa.csalaunchpad.lilly.com/lqs302-risk-evaluations',
    'My IT Assets': 'https://qa.csalaunchpad.lilly.com/my-it-assets',
  };
  await pageObject.expectRedirectedTo(urls[page]);
});

Then('the {string} card is not visible', async function (this: ICustomWorld, card: string) {
  const locators = {
    'My IT Assets': pageObject.itAssetsCard,
  };
  await expect(locators[card]).not.toBeVisible({ timeout: 5000 });
});

Then('the click action on {string} is not available', async function (this: ICustomWorld, card: string) {
  const locators = {
    'My IT Assets': pageObject.itAssetsCard,
  };
  await expect(locators[card]).not.toBeEnabled({ timeout: 5000 });
});

Then('{string} dropdown is not visible in the top header', async function (this: ICustomWorld, item: string) {
  const locators = {
    'Automation Platform': pageObject.automationPlatformDropdown,
  };
  await expect(locators[item]).not.toBeVisible({ timeout: 5000 });
});