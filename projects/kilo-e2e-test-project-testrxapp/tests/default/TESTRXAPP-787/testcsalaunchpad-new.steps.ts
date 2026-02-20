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
  await pageObject.expectElementVisible(pageObject.homeTab);
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
  await pageObject.expectElementVisible(pageObject.page.locator('[data-testid="marketplace-link"]'));
});

Then('"TechZone" is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.page.locator('[data-testid="techzone-link"]'));
});

Then('"Admin Console" is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.page.locator('[data-testid="admin-console-link"]'));
});

Then('the "Submit an Idea" button is visible', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.submitIdeaButton);
});

When('the home page is loaded', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.homeTab);
});

Then('the "Home" tab is highlighted as active/selected', async function (this: ICustomWorld) {
  await pageObject.expectHomeTabActive();
});

Then('"My LQS302 Risk Evaluations (LEval)" card is visible', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.myLQS302Card);
});

Then('the "My LQS302 Risk Evaluations (LEval)" card shows a relevant icon', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.cardIcon);
});

Then('the "My LQS302 Risk Evaluations (LEval)" card shows a right-arrow navigation indicator', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.cardArrow);
});

Then('"My IT Assets" card is visible', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.myITAssetsCard);
});

Then('the "My IT Assets" card shows a relevant icon', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.cardIcon);
});

Then('the "My IT Assets" card shows a right-arrow navigation indicator', async function (this: ICustomWorld) {
  await pageObject.expectElementVisible(pageObject.cardArrow);
});

When('the user clicks the "My LQS302 Risk Evaluations (LEval)" card', async function (this: ICustomWorld) {
  await pageObject.clickCard(pageObject.myLQS302Card);
});

Then('the user is redirected to the LQS302 Risk Evaluations page', async function (this: ICustomWorld) {
  await expect(this.page).toHaveURL(/lqs302-risk-evaluations/, { timeout: 5000 });
});

When('the user clicks the "My IT Assets" card', async function (this: ICustomWorld) {
  await pageObject.clickCard(pageObject.myITAssetsCard);
});

Then('the user is redirected to the My IT Assets page', async function (this: ICustomWorld) {
  await expect(this.page).toHaveURL(/my-it-assets/, { timeout: 5000 });
});

Then('the "Home" tab is not highlighted as active/selected', async function (this: ICustomWorld) {
  await pageObject.expectHomeTabNotActive();
});

Then('the "Automation Platform" dropdown is not visible', async function (this: ICustomWorld) {
  await pageObject.expectElementNotVisible(pageObject.automationPlatformDropdown);
});

When('the user tries to click the "My IT Assets" card', async function (this: ICustomWorld) {
  await pageObject.expectElementNotVisible(pageObject.myITAssetsCard);
});

Then('the "My IT Assets" card is not visible', async function (this: ICustomWorld) {
  await pageObject.expectElementNotVisible(pageObject.myITAssetsCard);
});

Then('the click action on "My IT Assets" is not available', async function (this: ICustomWorld) {
  await expect(pageObject.myITAssetsCard).not.toBeEnabled({ timeout: 5000 });
});