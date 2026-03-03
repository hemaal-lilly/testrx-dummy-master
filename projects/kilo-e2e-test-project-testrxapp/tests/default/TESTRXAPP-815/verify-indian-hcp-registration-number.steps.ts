// Step Definitions for: Verify Indian HCP Registration Number
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { VerifyIndianHcpRegistrationNumberPage } from '../pages/VerifyIndianHcpRegistrationNumberPage';

let pageObject: VerifyIndianHcpRegistrationNumberPage;

Given('the MRN verification form includes #state-council-select, #mrn-input, #verify-mrn-btn, #mrn-error-msg, #verification-status-badge, and #verify-spinner', async function (this: ICustomWorld) {
  pageObject = new VerifyIndianHcpRegistrationNumberPage(this.page);
  await pageObject.navigateToVerificationForm();
});

Given('the Verification Spinner {string} is hidden by default', async function (this: ICustomWorld, spinner: string) {
  await pageObject.expectVerificationSpinnerHidden();
});

Given('the Error Message Container {string} has aria-live {string}', async function (this: ICustomWorld, container: string, ariaLive: string) {
  const ariaLiveValue = await pageObject.errorMessageContainer.getAttribute('aria-live');
  expect(ariaLiveValue).toBe(ariaLive);
});

Given('a logged-in HCP with profile status {string} is on the verification form', async function (this: ICustomWorld, status: string) {
  // Assuming login and navigation logic is handled elsewhere
  await pageObject.navigateToVerificationForm();
});

Given('{string} is set to {string}', async function (this: ICustomWorld, element: string, value: string) {
  if (element === '#state-council-select') {
    await pageObject.selectStateCouncil(value);
  }
});

Given('{string} contains {string}', async function (this: ICustomWorld, element: string, value: string) {
  if (element === '#mrn-input') {
    await pageObject.fillMrnInput(value);
  }
});

Given('{string} is empty', async function (this: ICustomWorld, element: string) {
  if (element === '#mrn-input') {
    await pageObject.fillMrnInput('');
  }
});

When('the HCP clicks {string}', async function (this: ICustomWorld, element: string) {
  if (element === '#verify-mrn-btn') {
    await pageObject.clickVerifyButton();
  }
});

When('the HCP blurs {string}', async function (this: ICustomWorld, element: string) {
  if (element === '#mrn-input') {
    await pageObject.blurMrnInput();
  }
});

Then('the Verification Spinner {string} becomes visible immediately', async function (this: ICustomWorld, spinner: string) {
  await pageObject.expectVerificationSpinnerVisible();
});

Then('the Verification Spinner {string} hides within 3 seconds', async function (this: ICustomWorld, spinner: string) {
  await pageObject.expectVerificationSpinnerHidden();
});

Then('the Verification Status Badge {string} updates to {string}', async function (this: ICustomWorld, badge: string, status: string) {
  await pageObject.expectVerificationStatusBadge(status);
});

Then('the Error Message Container {string} shows {string}', async function (this: ICustomWorld, container: string, message: string) {
  await pageObject.expectErrorMessage(message);
});

Then('the Verify Button {string} becomes disabled', async function (this: ICustomWorld, button: string) {
  await pageObject.expectVerifyButtonDisabled();
});

Then('the Verify Button {string} remains disabled', async function (this: ICustomWorld, button: string) {
  await pageObject.expectVerifyButtonDisabled();
});

Then('the Verify Button {string} remains enabled', async function (this: ICustomWorld, button: string) {
  await pageObject.expectVerifyButtonEnabled();
});

Then('a toast appears with text {string}', async function (this: ICustomWorld, message: string) {
  await pageObject.expectToastMessage(message);
});