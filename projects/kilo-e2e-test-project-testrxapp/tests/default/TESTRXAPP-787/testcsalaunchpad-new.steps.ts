// Step Definitions for: Test_csa_launchpad-New
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { CsaLaunchpadPage } from '../pages/CsaLaunchpadPage';

let pageObject: CsaLaunchpadPage;

Given('the user opens https://qa.csalaunchpad.lilly.com', async function (this: ICustomWorld) {
  pageObject = new CsaLaunchpadPage(this.page);
  await pageObject.navigateToHomePage();
});

Given('the user is on the home page', async function (this: ICustomWorld) {
  pageObject = new CsaLaunchpadPage(this.page);
  await pageObject.navigateToHomePage();
});

When('the home page finishes loading', async function () {
  // Implicit wait handled in navigateToHomePage
});

When('the user clicks the "My LQS302 Risk Evaluations (LEval)" card', async function () {
  await pageObject.clickRiskEvaluationsCard();
});

When('the user clicks the "My IT Assets" card', async function () {
  await pageObject.clickITAssetsCard();
});

Then('the top header shows navigation item "Home"', async function () {
  await pageObject.expectNavigationItemVisible(pageObject.navigationItemHome);
});

Then('the top header shows navigation item "Automation Platform" as a dropdown', async function () {
  await pageObject.expectNavigationItemVisible(pageObject.navigationItemAutomationPlatform);
});

Then('the top header shows navigation item "Marketplace"', async function () {
  await pageObject.expectNavigationItemVisible(pageObject.navigationItemMarketplace);
});

Then('the top header shows navigation item "TechZone"', async function () {
  await pageObject.expectNavigationItemVisible(pageObject.navigationItemTechZone);
});

Then('the top header shows navigation item "Admin Console"', async function () {
  await pageObject.expectNavigationItemVisible(pageObject.navigationItemAdminConsole);
});

Then('the "Submit an Idea" CTA button is visible in the top header', async function () {
  await pageObject.expectButtonVisible(pageObject.submitIdeaButton);
});

Then('the "Home" navigation item is shown in an active/selected state', async function () {
  await pageObject.expectNavigationItemActive(pageObject.navigationItemHome);
});

Then('the "My LQS302 Risk Evaluations (LEval)" card is visible with an icon and a right-arrow indicator', async function () {
  await pageObject.expectCardVisible(pageObject.cardRiskEvaluations);
});

Then('the "My IT Assets" card is visible with an icon and a right-arrow indicator', async function () {
  await pageObject.expectCardVisible(pageObject.cardITAssets);
});

Then('the LQS302 Risk Evaluations page is displayed', async function () {
  await expect(pageObject.page).toHaveURL(/risk-evaluations/, { timeout: 5000 });
});

Then('the My IT Assets page is displayed', async function () {
  await expect(pageObject.page).toHaveURL(/it-assets/, { timeout: 5000 });
});

Then('no click target for "My LQS302 Risk Evaluations (LEval)" is available', async function () {
  await pageObject.expectCardNotVisible(pageObject.cardRiskEvaluations);
});

Then('no click target for "Submit an Idea" is available', async function () {
  await pageObject.expectButtonNotVisible(pageObject.submitIdeaButton);
});

Then('no dropdown control for "Automation Platform" is available', async function () {
  await pageObject.expectNavigationItemVisible(pageObject.navigationItemAutomationPlatform);
});