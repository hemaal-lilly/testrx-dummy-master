// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { WorkOrderSolutionPage } from '../pages/WorkOrderSolutionPage';

let pageObject: WorkOrderSolutionPage;

Given('I trigger ingestion of a VEM CSV with missing required fields', async function (this: ICustomWorld) {
  // Simulate ingestion process (mock or API call)
  console.log('Triggering ingestion of VEM CSV with missing required fields...');
});

Given('I trigger ingestion of a VEM CSV with missing PAN field', async function (this: ICustomWorld) {
  // Simulate ingestion process (mock or API call)
  console.log('Triggering ingestion of VEM CSV with missing PAN field...');
});

Given('I trigger ingestion of a VEM CSV with preparation time over 3 hours', async function (this: ICustomWorld) {
  // Simulate ingestion process (mock or API call)
  console.log('Triggering ingestion of VEM CSV with preparation time over 3 hours...');
});

When('I open the Work Order Solution Portal', async function (this: ICustomWorld) {
  pageObject = new WorkOrderSolutionPage(this.page);
  await pageObject.navigateToPortal();
});

When('I log into the Work Order Solution Portal as a CMS team user', async function (this: ICustomWorld) {
  pageObject = new WorkOrderSolutionPage(this.page);
  await pageObject.navigateToPortal();
  // Simulate login (mock or API call)
  console.log('Logging in as CMS team user...');
});

Then('I should be able to search for the Work Order corresponding to the meeting', async function (this: ICustomWorld) {
  const workOrderId = '12345'; // Example Work Order ID
  await pageObject.searchWorkOrder(workOrderId);
  await pageObject.expectWorkOrderVisible(workOrderId);
});

Then('I should be able to manually enter the PAN and proceed with Work Order generation', async function (this: ICustomWorld) {
  const pan = 'ABCDE1234F'; // Example PAN
  await pageObject.enterPAN(pan);
  await pageObject.savePAN();
  console.log('PAN entered and saved successfully.');
});

Then('I should confirm the preparation time and proceed with Work Order creation', async function (this: ICustomWorld) {
  await pageObject.confirmPreparation();
  console.log('Preparation time confirmed and Work Order creation initiated.');
});