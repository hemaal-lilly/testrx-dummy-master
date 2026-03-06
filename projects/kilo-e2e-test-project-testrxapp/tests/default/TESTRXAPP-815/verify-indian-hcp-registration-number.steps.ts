// Step Definitions for: Verify Indian HCP Registration Number
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { VerifyIndianHcpRegistrationNumberPage } from '../pages/VerifyIndianHcpRegistrationNumberPage';

let pageObject: VerifyIndianHcpRegistrationNumberPage;

Given('the MRN verification form includes {string}, {string}, {string}, {string}, {string}, and {string}', async function (this: ICustomWorld, stateCouncilSelect, mrnInput, verifyButton, errorMessageContainer, verificationStatusBadge, verificationSpinner) {
  pageObject = new VerifyIndianHcpRegistrationNumberPage(this.page);
  await pageObject.navigateToVerificationForm();
});

Given('the Verification Spinner {string} is hidden by default', async function (this: ICustomWorld, verificationSpinner) {
  await pageObject.expectSpinnerVisibility(false);
});

Given('the Error Message Container {string} has aria-live {string}', async function (this: ICustomWorld, errorMessageContainer, ariaLiveValue) {
  const ariaLive = await pageObject.errorMessageContainer.getAttribute('aria-live');
  expect(ariaLive).toBe(ariaLiveValue);
});

Given('a logged-in HCP with profile status {string} is on the verification form', async function (this: ICustomWorld, profileStatus) {
  await pageObject.navigateToVerificationForm();
});

Given('{string} is set to {string}', async function (this: ICustomWorld, stateCouncilSelect, stateCouncil) {
  await pageObject.selectStateCouncil(stateCouncil);
});

Given('{string} contains {string}', async function (this: ICustomWorld, mrnInput, mrn) {
  await pageObject.fillMrnInput(mrn);
});

Given('{string} is empty', async function (this: ICustomWorld, mrnInput) {
  await pageObject.fillMrnInput('');
});

Given('{string} is not selected', async function (this: ICustomWorld, stateCouncilSelect) {
  await pageObject.stateCouncilSelect.selectOption('');
});

When('the HCP clicks {string}', async function (this: ICustomWorld, verifyButton) {
  await pageObject.clickVerifyButton();
});

When('the HCP blurs {string}', async function (this: ICustomWorld, mrnInput) {
  await pageObject.blurMrnInput();
});

Then('{string} becomes visible immediately', async function (this: ICustomWorld, verificationSpinner) {
  await pageObject.expectSpinnerVisibility(true);
});

Then('{string} updates to {string}', async function (this: ICustomWorld, verificationStatusBadge, expectedStatus) {
  await pageObject.expectVerificationStatus(expectedStatus);
});

Then('{string} shows {string}', async function (this: ICustomWorld, errorMessageContainer, expectedMessage) {
  await pageObject.expectErrorMessage(expectedMessage);
});

Then('{string} remains disabled', async function (this: ICustomWorld, verifyButton) {
  await pageObject.expectVerifyButtonDisabled(true);
});

Then('{string} is not visible', async function (this: ICustomWorld, verificationSpinner) {
  await pageObject.expectSpinnerVisibility(false);
});