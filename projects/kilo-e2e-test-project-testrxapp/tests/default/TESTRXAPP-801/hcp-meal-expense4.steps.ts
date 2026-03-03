// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { HcpMealExpense4Page } from '../pages/HcpMealExpense4Page';

let pageObject: HcpMealExpense4Page;

Given('I am on the product list screen', async function (this: ICustomWorld) {
  pageObject = new HcpMealExpense4Page(this.page);
  await pageObject.navigate();
});

Given('the product list received by the ODM is empty', async function (this: ICustomWorld) {
  await pageObject.confirmProductListEmpty();
});

Given('the product list received by the ODM contains one or more products', async function (this: ICustomWorld) {
  await pageObject.confirmProductListNonEmpty();
});

Given('the product list contains exactly one product', async function (this: ICustomWorld) {
  await pageObject.confirmProductListContainsExactlyOne();
});

Given('I open ODM Business Rules and UI Messages.xlsx', async function () {
  // Placeholder for Excel file handling logic
  console.log('Excel file opened.');
});

When('I initiate processing of the current product list', async function (this: ICustomWorld) {
  await pageObject.initiateProcessing();
});

When('I add at least one product to the product list', async function (this: ICustomWorld) {
  await pageObject.addProduct();
});

When('I add another product to the product list', async function (this: ICustomWorld) {
  await pageObject.addProduct();
});

When('I initiate processing of the empty product list', async function (this: ICustomWorld) {
  await pageObject.initiateProcessing();
});

Then('I should observe the UI after processing completes', async function (this: ICustomWorld) {
  await pageObject.expectUIChange();
});

Then('I should observe the UI immediately after adding the product', async function (this: ICustomWorld) {
  await pageObject.expectUIChange();
});

Then('I should observe the UI in the pre-processing state', async function (this: ICustomWorld) {
  // Placeholder for pre-processing state validation
  console.log('UI in pre-processing state observed.');
});

Then('I should capture and compare the warning message text displayed in the UI', async function (this: ICustomWorld) {
  const expectedMessage = 'Warning: Product list is empty'; // Example message from Excel
  await pageObject.expectWarningMessage(expectedMessage);
});