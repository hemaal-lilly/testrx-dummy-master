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

Then('I should see the UI updated accordingly', async function (this: ICustomWorld) {
  // Add appropriate assertion for UI state
});

When('I trigger processing of a non-empty product list', async function (this: ICustomWorld) {
  await pageObject.triggerProcessing();
});

When('I add a product to the product list', async function (this: ICustomWorld) {
  await pageObject.addProduct();
});

Then('I should see the product added to the list', async function (this: ICustomWorld) {
  await pageObject.expectProductAdded('Sample Product');
});

Then('I should see the correct warning message displayed', async function (this: ICustomWorld) {
  const expectedMessage = 'No products available for processing.';
  await pageObject.expectWarningMessage(expectedMessage);
});

Then('I should see no indication of product list processing', async function (this: ICustomWorld) {
  await pageObject.expectNoProductListProcessed();
});