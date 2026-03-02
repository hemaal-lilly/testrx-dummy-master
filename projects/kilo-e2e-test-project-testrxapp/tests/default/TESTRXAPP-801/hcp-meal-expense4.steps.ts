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

Then('I should observe the UI immediately after processing completes', async function (this: ICustomWorld) {
  await expect(pageObject.productList).toBeVisible();
});

When('I trigger processing of a non-empty product list', async function (this: ICustomWorld) {
  await pageObject.triggerProcessing();
});

When('I add a product to the product list', async function (this: ICustomWorld) {
  await pageObject.addProduct();
});

Then('I should confirm the product has been added', async function (this: ICustomWorld) {
  await pageObject.expectProductAdded();
});

Then('I should see the correct warning message', async function (this: ICustomWorld) {
  const expectedMessage = 'No products available. Please add products.';
  await pageObject.expectWarningMessage(expectedMessage);
});

Then('I should confirm no product list has been processed', async function (this: ICustomWorld) {
  await pageObject.expectNoProcessing();
});