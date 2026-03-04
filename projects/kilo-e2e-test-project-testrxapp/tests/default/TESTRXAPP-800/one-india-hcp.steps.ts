// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { OneIndiaHcpPage } from './one-india-hcp.page';

let pageObject: OneIndiaHcpPage;

Given('I trigger ingestion of the {string}', async function (this: ICustomWorld, fileType: string) {
  // Simulate ingestion logic (mock or API call)
  console.log(`Triggering ingestion for file type: ${fileType}`);
});

Given('I log into the Work Order Solution Portal as a CMS team user', async function (this: ICustomWorld) {
  pageObject = new OneIndiaHcpPage(this.page);
  await pageObject.navigateToPortal();
});

When('I open the Work Order Solution Portal', async function (this: ICustomWorld) {
  pageObject = new OneIndiaHcpPage(this.page);
  await pageObject.navigateToPortal();
});

Then('I search for the Work Order corresponding to the meeting', async function (this: ICustomWorld) {
  const workOrderId = 'meeting123'; // Replace with dynamic ID if needed
  await pageObject.searchWorkOrder(workOrderId);
  await pageObject.expectWorkOrderVisible(workOrderId);
});

Then('I open the Work Order associated with the meeting', async function (this: ICustomWorld) {
  const workOrderId = 'meeting123'; // Replace with dynamic ID if needed
  await pageObject.searchWorkOrder(workOrderId);
  await pageObject.expectWorkOrderVisible(workOrderId);
});

Then('I enter the PAN details', async function (this: ICustomWorld) {
  const pan = 'ABCDE1234F'; // Replace with dynamic PAN if needed
  await pageObject.enterPANDetails(pan);
});

Then('I save the PAN entry', async function (this: ICustomWorld) {
  await pageObject.savePANEntry();
});

Then('I initiate the next steps of Work Order generation', async function (this: ICustomWorld) {
  console.log('Initiating next steps of Work Order generation...');
  // Simulate next steps logic (mock or API call)
});

Then('I manually confirm approvals and preparation time', async function (this: ICustomWorld) {
  await pageObject.confirmApprovals();
});

Then('I proceed with Work Order creation', async function (this: ICustomWorld) {
  console.log('Proceeding with Work Order creation...');
  // Simulate Work Order creation logic (mock or API call)
});