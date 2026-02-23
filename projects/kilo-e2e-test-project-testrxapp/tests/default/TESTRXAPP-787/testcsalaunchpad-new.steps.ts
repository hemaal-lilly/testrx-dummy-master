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
  // Assuming navigation already confirms the user is on the home page
});

When('the user views the top header', async function (this: ICustomWorld) {
  // No actions needed, just viewing
});

Then('"Home" is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.expectHeaderNavigationVisible();
});

Then('"Automation Platform" dropdown is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.expectHeaderNavigationVisible();
});

Then('"Marketplace" is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.expectHeaderNavigationVisible();
});

Then('"TechZone" is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.expectHeaderNavigationVisible();
});

Then('"Admin Console" is visible in the top header', async function (this: ICustomWorld) {
  await pageObject.expectHeaderNavigationVisible();
});

Then('the "Submit an Idea" button is visible', async function (this: ICustomWorld) {
  await pageObject.expectSubmitIdeaButtonVisible();
});

When('the home page is loaded', async function (this: ICustomWorld) {
  // No actions needed, just verifying state
});

Then('the "Home" tab is highlighted as active/selected', async function (this: ICustomWorld) {
  await pageObject.expectHomeTabActive();
});

Then('"My LQS302 Risk Evaluations (LEval)" card is visible', async function (this: ICustomWorld) {
  await pageObject.expectCardVisible(pageObject.lqs302Card);
});

Then('"My IT Assets" card is visible', async function (this: ICustomWorld) {
  await pageObject.expectCardVisible(pageObject.itAssetsCard);
});

When('the user clicks the "My LQS302 Risk Evaluations (LEval)" card', async function (this: ICustomWorld) {
  await pageObject.clickLqs302Card();
});

Then('the user is redirected to the LQS302 Risk Evaluations page', async function (this: ICustomWorld) {
  await pageObject.expectRedirectedTo('https://qa.csalaunchpad.lilly.com/lqs302-risk-evaluations');
});

When('the user clicks the "My IT Assets" card', async function (this: ICustomWorld) {
  await pageObject.clickItAssetsCard();
});

Then('the user is redirected to the My IT Assets page', async function (this: ICustomWorld) {
  await pageObject.expectRedirectedTo('https://qa.csalaunchpad.lilly.com/my-it-assets');
});

Then('the "Home" tab is not highlighted as active/selected', async function (this: ICustomWorld) {
  await pageObject.expectHomeTabNotActive();
});

Then('the "Automation Platform" dropdown is not visible', async function (this: ICustomWorld) {
  await pageObject.expectCardNotVisible(pageObject.automationPlatformDropdown);
});

When('the user tries to click the "My IT Assets" card', async function (this: ICustomWorld) {
  // No action needed, verifying absence
});

Then('the "My IT Assets" card is not visible', async function (this: ICustomWorld) {
  await pageObject.expectCardNotVisible(pageObject.itAssetsCard);
});

Then('the click action on "My IT Assets" is not available', async function (this: ICustomWorld) {
  await expect(pageObject.itAssetsCard).not.toBeEnabled({ timeout: 5000 });
});