// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { OneIndiaHcpPage } from './one-india-hcp.page';

let pageObject: OneIndiaHcpPage;

Given('I have triggered ingestion of the VEM CSV with missing required fields', async function () {
  // Simulate ingestion process (mock or API call)
  console.log('Triggered ingestion of VEM CSV with missing required fields');
});

Given('I have triggered ingestion of the VEM CSV with missing PAN field', async function () {
  // Simulate ingestion process (mock or API call)
  console.log('Triggered ingestion of VEM CSV with missing PAN field');
});

Given('I have triggered ingestion of the VEM CSV with preparation time over 3 hours', async function () {
  // Simulate ingestion process (mock or API call)
  console.log('Triggered ingestion of VEM CSV with preparation time over 3 hours');
});

When('I open the Work Order Solution Portal', async function (this: ICustomWorld) {
  pageObject = new OneIndiaHcpPage(this.page);
  await pageObject.navigateToPortal();
});

When('I log into the Work Order Solution Portal as a CMS team user', async function (this: ICustomWorld) {
  pageObject = new OneIndiaHcpPage(this.page);
  await pageObject.navigateToPortal();
  // Add login steps here if required
});

When('I open the Work Order associated with the meeting', async function (this: ICustomWorld) {
  await pageObject.searchWorkOrder('meeting-work-order-id');
});

Then('I should be able to search for the Work Order corresponding to the meeting', async function (this: ICustomWorld) {
  await pageObject.expectWorkOrderVisible();
});

Then('I should be able to enter the PAN details and save them', async function (this: ICustomWorld) {
  await pageObject.enterPanDetails('ABCDE1234F');
  await pageObject.expectPanFieldToBeFilled();
});

Then('I should be able to initiate the next steps of Work Order generation', async function () {
  console.log('Initiated next steps of Work Order generation');
});

Then('I should confirm the preparation time and required approvals', async function (this: ICustomWorld) {
  await pageObject.confirmPreparationTime();
});

Then('I should proceed with Work Order creation after confirmation', async function () {
  console.log('Proceeded with Work Order creation after confirmation');
});