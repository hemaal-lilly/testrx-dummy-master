// Step Definitions for: Test_csa_launchpad-New
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { CsaLaunchpadHomePage } from '../pages/CsaLaunchpadHomePage';

let pageObject: CsaLaunchpadHomePage;

Given('the user navigates to https://qa.csalaunchpad.lilly.com', async function (this: ICustomWorld) {
  pageObject = new CsaLaunchpadHomePage(this.page);
  await pageObject.navigateToHomePage();
});

Given('the user is on the home page', async function () {
  // No additional actions needed; navigation already handled
});

When('the user views the top header', async function () {
  await pageObject.topHeader.waitFor({ state: 'visible', timeout: 5000 });
});

Then('{string} is visible in the top header', async function (item: string) {
  const locators = {
    'Home': pageObject.homeTab,
    'Automation Platform': pageObject.automationPlatformDropdown,
    'Marketplace': pageObject.marketplaceLink,
    'TechZone': pageObject.techZoneLink,
    'Admin Console': pageObject.adminConsoleLink,
  };
  await pageObject.expectHeaderItemVisible(locators[item]);
});

Then('the "Submit an Idea" button is visible', async function () {
  await pageObject.expectHeaderItemVisible(pageObject.submitIdeaButton);
});

When('the home page is loaded', async function () {
  await pageObject.page.waitForLoadState('networkidle');
});

Then('the "Home" tab is highlighted as active/selected', async function () {
  await pageObject.expectHomeTabActive();
});

Then('the "Home" tab is not highlighted as active/selected', async function () {
  await pageObject.expectHomeTabNotActive();
});

Then('{string} card is visible', async function (cardName: string) {
  const locators = {
    'My LQS302 Risk Evaluations (LEval)': pageObject.myLQS302Card,
    'My IT Assets': pageObject.myITAssetsCard,
  };
  await pageObject.expectCardVisible(locators[cardName]);
});

Then('the {string} card shows a relevant icon', async function (cardName: string) {
  const locators = {
    'My LQS302 Risk Evaluations (LEval)': pageObject.myLQS302Card,
    'My IT Assets': pageObject.myITAssetsCard,
  };
  await pageObject.expectCardIconVisible(locators[cardName]);
});

Then('the {string} card shows a right-arrow navigation indicator', async function (cardName: string) {
  const locators = {
    'My LQS302 Risk Evaluations (LEval)': pageObject.myLQS302Card,
    'My IT Assets': pageObject.myITAssetsCard,
  };
  await pageObject.expectCardArrowVisible(locators[cardName]);
});

When('the user clicks the {string} card', async function (cardName: string) {
  const actions = {
    'My LQS302 Risk Evaluations (LEval)': async () => await pageObject.clickMyLQS302Card(),
    'My IT Assets': async () => await pageObject.clickMyITAssetsCard(),
  };
  await actions[cardName]();
});

Then('the user is redirected to the LQS302 Risk Evaluations page', async function () {
  await expect(pageObject.page).toHaveURL(/lqs302-risk-evaluations/, { timeout: 5000 });
});

Then('the user is redirected to the My IT Assets page', async function () {
  await expect(pageObject.page).toHaveURL(/my-it-assets/, { timeout: 5000 });
});

When('the user tries to click the {string} card', async function (cardName: string) {
  const locators = {
    'My IT Assets': pageObject.myITAssetsCard,
  };
  await pageObject.expectCardNotVisible(locators[cardName]);
});

Then('the {string} card is not visible', async function (cardName: string) {
  const locators = {
    'My IT Assets': pageObject.myITAssetsCard,
  };
  await pageObject.expectCardNotVisible(locators[cardName]);
});

Then('the click action on {string} is not available', async function (cardName: string) {
  const locators = {
    'My IT Assets': pageObject.myITAssetsCard,
  };
  await expect(locators[cardName]).not.toBeEnabled({ timeout: 5000 });
});