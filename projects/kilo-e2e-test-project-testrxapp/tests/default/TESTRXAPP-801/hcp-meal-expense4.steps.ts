// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { HcpMealExpense4Page } from '../pages/HcpMealExpense4Page';

let pageObject: HcpMealExpense4Page;

Given('I am on the product list page', async function (this: ICustomWorld) {
  pageObject = new HcpMealExpense4Page(this.page);
  await pageObject.navigate();
});

Given('the product list received by the ODM is empty', async function (this: ICustomWorld) {
  await pageObject.confirmProductListIsEmpty();
});

Given('the product list received by the ODM contains one or more products', async function (this: ICustomWorld) {
  await pageObject.confirmProductListIsNotEmpty();
});

Given('I open ODM Business Rules and UI Messages.xlsx', async function () {
  // Simulate opening the Excel file (mocked for test purposes)
  console.log('Opened ODM Business Rules and UI Messages.xlsx');
});

When('I add a product to the product list', async function (this: ICustomWorld) {
  await pageObject.addProduct();
});

When('I initiate processing of the current product list', async function (this: ICustomWorld) {
  await pageObject.initiateProcessing();
});

When('I do not initiate processing', async function () {
  console.log('Processing not initiated');
});

When('I initiate processing of the empty product list', async function (this: ICustomWorld) {
  await pageObject.initiateProcessing();
});

Then('I should observe the UI after processing completes', async function (this: ICustomWorld) {
  // Add UI validation logic here
  console.log('Observed UI after processing');
});

Then('I should observe the UI immediately after adding the product', async function (this: ICustomWorld) {
  // Add UI validation logic here
  console.log('Observed UI after adding the product');
});

Then('I should observe the UI in the pre-processing state', async function () {
  // Add UI validation logic here
  console.log('Observed UI in pre-processing state');
});

Then('I should capture and compare the warning message text', async function (this: ICustomWorld) {
  const expectedMessage = 'Warning: Product list is empty'; // Mocked expected message
  await pageObject.expectWarningMessage(expectedMessage);
});