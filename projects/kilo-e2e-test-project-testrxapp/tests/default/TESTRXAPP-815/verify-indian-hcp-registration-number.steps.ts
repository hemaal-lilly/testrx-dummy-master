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
  const elementList = elements.split(', ');
  for (const element of elementList) {
    await expect(this.page.locator(element)).toBeVisible();
  }
});

Given('the Verification Spinner {string} is hidden by default', async function (this: ICustomWorld, spinner: string) {
  await expect(this.page.locator(spinner)).toBeHidden();
});

Given('the Error Message Container {string} has aria-live {string}', async function (this: ICustomWorld, container: string, ariaLive: string) {
  await expect(this.page.locator(container)).toHaveAttribute('aria-live', ariaLive);
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
  await pageObject.stateCouncilSelect.selectOption('');
});

When('the HCP clicks #verify-mrn-btn', async function (this: ICustomWorld) {
  await pageObject.clickVerifyButton();
});

When('the HCP blurs #mrn-input', async function (this: ICustomWorld) {
  await pageObject.blurMRNInput();
});

Then('the Verification Spinner {string} becomes visible immediately', async function (this: ICustomWorld, spinner: string) {
  await expect(this.page.locator(spinner)).toBeVisible();
});

Then('the Verification Spinner {string} hides within 3 seconds', async function (this: ICustomWorld, spinner: string) {
  await expect(this.page.locator(spinner)).toBeHidden({ timeout: 3000 });
});

Then('the Verification Status Badge {string} updates to {string}', async function (this: ICustomWorld, badge: string, expectedText: string) {
  await expect(this.page.locator(badge)).toHaveText(expectedText);
});

Then('the Error Message Container {string} shows {string}', async function (this: ICustomWorld, container: string, expectedText: string) {
  await expect(this.page.locator(container)).toHaveText(expectedText);
});

Then('the Verify Button {string} becomes disabled', async function (this: ICustomWorld, button: string) {
  await expect(this.page.locator(button)).toBeDisabled();
});

Then('the Verify Button {string} remains disabled', async function (this: ICustomWorld, button: string) {
  await expect(this.page.locator(button)).toBeDisabled();
});

Then('the Verify Button {string} remains enabled', async function (this: ICustomWorld, button: string) {
  await expect(this.page.locator(button)).toBeEnabled();
});

Then('the Verification Spinner {string} is not visible', async function (this: ICustomWorld, spinner: string) {
  await expect(this.page.locator(spinner)).toBeHidden();
});

Then('the Verification Status Badge {string} remains {string}', async function (this: ICustomWorld, badge: string, expectedText: string) {
  await expect(this.page.locator(badge)).toHaveText(expectedText);
});

Then('a toast appears with text {string}', async function (this: ICustomWorld, toastText: string) {
  await expect(this.page.locator('[data-testid="toast"]')).toHaveText(toastText);
});

Then('the MRN is saved and displayed as uppercase {string}', async function (this: ICustomWorld, expectedMRN: string) {
  await expect(pageObject.mrnInput).toHaveValue(expectedMRN);
});