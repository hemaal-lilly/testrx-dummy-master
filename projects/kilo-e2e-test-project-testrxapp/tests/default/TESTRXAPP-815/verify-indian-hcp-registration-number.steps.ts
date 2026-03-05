// Step Definitions for: Verify Indian HCP Registration Number
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { VerifyIndianHcpRegistrationNumberPage } from './verify-indian-hcp-registration-number.page';

let pageObject: VerifyIndianHcpRegistrationNumberPage;

Given('a logged-in HCP is on the verification form', async function (this: ICustomWorld) {
  pageObject = new VerifyIndianHcpRegistrationNumberPage(this.page);
  await pageObject.navigateToVerificationForm();
});

Given('a logged-in HCP with profile status {string} is on the verification form', async function (this: ICustomWorld, profileStatus: string) {
  pageObject = new VerifyIndianHcpRegistrationNumberPage(this.page);
  await pageObject.navigateToVerificationForm();
  // Additional logic to ensure profile status can be added here if necessary
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

Given('#state-council-select is not selected', async function (this: ICustomWorld) {
  await pageObject.stateCouncilSelect.selectOption('');
});

Given('the system has an existing account linked to MRN {string}', async function (this: ICustomWorld, existingMrn: string) {
  // Mock or setup backend state for existing MRN
});

Given('the verification service is delayed beyond 3 seconds', async function (this: ICustomWorld) {
  // Mock or simulate backend delay
});

Given('the HCP has made {int} verification attempts within the last {int} seconds', async function (this: ICustomWorld, attempts: number, seconds: number) {
  // Mock or simulate rate limit condition
});

Given('the user is not logged in', async function (this: ICustomWorld) {
  // Simulate unauthenticated user state
});

When('the HCP clicks #verify-mrn-btn', async function (this: ICustomWorld) {
  await pageObject.clickVerifyButton();
});

When('the HCP blurs #mrn-input', async function (this: ICustomWorld) {
  await pageObject.blurMrnInput();
});

When('the HCP tabs through the form', async function (this: ICustomWorld) {
  await this.page.keyboard.press('Tab');
  await this.page.keyboard.press('Tab');
  await this.page.keyboard.press('Tab');
  await this.page.keyboard.press('Tab');
});

Then('the Verification Spinner (#verify-spinner) becomes visible immediately', async function (this: ICustomWorld) {
  await pageObject.expectSpinnerVisibility(true);
});

Then('the Verification Spinner (#verify-spinner) hides within 3 seconds', async function (this: ICustomWorld) {
  await pageObject.expectSpinnerVisibility(false);
});

Then('the Verification Status Badge (#verification-status-badge) updates to {string}', async function (this: ICustomWorld, expectedStatus: string) {
  await pageObject.expectVerificationStatus(expectedStatus);
});

Then('the Error Message Container (#mrn-error-msg) shows {string}', async function (this: ICustomWorld, expectedMessage: string) {
  await pageObject.expectErrorMessage(expectedMessage);
});

Then('the Verify Button (#verify-mrn-btn) remains disabled', async function (this: ICustomWorld) {
  await pageObject.expectVerifyButtonDisabled(true);
});

Then('the Verify Button (#verify-mrn-btn) becomes disabled', async function (this: ICustomWorld) {
  await pageObject.expectVerifyButtonDisabled(true);
});

Then('the Verify Button (#verify-mrn-btn) remains enabled', async function (this: ICustomWorld) {
  await pageObject.expectVerifyButtonDisabled(false);
});

Then('a toast appears with text {string}', async function (this: ICustomWorld, expectedMessage: string) {
  await pageObject.expectToastMessage(expectedMessage);
});

Then('the MRN is saved and displayed as uppercase {string}', async function (this: ICustomWorld, expectedMrn: string) {
  await expect(pageObject.mrnInput).toHaveValue(expectedMrn, { timeout: 5000 });
});

Then('the verification form controls (#state-council-select, #mrn-input, #verify-mrn-btn) are not visible', async function (this: ICustomWorld) {
  await expect(pageObject.stateCouncilSelect).toBeHidden();
  await expect(pageObject.mrnInput).toBeHidden();
  await expect(pageObject.verifyButton).toBeHidden();
});