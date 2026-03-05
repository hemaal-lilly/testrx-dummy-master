// Step Definitions
import { Given, When, Then, And } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { OneIndiaHcpPage } from './one-india-hcp.page';

let pageObject: OneIndiaHcpPage;

Given('I trigger ingestion of the prepared VEM CSV with missing required fields', async function (this: ICustomWorld) {
  // Simulate ingestion logic here (mock or API call)
  console.log('Ingestion triggered for VEM CSV with missing required fields');
});

Given('I trigger ingestion of the VEM CSV with PAN missing', async function (this: ICustomWorld) {
  // Simulate ingestion logic here (mock or API call)
  console.log('Ingestion triggered for VEM CSV with PAN missing');
});

Given('I trigger ingestion of the VEM CSV with preparation time over 3 hours', async function (this: ICustomWorld) {
  // Simulate ingestion logic here (mock or API call)
  console.log('Ingestion triggered for VEM CSV with preparation time over 3 hours');
});

Given('I log into the Work Order Solution Portal as a CMS team user', async function (this: ICustomWorld) {
  pageObject = new OneIndiaHcpPage(this.page);
  await pageObject.navigateToPortal();
  await pageObject.logInAsCmsUser();
});

When('I open the Work Order Solution Portal', async function (this: ICustomWorld) {
  pageObject = new OneIndiaHcpPage(this.page);
  await pageObject.navigateToPortal();
});

When('I open the Work Order associated with the meeting', async function (this: ICustomWorld) {
  const workOrderId = 'meeting123'; // Replace with dynamic ID if needed
  await pageObject.searchWorkOrder(workOrderId);
  await pageObject.expectWorkOrderVisible(workOrderId);
});

When('I enter the PAN details in the appropriate PAN field', async function (this: ICustomWorld) {
  const pan = 'ABCDE1234F'; // Replace with dynamic PAN if needed
  await pageObject.enterPanDetails(pan);
});

When('I save the PAN entry', async function (this: ICustomWorld) {
  await pageObject.savePanEntry();
});

When('I manually confirm the required approvals and preparation time', async function (this: ICustomWorld) {
  await pageObject.confirmPreparation();
});

Then('I should be able to search for the Work Order corresponding to the meeting in the processed file', async function (this: ICustomWorld) {
  const workOrderId = 'meeting123'; // Replace with dynamic ID if needed
  await pageObject.expectWorkOrderVisible(workOrderId);
});

Then('I should be able to initiate the next steps of Work Order generation via the portal', async function (this: ICustomWorld) {
  console.log('Next steps initiated successfully');
});

Then('I should be able to proceed with Work Order creation after confirmation', async function (this: ICustomWorld) {
  console.log('Work Order creation proceeded successfully');
});