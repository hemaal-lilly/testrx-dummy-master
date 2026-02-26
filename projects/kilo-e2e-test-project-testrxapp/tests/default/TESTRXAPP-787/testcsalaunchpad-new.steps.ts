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
  await pageObject.assertVisible(pageObject.homeTab);
});

When('the user views the top header', async function (this: ICustomWorld) {
  await pageObject.assertVisible(pageObject.topHeader);
});

Then('"Home" is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.assertVisible(pageObject.homeTab);
});

Then('"Automation Platform" dropdown is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.assertVisible(pageObject.automationPlatformDropdown);
});

Then('"Marketplace" is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.assertVisible(pageObject.marketplaceLink);
});

Then('"TechZone" is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.assertVisible(pageObject.techZoneLink);
});

Then('"Admin Console" is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.assertVisible(pageObject.adminConsoleLink);
});

Then('the "Submit an Idea" button is visible', async function (this: ICustomWorld) {
  await pageObject.assertVisible(pageObject.submitIdeaButton);
});

When('the home page is loaded', async function (this: ICustomWorld) {
  await pageObject.assertVisible(pageObject.homeTab);
});

Then('the "Home" tab is highlighted as active/selected', async function (this: ICustomWorld) {
  await pageObject.assertHomeTabActive();
});

Then('"My LQS302 Risk Evaluations (LEval)" card is visible', async function (this: ICustomWorld) {
  await pageObject.assertVisible(pageObject.myLQS302Card);
});

Then('the "My LQS302 Risk Evaluations (LEval)" card shows a relevant icon', async function (this: ICustomWorld) {
  await pageObject.assertVisible(pageObject.myLQS302Icon);
});

Then('the "My LQS302 Risk Evaluations (LEval)" card shows a right-arrow navigation indicator', async function (this: ICustomWorld) {
  await pageObject.assertVisible(pageObject.myLQS302Arrow);
});

Then('"My IT Assets" card is visible', async function (this: ICustomWorld) {
  await pageObject.assertVisible(pageObject.myITAssetsCard);
});

Then('the "My IT Assets" card shows a relevant icon', async function (this: ICustomWorld) {
  await pageObject.assertVisible(pageObject.myITAssetsIcon);
});

Then('the "My IT Assets" card shows a right-arrow navigation indicator', async function (this: ICustomWorld) {
  await pageObject.assertVisible(pageObject.myITAssetsArrow);
});

When('the user clicks the "My LQS302 Risk Evaluations (LEval)" card', async function (this: ICustomWorld) {
  await pageObject.clickMyLQS302Card();
});

Then('the user is redirected to the LQS302 Risk Evaluations page', async function (this: ICustomWorld) {
  await pageObject.assertRedirection('https://qa.csalaunchpad.lilly.com/lqs302-risk-evaluations');
});

When('the user clicks the "My IT Assets" card', async function (this: ICustomWorld) {
  await pageObject.clickMyITAssetsCard();
});

Then('the user is redirected to the My IT Assets page', async function (this: ICustomWorld) {
  await pageObject.assertRedirection('https://qa.csalaunchpad.lilly.com/my-it-assets');
});

Then('the "Home" tab is not highlighted as active/selected', async function (this: ICustomWorld) {
  await pageObject.assertHomeTabNotActive();
});

Then('the "Automation Platform" dropdown is not visible', async function (this: ICustomWorld) {
  await pageObject.assertNotVisible(pageObject.automationPlatformDropdown);
});

When('the user tries to click the "My IT Assets" card', async function (this: ICustomWorld) {
  await pageObject.assertNotVisible(pageObject.myITAssetsCard);
});

Then('the "My IT Assets" card is not visible', async function (this: ICustomWorld) {
  await pageObject.assertNotVisible(pageObject.myITAssetsCard);
});

Then('the click action on "My IT Assets" is not available', async function (this: ICustomWorld) {
  await expect(pageObject.myITAssetsCard).not.toBeEnabled({ timeout: 5000 });
});