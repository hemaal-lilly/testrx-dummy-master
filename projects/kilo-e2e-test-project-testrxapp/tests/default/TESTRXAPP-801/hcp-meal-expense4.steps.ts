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

Given('the product list contains zero products', async function (this: ICustomWorld) {
  await pageObject.expectProductCount(0);
});

Given('the product list contains one or more products', async function (this: ICustomWorld) {
  const productCount = await pageObject.getProductCount();
  await expect(productCount).toBeGreaterThan(0);
});

Given('the product list contains exactly one product', async function (this: ICustomWorld) {
  await pageObject.expectProductCount(1);
});

Given('I have opened the ODM Business Rules and UI Messages.xlsx', async function () {
  // Simulate opening the Excel file (mocked for this example)
});

Given('I have noted the warning text for empty product lists', async function () {
  // Simulate noting the warning text (mocked for this example)
});

When('I initiate processing of the current product list', async function (this: ICustomWorld) {
  await pageObject.processProductList();
});

When('I add a product to the product list', async function (this: ICustomWorld) {
  await pageObject.addProduct();
});

When('I add another product to the product list', async function (this: ICustomWorld) {
  await pageObject.addProduct();
});

When('I remain on the screen without initiating processing', async function () {
  // No action needed; remain idle
});

When('I initiate processing of the empty product list', async function (this: ICustomWorld) {
  await pageObject.processProductList();
});

Then('I should see the UI updated after processing completes', async function () {
  // Add assertions for UI updates after processing (mocked for this example)
});

Then('I should see the UI updated immediately after adding the product', async function () {
  // Add assertions for UI updates after adding the product (mocked for this example)
});

Then('I should see the UI in the pre-processing state', async function () {
  // Add assertions for pre-processing state (mocked for this example)
});

Then('I should see the warning message displayed in the UI', async function (this: ICustomWorld) {
  const warningMessage = await pageObject.getWarningMessageText();
  await expect(warningMessage).toBeTruthy();
});

Then('the warning message should match the text from the Excel file', async function (this: ICustomWorld) {
  const warningMessage = await pageObject.getWarningMessageText();
  const expectedMessage = 'Warning: Product list is empty'; // Mocked value
  await pageObject.expectWarningMessage(expectedMessage);
});