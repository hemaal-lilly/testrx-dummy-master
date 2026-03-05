// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { OdmModulePage } from '../pages/OdmModulePage';

let odmPage: OdmModulePage;

Given('I am on the ODM module screen', async function (this: ICustomWorld) {
  odmPage = new OdmModulePage(this.page);
  await odmPage.navigate();
});

When('I trigger the processing of an empty product list', async function () {
  await odmPage.triggerProcessing();
});

When('I trigger the processing of a non-empty product list', async function () {
  await odmPage.triggerProcessing();
});

When('I trigger the processing of a multi-product list', async function () {
  await odmPage.triggerProcessing();
});

When('I add a product to the product list', async function () {
  await odmPage.addProduct();
});

Then('I should see the UI reflect the processing completion', async function () {
  // Add a specific assertion to validate UI state after processing
  await expect(odmPage.productList).not.toBeEmpty();
});

Then('I should see the product in the product list', async function () {
  await odmPage.expectProductInList('Sample Product');
});

Then('I should see the correct warning message displayed', async function () {
  const expectedMessage = 'No products available. Please add products to continue.';
  await odmPage.expectWarningMessage(expectedMessage);
});

Then('I should see no indication of product list processing', async function () {
  await odmPage.expectNoProcessingIndication();
});