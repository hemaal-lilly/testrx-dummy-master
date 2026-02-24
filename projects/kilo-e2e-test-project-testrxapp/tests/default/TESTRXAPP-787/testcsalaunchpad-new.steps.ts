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
  await pageObject.expectElementVisible(pageObject.topHeader);
});

When('the user views the top header', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.topHeader);
});

Then('"Home" is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.homeTab);
});

Then('"Automation Platform" dropdown is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.automationPlatformDropdown);
});

Then('"Marketplace" is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.marketplaceLink);
});

Then('"TechZone" is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.techZoneLink);
});

Then('"Admin Console" is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.adminConsoleLink);
});

Then('the "Submit an Idea" button is visible', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.submitIdeaButton);
});

When('the home page is loaded', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.homeTab);
});

Then('the "Home" tab is highlighted as active/selected', async function (this: ICustomWorld) {
  await pageObject.expectTabActive(pageObject.homeTab);
});

Then('"My LQS302 Risk Evaluations (LEval)" card is visible', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.myLqs302Card);
});

Then('the "My LQS302 Risk Evaluations (LEval)" card shows a relevant icon', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.myLqs302CardIcon);
});

Then('the "My LQS302 Risk Evaluations (LEval)" card shows a right-arrow navigation indicator', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.myLqs302CardArrow);
});

Then('"My IT Assets" card is visible', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.myItAssetsCard);
});

Then('the "My IT Assets" card shows a relevant icon', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.myItAssetsCardIcon);
});

Then('the "My IT Assets" card shows a right-arrow navigation indicator', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.myItAssetsCardArrow);
});

When('the user clicks the "My LQS302 Risk Evaluations (LEval)" card', async function (this: ICustomWorld) {
  await pageObject.clickMyLqs302Card();
});

Then('the user is redirected to the LQS302 Risk Evaluations page', async function (this: ICustomWorld) {
  await expect(this.page).toHaveURL(/lqs302-risk-evaluations/, { timeout: 5000 });
});

When('the user clicks the "My IT Assets" card', async function (this: ICustomWorld) {
  await pageObject.clickMyItAssetsCard();
});

Then('the user is redirected to the My IT Assets page', async function (this: ICustomWorld) {
  await expect(this.page).toHaveURL(/my-it-assets/, { timeout: 5000 });
});

Then('the "Home" tab is not highlighted as active/selected', async function (this: ICustomWorld) {
  await pageObject.expectTabNotActive(pageObject.homeTab);
});

Then('the "Automation Platform" dropdown is not visible', async function (this: ICustomWorld) {
  await pageObject.expectElementNotVisible(pageObject.automationPlatformDropdown);
});

When('the user tries to click the "My IT Assets" card', async function (this: ICustomWorld) {
  // No action performed, as the card is not visible.
});

Then('the "My IT Assets" card is not visible', async function (this: ICustomWorld) {
  await pageObject.expectElementNotVisible(pageObject.myItAssetsCard);
});

Then('the click action on "My IT Assets" is not available', async function (this: ICustomWorld) {
  await expect(pageObject.myItAssetsCard).not.toBeEnabled({ timeout: 5000 });
});