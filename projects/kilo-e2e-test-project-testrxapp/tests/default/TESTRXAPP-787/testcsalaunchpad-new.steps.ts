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
  // Assuming navigation to the home page is already covered
});

When('the user views the top header', async function (this: ICustomWorld) {
  // No explicit action required for viewing
});

Then('"Home" is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.homeTab, 'Home tab');
});

Then('"Automation Platform" dropdown is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.automationPlatformDropdown, 'Automation Platform dropdown');
});

Then('"Marketplace" is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.marketplaceLink, 'Marketplace link');
});

Then('"TechZone" is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.techZoneLink, 'TechZone link');
});

Then('"Admin Console" is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.adminConsoleLink, 'Admin Console link');
});

Then('the "Submit an Idea" button is visible', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.submitIdeaButton, 'Submit an Idea button');
});

When('the home page is loaded', async function (this: ICustomWorld) {
  // Assuming the page is already loaded
});

Then('the "Home" tab is highlighted as active/selected', async function (this: ICustomWorld) {
  await pageObject.expectTabActive(pageObject.homeTab, 'Home tab');
});

Then('"My LQS302 Risk Evaluations (LEval)" card is visible', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.myLqs302Card, 'My LQS302 card');
});

Then('"My IT Assets" card is visible', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.myItAssetsCard, 'My IT Assets card');
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
  await pageObject.expectTabNotActive(pageObject.homeTab, 'Home tab');
});

Then('the "Automation Platform" dropdown is not visible', async function (this: ICustomWorld) {
  await pageObject.expectElementNotVisible(pageObject.automationPlatformDropdown, 'Automation Platform dropdown');
});

When('the user tries to click the "My IT Assets" card', async function (this: ICustomWorld) {
  // No action since the card is not visible
});

Then('the "My IT Assets" card is not visible', async function (this: ICustomWorld) {
  await pageObject.expectElementNotVisible(pageObject.myItAssetsCard, 'My IT Assets card');
});

Then('the click action on "My IT Assets" is not available', async function (this: ICustomWorld) {
  await expect(pageObject.myItAssetsCard).not.toBeEnabled({ timeout: 5000 });
});