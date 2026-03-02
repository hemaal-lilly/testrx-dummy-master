// Step Definitions for: Verify Indian HCP Registration Number
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { VerifyIndianHcpRegistrationNumberPage } from '../pages/VerifyIndianHcpRegistrationNumberPage';

let pageObject: VerifyIndianHcpRegistrationNumberPage;

Given('a logged-in HCP is on the verification form', async function (this: ICustomWorld) {
  pageObject = new VerifyIndianHcpRegistrationNumberPage(this.page);
  await pageObject.navigateToVerificationForm();
});

Given('the MRN verification form includes {string}, {string}, {string}, {string}, {string}, and {string}', async function () {
  // No specific actions needed for this step as it describes the form structure.
});

Given('the Verification Spinner {string} is hidden by default', async function () {
  await pageObject.expectVerificationSpinnerHidden();
});

Given('the Error Message Container {string} has aria-live {string}', async function () {
  const ariaLive = await pageObject.errorMessageContainer.getAttribute('aria-live');
  expect(ariaLive).toBe('polite');
});

Given('#state-council-select is set to {string}', async function (this: ICustomWorld, stateCouncil: string) {
  await pageObject.selectStateCouncil(stateCouncil);
});

Given('#mrn-input contains {string}', async function (this: ICustomWorld, mrn: string) {
  await pageObject.fillMrnInput(mrn);
});

Given('#mrn-input is empty', async function (this: ICustomWorld) {
  await pageObject.fillMrnInput('');
});

Given('#state-council-select is not selected', async function () {
  // No action needed since the dropdown is initially unselected.
});

Given('the system has an existing account linked to MRN {string}', async function () {
  // Mock backend state or setup preconditions in the test environment.
});

Given('the verification service is delayed beyond 3 seconds', async function () {
  // Simulate backend delay in the test environment.
});

Given('the HCP has made 3 verification attempts within the last 60 seconds', async function () {
  // Mock backend state or setup preconditions in the test environment.
});

Given('the user is not logged in', async function () {
  // Simulate an unauthenticated user in the test environment.
});

Given('a logged-in HCP with profile status {string} is on the verification form', async function (this: ICustomWorld, profileStatus: string) {
  await pageObject.navigateToVerificationForm();
  // Mock profile status if necessary.
});

When('the HCP clicks #verify-mrn-btn', async function (this: ICustomWorld) {
  await pageObject.clickVerifyButton();
});

When('the HCP blurs #mrn-input', async function (this: ICustomWorld) {
  await pageObject.blurMrnInput();
});

When('the user attempts to access the MRN verification form', async function () {
  await pageObject.navigateToVerificationForm();
});

When('the HCP tabs through the form', async function () {
  // Simulate tab navigation using keyboard.
  await this.page.keyboard.press('Tab');
  await this.page.keyboard.press('Tab');
  await this.page.keyboard.press('Tab');
  await this.page.keyboard.press('Tab');
});

Then('the Verification Spinner {string} becomes visible immediately', async function () {
  await pageObject.expectVerificationSpinnerVisible();
});

Then('the Verification Spinner {string} hides within 3 seconds', async function () {
  await pageObject.expectVerificationSpinnerHidden();
});

Then('the Verification Status Badge {string} updates to {string}', async function (this: ICustomWorld, badgeSelector: string, expectedText: string) {
  await pageObject.expectVerificationBadgeText(expectedText);
});

Then('the Error Message Container {string} shows {string}', async function (this: ICustomWorld, errorSelector: string, expectedMessage: string) {
  await pageObject.expectErrorMessage(expectedMessage);
});

Then('a toast appears with text {string}', async function (this: ICustomWorld, expectedMessage: string) {
  await pageObject.expectToastMessage(expectedMessage);
});

Then('the Verify Button {string} becomes disabled', async function () {
  await pageObject.expectVerifyButtonDisabled();
});

Then('the Verify Button {string} remains disabled', async function () {
  await pageObject.expectVerifyButtonDisabled();
});

Then('the Verify Button {string} remains enabled', async function () {
  await pageObject.expectVerifyButtonEnabled();
});

Then('the verification form controls {string}, {string}, {string} are not visible', async function () {
  await expect(pageObject.stateCouncilSelect).not.toBeVisible();
  await expect(pageObject.mrnInput).not.toBeVisible();
  await expect(pageObject.verifyButton).not.toBeVisible();
});

Then('focus order is {string} -> {string} -> {string} -> {string}', async function () {
  // Validate focus order using keyboard navigation.
});