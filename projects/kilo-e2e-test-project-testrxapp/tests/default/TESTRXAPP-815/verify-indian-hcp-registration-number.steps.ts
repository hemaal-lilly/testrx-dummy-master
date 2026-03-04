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

Given('the MRN verification form includes {string}', async function (this: ICustomWorld, elements: string) {
  const expectedElements = elements.split(', ');
  for (const element of expectedElements) {
    await expect(this.page.locator(element)).toBeVisible();
  }
});

Given('#state-council-select is set to {string}', async function (this: ICustomWorld, stateCouncil: string) {
  await pageObject.selectStateCouncil(stateCouncil);
});

Given('#mrn-input contains {string}', async function (this: ICustomWorld, mrn: string) {
  await pageObject.fillMRN(mrn);
});

Given('#mrn-input is empty', async function (this: ICustomWorld) {
  await pageObject.fillMRN('');
});

Given('#state-council-select is not selected', async function (this: ICustomWorld) {
  await expect(pageObject.stateCouncilSelect).toHaveValue('');
});

Given('the system has an existing account linked to MRN {string}', async function (this: ICustomWorld, mrn: string) {
  // Simulate backend setup for existing MRN
  await this.context.addCookies([{ name: 'existingMRN', value: mrn, domain: 'playwright.dev' }]);
});

Given('the verification service is delayed beyond 3 seconds', async function (this: ICustomWorld) {
  // Simulate backend delay
  await this.context.addCookies([{ name: 'verificationDelay', value: 'true', domain: 'playwright.dev' }]);
});

Given('the HCP has made {int} verification attempts within the last {int} seconds', async function (this: ICustomWorld, attempts: number, seconds: number) {
  // Simulate backend rate limit
  await this.context.addCookies([{ name: 'attemptCount', value: `${attempts}`, domain: 'playwright.dev' }]);
});

When('the HCP clicks #verify-mrn-btn', async function (this: ICustomWorld) {
  await pageObject.clickVerifyButton();
});

When('the HCP blurs #mrn-input', async function (this: ICustomWorld) {
  await pageObject.blurMRNInput();
});

Then('the Verification Spinner (#verify-spinner) becomes visible immediately', async function (this: ICustomWorld) {
  await pageObject.expectSpinnerVisible();
});

Then('the Verification Spinner (#verify-spinner) hides within 3 seconds', async function (this: ICustomWorld) {
  await pageObject.expectSpinnerHidden();
});

Then('the Verification Status Badge (#verification-status-badge) updates to {string}', async function (this: ICustomWorld, expectedText: string) {
  await pageObject.expectVerificationStatusBadgeText(expectedText);
});

Then('the Error Message Container (#mrn-error-msg) shows {string}', async function (this: ICustomWorld, expectedText: string) {
  await pageObject.expectErrorMessage(expectedText);
});

Then('the Verify Button (#verify-mrn-btn) becomes disabled', async function (this: ICustomWorld) {
  await pageObject.expectVerifyButtonDisabled();
});

Then('the Verify Button (#verify-mrn-btn) remains disabled', async function (this: ICustomWorld) {
  await pageObject.expectVerifyButtonDisabled();
});

Then('the Verify Button (#verify-mrn-btn) remains enabled', async function (this: ICustomWorld) {
  await pageObject.expectVerifyButtonEnabled();
});

Then('a toast appears with text {string}', async function (this: ICustomWorld, expectedText: string) {
  await pageObject.expectToastMessage(expectedText);
});

Then('the MRN is saved and displayed as uppercase {string}', async function (this: ICustomWorld, expectedMRN: string) {
  await expect(pageObject.mrnInput).toHaveValue(expectedMRN);
});

Then('the verification form controls {string} are not visible', async function (this: ICustomWorld, elements: string) {
  const expectedElements = elements.split(', ');
  for (const element of expectedElements) {
    await expect(this.page.locator(element)).toBeHidden();
  }
});