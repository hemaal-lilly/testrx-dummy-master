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
  await pageObject.navigateToHomePage();
});

When('the user views the top header', async function () {
  // No specific action required for this step
});

Then('"Home" is visible in the top header', async function () {
  await pageObject.expectHeaderItemsVisible();
});

Then('"Automation Platform" dropdown is visible in the top header', async function () {
  await pageObject.expectHeaderItemsVisible();
});

Then('"Marketplace" is visible in the top header', async function () {
  await pageObject.expectHeaderItemsVisible();
});

Then('"TechZone" is visible in the top header', async function () {
  await pageObject.expectHeaderItemsVisible();
});

Then('"Admin Console" is visible in the top header', async function () {
  await pageObject.expectHeaderItemsVisible();
});

Then('the "Submit an Idea" button is visible', async function () {
  await pageObject.expectSubmitIdeaButtonVisible();
});

When('the home page is loaded', async function () {
  // No specific action required for this step
});

Then('the "Home" tab is highlighted as active/selected', async function () {
  await pageObject.expectHomeTabActive();
});

Then('"My LQS302 Risk Evaluations (LEval)" card is visible', async function () {
  await pageObject.expectCardVisible(pageObject.myLqs302Card);
});

Then('the "My LQS302 Risk Evaluations (LEval)" card shows a relevant icon', async function () {
  await pageObject.expectCardIconVisible(pageObject.myLqs302Card);
});

Then('the "My LQS302 Risk Evaluations (LEval)" card shows a right-arrow navigation indicator', async function () {
  await pageObject.expectCardRightArrowVisible(pageObject.myLqs302Card);
});

Then('"My IT Assets" card is visible', async function () {
  await pageObject.expectCardVisible(pageObject.myItAssetsCard);
});

Then('the "My IT Assets" card shows a relevant icon', async function () {
  await pageObject.expectCardIconVisible(pageObject.myItAssetsCard);
});

Then('the "My IT Assets" card shows a right-arrow navigation indicator', async function () {
  await pageObject.expectCardRightArrowVisible(pageObject.myItAssetsCard);
});

When('the user clicks the "My LQS302 Risk Evaluations (LEval)" card', async function () {
  await pageObject.clickMyLqs302Card();
});

Then('the user is redirected to the LQS302 Risk Evaluations page', async function () {
  await pageObject.expectRedirectedTo('/lqs302-risk-evaluations');
});

When('the user clicks the "My IT Assets" card', async function () {
  await pageObject.clickMyItAssetsCard();
});

Then('the user is redirected to the My IT Assets page', async function () {
  await pageObject.expectRedirectedTo('/my-it-assets');
});

Then('the "Home" tab is not highlighted as active/selected', async function () {
  await pageObject.expectHomeTabNotActive();
});

Then('the "Automation Platform" dropdown is not visible', async function () {
  await expect(pageObject.automationPlatformDropdown).not.toBeVisible();
});

When('the user tries to click the "My IT Assets" card', async function () {
  // No specific action required for this step
});

Then('the "My IT Assets" card is not visible', async function () {
  await expect(pageObject.myItAssetsCard).not.toBeVisible();
});

Then('the click action on "My IT Assets" is not available', async function () {
  await expect(pageObject.myItAssetsCard).not.toBeEnabled();
});