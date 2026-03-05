// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { OneIndiaHcpPage } from './one-india-hcp.page';

let pageObject: OneIndiaHcpPage;

Given('I have triggered ingestion of the prepared VEM CSV with missing required fields', async function () {
  // Simulate ingestion process (e.g., API call or file upload)
  console.log('Triggered ingestion of VEM CSV with missing required fields');
});

Given('I have triggered ingestion of the VEM CSV with PAN missing', async function () {
  // Simulate ingestion process
  console.log('Triggered ingestion of VEM CSV with PAN missing');
});

Given('I have triggered ingestion of the VEM CSV with preparation time over 3 hours', async function () {
  // Simulate ingestion process
  console.log('Triggered ingestion of VEM CSV with preparation time over 3 hours');
});

When('I open the Work Order Solution Portal', async function (this: ICustomWorld) {
  pageObject = new OneIndiaHcpPage(this.page);
  await pageObject.navigateToPortal();
});

When('I log into the Work Order Solution Portal as a CMS team user', async function (this: ICustomWorld) {
  pageObject = new OneIndiaHcpPage(this.page);
  await pageObject.navigateToPortal();
  // Simulate login (credentials fetched from environment variables)
  const username = process.env.TESTRX_CRED_LOGIN_USERNAME || '';
  const password = process.env.TESTRX_CRED_LOGIN_PASSWORD || '';
  await this.page.fill('[data-testid="username"]', username);
  await this.page.fill('[data-testid="password"]', password);
  await this.page.click('[data-testid="login-button"]');
  await this.page.waitForLoadState('networkidle');
});

When('I open the Work Order associated with the meeting', async function () {
  await pageObject.openWorkOrder();
});

When('I should manually confirm the required approvals and proceed with Work Order creation', async function () {
  await pageObject.confirmApprovals();
});

Then('I should be able to search for the Work Order corresponding to the meeting in the processed file', async function () {
  await pageObject.searchWorkOrder('meeting-id-123');
  await pageObject.expectWorkOrderVisible();
});

Then('I should be able to enter the PAN details and save the entry', async function () {
  await pageObject.enterPanDetails('ABCDE1234F');
  await pageObject.savePanDetails();
  await pageObject.expectPanSaved();
});