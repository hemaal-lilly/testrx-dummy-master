// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { OneIndiaHcpPage } from './one-india-hcp.page';
import { getCredential } from '../../../utils/common';

let pageObject: OneIndiaHcpPage;

Given('I have triggered ingestion of the prepared VEM CSV with missing required fields', async function () {
  // Simulate ingestion logic (e.g., API call or file processing)
  console.log('Triggered ingestion of VEM CSV with missing required fields.');
});

Given('I have triggered ingestion of the VEM CSV with PAN missing', async function () {
  console.log('Triggered ingestion of VEM CSV with PAN missing.');
});

Given('I have triggered ingestion of the VEM CSV with preparation time over 3 hours', async function () {
  console.log('Triggered ingestion of VEM CSV with preparation time over 3 hours.');
});

When('I open the Work Order Solution Portal', async function (this: ICustomWorld) {
  pageObject = new OneIndiaHcpPage(this.page);
  await pageObject.navigateToPortal();
});

When('I log into the Work Order Solution Portal as a CMS team user', async function (this: ICustomWorld) {
  const username = getCredential('LOGIN_USERNAME');
  const password = getCredential('LOGIN_PASSWORD');
  await pageObject.login(username, password);
});

When('I open the Work Order associated with the meeting', async function (this: ICustomWorld) {
  const workOrderId = 'test-work-order-id'; // Replace with dynamic ID if needed
  await pageObject.searchWorkOrder(workOrderId);
});

When('I should be able to enter PAN details and save the entry', async function (this: ICustomWorld) {
  const pan = 'ABCDE1234F'; // Replace with dynamic PAN if needed
  await pageObject.enterPanDetails(pan);
});

Then('I should manually confirm required approvals and proceed with Work Order creation', async function (this: ICustomWorld) {
  await pageObject.confirmApprovals();
});