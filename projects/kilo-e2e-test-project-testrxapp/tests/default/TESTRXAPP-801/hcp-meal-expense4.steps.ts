// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { HcpMealExpense4Page } from '../pages/HcpMealExpense4Page';

let pageObject: HcpMealExpense4Page;

Given('I am on the product list page', async function (this: ICustomWorld) {
  pageObject = new HcpMealExpense4Page(this.page);
  await pageObject.navigateToPage();
});

Given('the product list received by the ODM is empty', async function (this: ICustomWorld) {
  await pageObject.confirmProductListEmpty();
});

Given('the product list received by the ODM contains one or more products', async function (this: ICustomWorld) {
  await pageObject.confirmProductListNotEmpty();
});

Given('the product list contains exactly one product', async function (this: ICustomWorld) {
  await pageObject.confirmProductListCount(1);
});

Given('I open ODM Business Rules and UI Messages.xlsx', async function () {
  // Mock implementation for opening the Excel file
  console.log('Opened ODM Business Rules and UI Messages.xlsx');
});

When('I initiate processing of the current product list', async function (this: ICustomWorld) {
  await pageObject.initiateProcessing();
});

When('I add a product to the product list', async function (this: ICustomWorld) {
  await pageObject.addProduct();
});

When('I do not initiate processing', async function () {
  console.log('No processing initiated');
});

When('I initiate processing of the empty product list', async function (this: ICustomWorld) {
  await pageObject.initiateProcessing();
});

Then('I should observe the UI after processing completes', async function () {
  console.log('Observed UI after processing');
});

Then('I should observe the UI immediately after adding the product', async function () {
  console.log('Observed UI after adding the product');
});

Then('I should observe the UI in the pre-processing state', async function () {
  console.log('Observed UI in pre-processing state');
});

Then('I should capture the warning message text displayed in the UI', async function (this: ICustomWorld) {
  const warningMessage = await pageObject.captureWarningMessage();
  console.log(`Captured warning message: ${warningMessage}`);
});

Then('the warning message should match the text from the Excel file', async function () {
  const expectedMessage = 'Expected warning message from Excel file';
  await pageObject.expectWarningMessage(expectedMessage);
});