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

When('I trigger the processing of an empty product list', async function (this: ICustomWorld) {
  await odmPage.triggerProcessing();
});

When('I trigger the processing of a non-empty product list', async function (this: ICustomWorld) {
  await odmPage.triggerProcessing();
});

When('I add a product to the product list', async function (this: ICustomWorld) {
  await odmPage.addProduct();
});

When('I trigger the processing of a multi-product list', async function (this: ICustomWorld) {
  await odmPage.triggerProcessing();
});

Then('I should see the UI updated accordingly', async function (this: ICustomWorld) {
  await odmPage.expectUiUpdated();
});

Then('I should see the product added to the list', async function (this: ICustomWorld) {
  await odmPage.expectProductAdded();
});

Then('I should see the correct warning message displayed', async function (this: ICustomWorld) {
  const expectedMessage = 'No products available'; // Replace with actual message from Excel
  await odmPage.expectWarningMessage(expectedMessage);
});

Then('I should see no product list processing indication', async function (this: ICustomWorld) {
  await odmPage.expectNoProcessing();
});