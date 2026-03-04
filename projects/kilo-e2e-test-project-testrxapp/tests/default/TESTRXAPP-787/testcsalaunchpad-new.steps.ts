// Step Definitions for: Test_csa_launchpad-New
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../../../support/world';
import { TestCsaLaunchpadNewPage } from './testcsalaunchpad-new.page';

let pageObject: TestCsaLaunchpadNewPage;

Given('the user navigates to https://qa.csalaunchpad.lilly.com', async function (this: ICustomWorld) {
  pageObject = new TestCsaLaunchpadNewPage(this.page);
  await pageObject.navigateToHomePage();
});

Given('the user is on the home page', async function (this: ICustomWorld) {
  await pageObject.navigateToHomePage();
});

When('the user views the top header', async function (this: ICustomWorld) {
  // No specific action required for viewing the header
});

Then('"Home" is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.expectHeaderItemsVisible();
});

Then('"Automation Platform" dropdown is visible in the top header', async function (this: ICustomWorld) {
  await expect(pageObject.automationPlatformDropdown).toBeVisible();
});

Then('"Marketplace" is visible in the top header', async function (this: ICustomWorld) {
  await expect(pageObject.marketplaceLink).toBeVisible();
});

Then('"TechZone" is visible in the top header', async function (this: ICustomWorld) {
  await expect(pageObject.techZoneLink).toBeVisible();
});

Then('"Admin Console" is visible in the top header', async function (this: ICustomWorld) {
  await expect(pageObject.adminConsoleLink).toBeVisible();
});

Then('the "Submit an Idea" button is visible', async function (this: ICustomWorld) {
  await pageObject.expectSubmitIdeaButtonVisible();
});

When('the home page is loaded', async function (this: ICustomWorld) {
  // No specific action required for loading the home page
});

Then('the "Home" tab is highlighted as active/selected', async function (this: ICustomWorld) {
  await pageObject.expectHomeTabActive();
});

Then('the "Home" tab is not highlighted as active/selected', async function (this: ICustomWorld) {
  await pageObject.expectHomeTabNotActive();
});

Then('"My LQS302 Risk Evaluations (LEval)" card is visible', async function (this: ICustomWorld) {
  await pageObject.expectCardVisible(pageObject.myLqs302Card);
});

Then('the "My LQS302 Risk Evaluations (LEval)" card shows a relevant icon', async function (this: ICustomWorld) {
  await pageObject.expectCardIconVisible(pageObject.myLqs302Card);
});

Then('the "My LQS302 Risk Evaluations (LEval)" card shows a right-arrow navigation indicator', async function (this: ICustomWorld) {
  await pageObject.expectCardRightArrowVisible(pageObject.myLqs302Card);
});

Then('"My IT Assets" card is visible', async function (this: ICustomWorld) {
  await pageObject.expectCardVisible(pageObject.myItAssetsCard);
});

Then('the "My IT Assets" card shows a relevant icon', async function (this: ICustomWorld) {
  await pageObject.expectCardIconVisible(pageObject.myItAssetsCard);
});

Then('the "My IT Assets" card shows a right-arrow navigation indicator', async function (this: ICustomWorld) {
  await pageObject.expectCardRightArrowVisible(pageObject.myItAssetsCard);
});

When('the user clicks the "My LQS302 Risk Evaluations (LEval)" card', async function (this: ICustomWorld) {
  await pageObject.clickMyLqs302Card();
});

Then('the user is redirected to the LQS302 Risk Evaluations page', async function (this: ICustomWorld) {
  await pageObject.expectRedirectedTo('/lqs302-risk-evaluations');
});

When('the user clicks the "My IT Assets" card', async function (this: ICustomWorld) {
  await pageObject.clickMyItAssetsCard();
});

Then('the user is redirected to the My IT Assets page', async function (this: ICustomWorld) {
  await pageObject.expectRedirectedTo('/my-it-assets');
});

When('the user tries to click the "My IT Assets" card', async function (this: ICustomWorld) {
  // No specific action required as the card is not visible
});

Then('the "My IT Assets" card is not visible', async function (this: ICustomWorld) {
  await pageObject.expectCardNotVisible(pageObject.myItAssetsCard);
});

Then('the click action on "My IT Assets" is not available', async function (this: ICustomWorld) {
  await expect(pageObject.myItAssetsCard).not.toBeEnabled();
});