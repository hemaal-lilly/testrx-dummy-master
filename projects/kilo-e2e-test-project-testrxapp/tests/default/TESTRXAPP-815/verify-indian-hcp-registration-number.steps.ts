// Step Definitions for: Verify Indian HCP Registration Number
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../../../support/world';
import { VerifyIndianHcpRegistrationNumberPage } from './verify-indian-hcp-registration-number.page';

let pageObject: VerifyIndianHcpRegistrationNumberPage;

Given('the MRN verification form includes #state-council-select, #mrn-input, #verify-mrn-btn, #mrn-error-msg, #verification-status-badge, and #verify-spinner', async function (this: ICustomWorld) {
  pageObject = new VerifyIndianHcpRegistrationNumberPage(this.page);
  await pageObject.navigateToVerificationForm();
});

Given('the Verification Spinner (#verify-spinner) is hidden by default', async function () {
  await pageObject.expectSpinnerHidden();
});

Given('the Error Message Container (#mrn-error-msg) has aria-live "polite"', async function () {
  const ariaLive = await pageObject.errorMessage.getAttribute('aria-live');
  expect(ariaLive).toBe('polite');
});

Given('a logged-in HCP with profile status "Not Verified" is on the verification form', async function () {
  await pageObject.navigateToVerificationForm();
});

Given('#state-council-select is set to {string}', async function (councilName: string) {
  await pageObject.selectStateCouncil(councilName);
});

Given('#mrn-input contains {string}', async function (mrn: string) {
  await pageObject.fillMrnInput(mrn);
});

When('the HCP clicks #verify-mrn-btn', async function () {
  await pageObject.clickVerifyButton();
});

When('the HCP blurs #mrn-input', async function () {
  await pageObject.blurMrnInput();
});

Then('the Verification Spinner (#verify-spinner) becomes visible immediately', async function () {
  await pageObject.expectSpinnerVisible();
});

Then('within 3 seconds the Verification Status Badge (#verification-status-badge) updates to {string}', async function (status: string) {
  await pageObject.expectVerificationStatus(status);
});

Then('a toast appears with text {string}', async function (message: string) {
  await pageObject.expectToastMessage(message);
});

Then('the Verify Button (#verify-mrn-btn) becomes disabled and its label changes to {string}', async function (label: string) {
  await pageObject.expectVerifyButtonDisabled();
  const buttonText = await pageObject.verifyButton.textContent();
  expect(buttonText).toBe(label);
});

Then('the MRN is saved and displayed as uppercase {string}', async function (mrn: string) {
  const displayedMrn = await pageObject.mrnInput.inputValue();
  expect(displayedMrn).toBe(mrn.toUpperCase());
});

Then('the Error Message Container (#mrn-error-msg) shows {string}', async function (errorMessage: string) {
  await pageObject.expectErrorMessage(errorMessage);
});

Then('the Verify Button (#verify-mrn-btn) remains disabled', async function () {
  await pageObject.expectVerifyButtonDisabled();
});

Then('the Verification Status Badge (#verification-status-badge) remains {string}', async function (status: string) {
  await pageObject.expectVerificationStatus(status);
});

Then('the Verification Spinner (#verify-spinner) is not visible', async function () {
  await pageObject.expectSpinnerHidden();
});