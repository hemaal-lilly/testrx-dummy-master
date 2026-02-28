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
  await pageObject.expectHeaderItemVisible(pageObject.homeTab);
});

Then('"Automation Platform" dropdown is visible in the top header', async function () {
  await pageObject.expectHeaderItemVisible(pageObject.automationPlatformDropdown);
});

Then('"Marketplace" is visible in the top header', async function () {
  await pageObject.expectHeaderItemVisible(pageObject.marketplaceLink);
});

Then('"TechZone" is visible in the top header', async function () {
  await pageObject.expectHeaderItemVisible(pageObject.techZoneLink);
});

Then('"Admin Console" is visible in the top header', async function () {
  await pageObject.expectHeaderItemVisible(pageObject.adminConsoleLink);
});

Then('the "Submit an Idea" button is visible', async function () {
  await pageObject.expectHeaderItemVisible(pageObject.submitIdeaButton);
});

When('the home page is loaded', async function () {
  // No specific action required for page load
});

Then('the "Home" tab is highlighted as active/selected', async function () {
  await pageObject.expectTabActive(pageObject.homeTab);
});

Then('"My LQS302 Risk Evaluations (LEval)" card is visible', async function () {
  await pageObject.expectCardVisible(pageObject.myLQS302Card);
});

Then('the "My LQS302 Risk Evaluations (LEval)" card shows a relevant icon', async function () {
  await pageObject.expectCardIconVisible(pageObject.myLQS302Icon);
});

Then('the "My LQS302 Risk Evaluations (LEval)" card shows a right-arrow navigation indicator', async function () {
  await pageObject.expectCardArrowVisible(pageObject.myLQS302Arrow);
});

Then('"My IT Assets" card is visible', async function () {
  await pageObject.expectCardVisible(pageObject.myITAssetsCard);
});

Then('the "My IT Assets" card shows a relevant icon', async function () {
  await pageObject.expectCardIconVisible(pageObject.myITAssetsIcon);
});

Then('the "My IT Assets" card shows a right-arrow navigation indicator', async function () {
  await pageObject.expectCardArrowVisible(pageObject.myITAssetsArrow);
});

When('the user clicks the "My LQS302 Risk Evaluations (LEval)" card', async function () {
  await pageObject.clickMyLQS302Card();
});

Then('the user is redirected to the LQS302 Risk Evaluations page', async function () {
  await expect(pageObject.page).toHaveURL(/\/lqs302-risk-evaluations/, { timeout: 5000 });
});

When('the user clicks the "My IT Assets" card', async function () {
  await pageObject.clickMyITAssetsCard();
});

Then('the user is redirected to the My IT Assets page', async function () {
  await expect(pageObject.page).toHaveURL(/\/my-it-assets/, { timeout: 5000 });
});

Then('the "Home" tab is not highlighted as active/selected', async function () {
  await pageObject.expectTabNotActive(pageObject.homeTab);
});

Then('the "Automation Platform" dropdown is not visible', async function () {
  await pageObject.expectElementNotVisible(pageObject.automationPlatformDropdown);
});

When('the user tries to click the "My IT Assets" card', async function () {
  // No specific action required for attempting click
});

Then('the "My IT Assets" card is not visible', async function () {
  await pageObject.expectElementNotVisible(pageObject.myITAssetsCard);
});

Then('the click action on "My IT Assets" is not available', async function () {
  await expect(pageObject.myITAssetsCard).not.toBeEnabled({ timeout: 5000 });
});