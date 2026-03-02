// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { OdmModulePage } from '../pages/OdmModulePage';

let pageObject: OdmModulePage;

Given('I am on the ODM module screen', async function (this: ICustomWorld) {
  pageObject = new OdmModulePage(this.page);
  await pageObject.navigate();
});

When('I trigger processing of an empty product list', async function (this: ICustomWorld) {
  await pageObject.triggerProcessing();
});

Then('I should observe the UI after processing completes', async function (this: ICustomWorld) {
  // Add specific UI assertions here
});

When('I add a product to the product list', async function (this: ICustomWorld) {
  await pageObject.addProduct();
});

Then('the product should appear in the list', async function (this: ICustomWorld) {
  await pageObject.expectProductInList('Sample Product');
});

Then('I should see a warning message', async function (this: ICustomWorld) {
  await pageObject.expectWarningMessage('Empty product list warning');
});

Then('the warning message should match the entry in the Excel file', async function (this: ICustomWorld) {
  const expectedMessage = 'Empty product list warning'; // Replace with actual Excel lookup logic
  await pageObject.expectWarningMessage(expectedMessage);
});

Then('I should confirm no product list has been processed', async function (this: ICustomWorld) {
  await pageObject.expectNoProcessing();
});

Then('I should inspect the UI without initiating any actions', async function (this: ICustomWorld) {
  // Add specific UI inspection logic here
});

When('I trigger processing of a multi-product list', async function (this: ICustomWorld) {
  await pageObject.triggerProcessing();
});