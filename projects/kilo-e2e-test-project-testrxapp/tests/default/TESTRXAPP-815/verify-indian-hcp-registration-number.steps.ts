// Step Definitions for: Verify Indian HCP Registration Number
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { VerifyIndianHcpRegistrationNumberPage } from './verify-indian-hcp-registration-number.page';

let pageObject: VerifyIndianHcpRegistrationNumberPage;

Given('the MRN verification form includes {string}, {string}, {string}, {string}, {string}, and {string}', async function (this: ICustomWorld) {
  pageObject = new VerifyIndianHcpRegistrationNumberPage(this.page);
  await pageObject.navigateToForm();
});

Given('the Verification Spinner {string} is hidden by default', async function (this: ICustomWorld, spinner: string) {
  await pageObject.expectVerificationSpinnerHidden();
});

Given('the Error Message Container {string} has aria-live {string}', async function (this: ICustomWorld, errorContainer: string, ariaLive: string) {
  const ariaLiveValue = await pageObject.errorMessageContainer.getAttribute('aria-live');
  expect(ariaLiveValue).toBe(ariaLive);
});

Given('a logged-in HCP with profile status {string} is on the verification form', async function (this: ICustomWorld, profileStatus: string) {
  await pageObject.navigateToForm();
  // Assume profile status is validated elsewhere (e.g., via API or UI)
});

Given('{string} is set to {string}', async function (this: ICustomWorld, field: string, value: string) {
  if (field === '#state-council-select') {
    await pageObject.selectStateCouncil(value);
  }
});

Given('{string} contains {string}', async function (this: ICustomWorld, field: string, value: string) {
  if (field === '#mrn-input') {
    await pageObject.fillMrnInput(value);
  }
});

Given('{string} is empty', async function (this: ICustomWorld, field: string) {
  if (field === '#mrn-input') {
    await pageObject.fillMrnInput('');
  }
});

Given('{string} is not selected', async function (this: ICustomWorld, field: string) {
  if (field === '#state-council-select') {
    await pageObject.selectStateCouncil('');
  }
});

When('the HCP clicks {string}', async function (this: ICustomWorld, button: string) {
  if (button === '#verify-mrn-btn') {
    await pageObject.clickVerifyButton();
  }
});

When('the HCP blurs {string}', async function (this: ICustomWorld, field: string) {
  if (field === '#mrn-input') {
    await pageObject.blurMrnInput();
  }
});

Then('the Verification Spinner {string} becomes visible immediately', async function (this: ICustomWorld, spinner: string) {
  await pageObject.expectVerificationSpinnerVisible();
});

Then('the Verification Spinner {string} hides within {int} seconds', async function (this: ICustomWorld, spinner: string, seconds: number) {
  await pageObject.expectVerificationSpinnerHidden();
});

Then('the Verification Status Badge {string} updates to {string}', async function (this: ICustomWorld, badge: string, expectedText: string) {
  await pageObject.expectVerificationStatusBadgeText(expectedText);
});

Then('the Error Message Container {string} shows {string}', async function (this: ICustomWorld, errorContainer: string, expectedText: string) {
  await pageObject.expectErrorMessage(expectedText);
});

Then('a toast appears with text {string}', async function (this: ICustomWorld, expectedText: string) {
  await pageObject.expectToastMessage(expectedText);
});

Then('the Verify Button {string} becomes disabled', async function (this: ICustomWorld, button: string) {
  await pageObject.expectVerifyButtonDisabled();
});

Then('the Verify Button {string} remains enabled', async function (this: ICustomWorld, button: string) {
  await pageObject.expectVerifyButtonEnabled();
});