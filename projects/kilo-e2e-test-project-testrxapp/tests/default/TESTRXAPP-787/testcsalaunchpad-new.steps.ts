// Step Definitions for: Test_csa_launchpad-New
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { TestCsaLaunchpadNewPage } from '../pages/TestCsaLaunchpadNewPage';

let pageObject: TestCsaLaunchpadNewPage;

Given('the user navigates to https://qa.csalaunchpad.lilly.com', async function (this: ICustomWorld) {
  pageObject = new TestCsaLaunchpadNewPage(this.page);
  await pageObject.navigateToHomePage();
});

Given('the user is on the home page', async function (this: ICustomWorld) {
  await pageObject.navigateToHomePage();
});

When('the user views the top header', async function () {
  // No specific action required for viewing the header
});

Then('"Home" is visible in the top header', async function () {
  await pageObject.expectHeaderNavigationItemsVisible();
});

Then('"Automation Platform" dropdown is visible in the top header', async function () {
  await pageObject.expectHeaderNavigationItemsVisible();
});

Then('"Marketplace" is visible in the top header', async function () {
  await pageObject.expectHeaderNavigationItemsVisible();
});

Then('"TechZone" is visible in the top header', async function () {
  await pageObject.expectHeaderNavigationItemsVisible();
});

Then('"Admin Console" is visible in the top header', async function () {
  await pageObject.expectHeaderNavigationItemsVisible();
});

Then('the "Submit an Idea" button is visible', async function () {
  await pageObject.expectSubmitIdeaButtonVisible();
});

When('the home page is loaded', async function () {
  // No specific action required for page load
});

Then('the "Home" tab is highlighted as active/selected', async function () {
  await pageObject.expectHomeTabActive();
});

Then('"My LQS302 Risk Evaluations (LEval)" card is visible', async function () {
  await pageObject.expectCardsVisible();
});

Then('the "My LQS302 Risk Evaluations (LEval)" card shows a relevant icon', async function () {
  await pageObject.expectCardDetails(pageObject.lqs302Card, pageObject.lqs302CardIcon, pageObject.lqs302CardArrow);
});

Then('the "My LQS302 Risk Evaluations (LEval)" card shows a right-arrow navigation indicator', async function () {
  await pageObject.expectCardDetails(pageObject.lqs302Card, pageObject.lqs302CardIcon, pageObject.lqs302CardArrow);
});

Then('"My IT Assets" card is visible', async function () {
  await pageObject.expectCardsVisible();
});

Then('the "My IT Assets" card shows a relevant icon', async function () {
  await pageObject.expectCardDetails(pageObject.itAssetsCard, pageObject.itAssetsCardIcon, pageObject.itAssetsCardArrow);
});

Then('the "My IT Assets" card shows a right-arrow navigation indicator', async function () {
  await pageObject.expectCardDetails(pageObject.itAssetsCard, pageObject.itAssetsCardIcon, pageObject.itAssetsCardArrow);
});

When('the user clicks the "My LQS302 Risk Evaluations (LEval)" card', async function () {
  await pageObject.clickLqs302Card();
});

Then('the user is redirected to the LQS302 Risk Evaluations page', async function () {
  await pageObject.expectRedirectToPage('https://qa.csalaunchpad.lilly.com/lqs302');
});

When('the user clicks the "My IT Assets" card', async function () {
  await pageObject.clickItAssetsCard();
});

Then('the user is redirected to the My IT Assets page', async function () {
  await pageObject.expectRedirectToPage('https://qa.csalaunchpad.lilly.com/it-assets');
});

Then('the "Home" tab is not highlighted as active/selected', async function () {
  await pageObject.expectHomeTabNotActive();
});

Then('the "Automation Platform" dropdown is not visible', async function () {
  await pageObject.expectCardNotVisible(pageObject.automationPlatformDropdown);
});

When('the user tries to click the "My IT Assets" card', async function () {
  // No specific action required for attempting to click
});

Then('the "My IT Assets" card is not visible', async function () {
  await pageObject.expectCardNotVisible(pageObject.itAssetsCard);
});

Then('the click action on "My IT Assets" is not available', async function () {
  await pageObject.expectCardNotVisible(pageObject.itAssetsCard);
});