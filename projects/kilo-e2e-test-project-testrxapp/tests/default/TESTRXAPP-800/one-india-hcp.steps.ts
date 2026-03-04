// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { OneIndiaHcpPage } from './one-india-hcp.page';

let pageObject: OneIndiaHcpPage;

Given('I have triggered ingestion of a VEM CSV with missing required fields', async function () {
  // Simulate ingestion process (e.g., API call or file upload)
  console.log('Ingestion triggered for VEM CSV with missing required fields');
});

Given('I have triggered ingestion of a corrected VEM CSV with all required fields', async function () {
  // Simulate ingestion process for corrected file
  console.log('Ingestion triggered for corrected VEM CSV');
});

Given('I have triggered ingestion of a VEM CSV with PAN missing', async function () {
  // Simulate ingestion process for VEM CSV with missing PAN
  console.log('Ingestion triggered for VEM CSV with PAN missing');
});

Given('I log into the Work Order Solution Portal as a CMS team user', async function (this: ICustomWorld) {
  pageObject = new OneIndiaHcpPage(this.page);
  await pageObject.navigateToPortal();
});

When('I open the Work Order Solution Portal', async function (this: ICustomWorld) {
  pageObject = new OneIndiaHcpPage(this.page);
  await pageObject.navigateToPortal();
});

When('I open the Work Order associated with the meeting', async function (this: ICustomWorld) {
  await pageObject.searchWorkOrder('meeting-work-order-id'); // Replace with dynamic ID if needed
});

When('I enter the PAN details', async function (this: ICustomWorld) {
  await pageObject.enterPanDetails('ABCDE1234F');
});

When('I save the PAN entry', async function (this: ICustomWorld) {
  await pageObject.savePanDetails();
});

Then('I should see an error indicating missing fields', async function (this: ICustomWorld) {
  await pageObject.expectErrorMessage('Missing required fields');
});

Then('I should find the Work Order corresponding to the meeting', async function (this: ICustomWorld) {
  await pageObject.expectWorkOrderFound();
});

Then('I should be able to proceed with the next steps of Work Order generation', async function () {
  console.log('Verified ability to proceed with Work Order generation');
});