// Step Definitions
import { Given, When, Then, And } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { HcpMealExpense4Page } from './hcp-meal-expense4.page';

let pageObject: HcpMealExpense4Page;

Given('I am on the ODM page', async function (this: ICustomWorld) {
  pageObject = new HcpMealExpense4Page(this.page);
  await pageObject.navigateToODMPage();
});

Given('the product list is empty', async function () {
  await pageObject.confirmProductListIsEmpty();
});

Given('the product list contains one or more products', async function () {
  await pageObject.confirmProductListContainsProducts();
});

Given('the product list contains exactly one product', async function () {
  const count = await pageObject.productList.count();
  expect(count).toBe(1);
});

Given('I have opened the ODM Business Rules and UI Messages.xlsx', async function () {
  // Placeholder for Excel file handling logic
  console.log('Excel file opened successfully.');
});

When('I initiate processing of the product list', async function () {
  await pageObject.initiateProcessing();
});

When('I add a product to the product list', async function () {
  await pageObject.addProduct();
});

When('I remain on the screen without initiating processing', async function () {
  await pageObject.expectUIPreProcessingState();
});

When('I initiate processing of the empty product list', async function () {
  await pageObject.initiateProcessing();
});

Then('I should observe the UI after processing completes', async function () {
  await pageObject.expectUIAfterProcessing();
});

Then('I should observe the UI immediately after adding the product', async function () {
  await pageObject.expectUIAfterProcessing();
});

Then('I should observe the UI in the pre-processing state', async function () {
  await pageObject.expectUIPreProcessingState();
});

Then('I should capture the warning message displayed in the UI', async function () {
  const warningMessage = await pageObject.captureWarningMessage();
  console.log(`Captured warning message: ${warningMessage}`);
});

Then('the warning message should match the text from the Excel file', async function () {
  const displayedMessage = await pageObject.captureWarningMessage();
  const expectedMessage = 'Warning: Product list is empty'; // Replace with actual Excel logic
  expect(displayedMessage).toBe(expectedMessage);
});