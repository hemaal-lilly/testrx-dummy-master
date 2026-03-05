// Step Definitions for: Verify Indian HCP Registration Number
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { VerifyIndianHcpRegistrationNumberPage } from './verify-indian-hcp-registration-number.page';

let pageObject: VerifyIndianHcpRegistrationNumberPage;

Given('the MRN verification form includes {string}, {string}, {string}, {string}, {string}, and {string}', async function (this: ICustomWorld) {
  pageObject = new VerifyIndianHcpRegistrationNumberPage(this.page);
  await pageObject.navigateToVerificationForm();
});

Given('the Verification Spinner {string} is hidden by default', async function (this: ICustomWorld, spinner: string) {
  await pageObject.expectSpinnerHidden();
});

Given('the Error Message Container {string} has aria-live {string}', async function (this: ICustomWorld, container: string, ariaLive: string) {
  const ariaValue = await pageObject.errorMessageContainer.getAttribute('aria-live');
  expect(ariaValue).toBe(ariaLive);
});

Given('a logged-in HCP with profile status {string} is on the verification form', async function (this: ICustomWorld, status: string) {
  await pageObject.navigateToVerificationForm();
  // Assume profile status is verified via API or UI; no explicit step for this.
});

Given('{string} is set to {string}', async function (this: ICustomWorld, element: string, value: string) {
  await pageObject.selectStateCouncil(value);
});

Given('{string} contains {string}', async function (this: ICustomWorld, element: string, value: string) {
  await pageObject.fillMrnInput(value);
});

Given('{string} is empty', async function (this: ICustomWorld, element: string) {
  await pageObject.fillMrnInput('');
});

Given('{string} is not selected', async function (this: ICustomWorld, element: string) {
  // Assume no selection is equivalent to default state
});

Given('the system has an existing account linked to MRN {string}', async function (this: ICustomWorld, mrn: string) {
  // Mock or setup backend state for existing MRN
});

Given('the HCP has made {int} verification attempts within the last {int} seconds', async function (this: ICustomWorld, attempts: number, seconds: number) {
  // Mock or setup backend rate-limit state
});

Given('the verification service is delayed beyond {int} seconds', async function (this: ICustomWorld, seconds: number) {
  // Mock or simulate backend delay
});

Given('the user is not logged in', async function (this: ICustomWorld) {
  // Simulate unauthenticated state
});

When('the HCP clicks {string}', async function (this: ICustomWorld, element: string) {
  await pageObject.clickVerifyButton();
});

When('the HCP blurs {string}', async function (this: ICustomWorld, element: string) {
  await pageObject.blurMrnInput();
});

When('the HCP tabs through the form', async function (this: ICustomWorld) {
  // Simulate keyboard navigation
  await this.page.keyboard.press('Tab');
});

Then('{string} becomes visible immediately', async function (this: ICustomWorld, element: string) {
  await pageObject.expectSpinnerVisible();
});

Then('{string} hides within {int} seconds', async function (this: ICustomWorld, element: string, seconds: number) {
  await pageObject.expectSpinnerHidden();
});

Then('{string} updates to {string}', async function (this: ICustomWorld, element: string, status: string) {
  await pageObject.expectVerificationStatus(status);
});

Then('{string} shows {string}', async function (this: ICustomWorld, element: string, message: string) {
  await pageObject.expectErrorMessage(message);
});

Then('{string} remains {string}', async function (this: ICustomWorld, element: string, state: string) {
  if (state === 'disabled') {
    await pageObject.expectVerifyButtonDisabled();
  } else if (state === 'enabled') {
    await pageObject.expectVerifyButtonEnabled();
  }
});

Then('a toast appears with text {string}', async function (this: ICustomWorld, message: string) {
  await pageObject.expectToastMessage(message);
});

Then('{string} announces messages via aria-live {string} when they appear', async function (this: ICustomWorld, element: string, ariaLive: string) {
  const ariaValue = await pageObject.errorMessageContainer.getAttribute('aria-live');
  expect(ariaValue).toBe(ariaLive);
});