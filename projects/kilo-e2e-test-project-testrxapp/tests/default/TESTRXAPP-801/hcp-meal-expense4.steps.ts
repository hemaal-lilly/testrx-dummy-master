// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { HcpMealExpense4Page } from './hcp-meal-expense4.page';

let pageObject: HcpMealExpense4Page;

Given('I am on the ODM page', async function (this: ICustomWorld) {
  pageObject = new HcpMealExpense4Page(this.page);
  await pageObject.navigateToODMPage();
});

Given('the product list is empty', async function () {
  await pageObject.confirmProductListEmpty();
});

Given('the product list contains one or more products', async function () {
  await pageObject.confirmProductListNotEmpty();
});

Given('the product list contains exactly one product', async function () {
  await pageObject.confirmProductListContainsExactlyOne();
});

Given('I have opened the ODM Business Rules and UI Messages.xlsx', async function () {
  // Simulate opening the Excel file (mocked or external utility call)
});

Given('I noted the warning text for empty product lists', async function () {
  // Simulate noting down the warning text (mocked or external utility call)
});

When('I initiate processing', async function () {
  await pageObject.initiateProcessing();
});

When('I add a product using the UI', async function () {
  await pageObject.addProduct();
});

When('I do not initiate processing', async function () {
  // No action required; remain on the screen
});

When('I initiate processing of the empty product list', async function () {
  await pageObject.initiateProcessing();
});

Then('I should see the UI updated after processing completes', async function () {
  await pageObject.expectUIUpdated();
});

Then('I should see the UI updated immediately after adding the product', async function () {
  await pageObject.expectUIUpdated();
});

Then('I should see the UI in the pre-processing state', async function () {
  await expect(pageObject.page).toHaveTitle(/Pre-processing/);
});

Then('I should see the warning message displayed in the UI', async function () {
  const warningMessage = await pageObject.captureWarningMessage();
  await expect(warningMessage).toBeTruthy();
});

Then('the warning message should match the text from the Excel file', async function () {
  const expectedMessage = 'Warning: Product list is empty'; // Replace with dynamic retrieval from Excel
  await pageObject.expectWarningMessageMatches(expectedMessage);
});