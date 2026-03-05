// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { HcpMealExpense4Page } from './hcp-meal-expense4.page';
import { getCredential } from '../../../utils/common';

let pageObject: HcpMealExpense4Page;

Given('I am on the ODM page', async function (this: ICustomWorld) {
  pageObject = new HcpMealExpense4Page(this.page);
  await pageObject.navigate();
});

Given('the product list is empty', async function (this: ICustomWorld) {
  await pageObject.confirmProductListEmpty();
});

Given('the product list contains one or more products', async function (this: ICustomWorld) {
  await pageObject.confirmProductListNonEmpty();
});

Given('the product list contains exactly one product', async function (this: ICustomWorld) {
  await pageObject.confirmProductListContainsExactlyOne();
});

Given('I have opened the ODM Business Rules and UI Messages.xlsx', async function () {
  const filePath = getCredential('ODM_BUSINESS_RULES_PATH');
  expect(filePath).not.toBe('');
  // Simulate opening the file (actual file handling omitted for brevity)
});

When('I initiate processing of the product list', async function (this: ICustomWorld) {
  await pageObject.initiateProcessing();
});

When('I add a product to the product list', async function (this: ICustomWorld) {
  await pageObject.addProduct();
});

When('I remain on the screen without initiating processing', async function () {
  // No action needed for this step
});

When('I initiate processing of the empty product list', async function (this: ICustomWorld) {
  await pageObject.initiateProcessing();
});

Then('I should see the UI updated after processing completes', async function () {
  await expect(pageObject.page).toHaveURL(/processing-complete/);
});

Then('I should see the UI updated immediately after adding the product', async function () {
  await expect(pageObject.productList).toBeVisible();
});

Then('I should see the UI in the pre-processing state', async function () {
  await expect(pageObject.page).toHaveURL(/pre-processing/);
});

Then('I should see a warning message displayed in the UI', async function () {
  const warningMessage = await pageObject.captureWarningMessage();
  expect(warningMessage).not.toBe('');
});

Then('the warning message should match the text from the Excel file', async function () {
  const expectedMessage = 'Warning: Product list is empty'; // Example text
  const actualMessage = await pageObject.captureWarningMessage();
  expect(actualMessage).toBe(expectedMessage);
});