// Step Definitions for: Verify Indian HCP Registration Number
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { VerifyIndianHcpRegistrationNumberPage } from '../pages/VerifyIndianHcpRegistrationNumberPage';

let pageObject: VerifyIndianHcpRegistrationNumberPage;

Given('the MRN verification form includes #state-council-select, #mrn-input, #verify-mrn-btn, #mrn-error-msg, #verification-status-badge, and #verify-spinner', async function (this: ICustomWorld) {
  pageObject = new VerifyIndianHcpRegistrationNumberPage(this.page);
  await pageObject.navigateToVerificationForm();
});

Given('the Verification Spinner {string} is hidden by default', async function (this: ICustomWorld, visibility: string) {
  if (visibility === 'hidden') {
    await pageObject.expectSpinnerHidden();
  }
});

Given('the Error Message Container {string} has aria-live {string}', async function (this: ICustomWorld, element: string, ariaLive: string) {
  const locator = pageObject.errorMessageContainer;
  await expect(locator).toHaveAttribute('aria-live', ariaLive);
});

Given('a logged-in HCP with profile status {string} is on the verification form', async function (this: ICustomWorld, status: string) {
  await pageObject.navigateToVerificationForm();
});

Given('#state-council-select is set to {string}', async function (this: ICustomWorld, councilName: string) {
  await pageObject.selectStateCouncil(councilName);
});

Given('#mrn-input contains {string}', async function (this: ICustomWorld, mrn: string) {
  await pageObject.fillMrnInput(mrn);
});

When('the HCP clicks #verify-mrn-btn', async function (this: ICustomWorld) {
  await pageObject.clickVerifyButton();
});

When('the HCP blurs #mrn-input', async function (this: ICustomWorld) {
  await pageObject.blurMrnInput();
});

Then('the Verification Spinner {string} becomes visible immediately', async function (this: ICustomWorld, visibility: string) {
  if (visibility === 'visible') {
    await pageObject.expectSpinnerVisible();
  }
});

Then('the Verification Status Badge {string} updates to {string}', async function (this: ICustomWorld, element: string, status: string) {
  await pageObject.expectVerificationStatus(status);
});

Then('a toast appears with text {string}', async function (this: ICustomWorld, message: string) {
  await pageObject.expectToastMessage(message);
});

Then('the Verify Button {string} becomes disabled', async function (this: ICustomWorld, state: string) {
  if (state === 'disabled') {
    await pageObject.expectVerifyButtonDisabled();
  }
});

Then('the Error Message Container {string} shows {string}', async function (this: ICustomWorld, element: string, message: string) {
  await pageObject.expectErrorMessage(message);
});