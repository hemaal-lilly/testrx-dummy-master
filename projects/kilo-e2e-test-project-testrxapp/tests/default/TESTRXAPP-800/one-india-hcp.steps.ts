// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { WorkOrderSolutionPortalPage } from '../pages/WorkOrderSolutionPortalPage';

let pageObject: WorkOrderSolutionPortalPage;

Given('I have triggered ingestion of the VEM CSV with missing required fields', async function (this: ICustomWorld) {
  // Simulate ingestion logic (mocked or API call)
  console.log('Triggered ingestion of VEM CSV with missing required fields');
});

Given('I have triggered ingestion of the VEM CSV with missing PAN field', async function (this: ICustomWorld) {
  // Simulate ingestion logic (mocked or API call)
  console.log('Triggered ingestion of VEM CSV with missing PAN field');
});

Given('I have triggered ingestion of the VEM CSV with preparation time over 3 hours', async function (this: ICustomWorld) {
  // Simulate ingestion logic (mocked or API call)
  console.log('Triggered ingestion of VEM CSV with preparation time over 3 hours');
});

When('I open the Work Order Solution Portal', async function (this: ICustomWorld) {
  pageObject = new WorkOrderSolutionPortalPage(this.page);
  await pageObject.navigate();
});

When('I log into the Work Order Solution Portal as a CMS team user', async function (this: ICustomWorld) {
  pageObject = new WorkOrderSolutionPortalPage(this.page);
  await pageObject.navigate();
  // Simulate login logic if necessary
  console.log('Logged in as CMS team user');
});

When('I open the Work Order associated with the meeting', async function (this: ICustomWorld) {
  await pageObject.searchWorkOrder('meeting-id');
  await pageObject.openWorkOrder();
});

Then('I should see the Work Order corresponding to the meeting in the processed file', async function (this: ICustomWorld) {
  await pageObject.expectWorkOrderVisible();
});

Then('I should be able to enter the PAN details and save successfully', async function (this: ICustomWorld) {
  await pageObject.enterPAN('ABCDE1234F');
  await pageObject.savePAN();
  await pageObject.expectPANSaved();
});

Then('I should manually confirm approvals and proceed with Work Order creation', async function (this: ICustomWorld) {
  await pageObject.confirmApprovals();
  console.log('Confirmed approvals and proceeded with Work Order creation');
});