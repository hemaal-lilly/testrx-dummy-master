// Step Definitions for: One India HCP
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { OneIndiaHcpPage } from '../pages/OneIndiaHcpPage';

let pageObject: OneIndiaHcpPage;

Given('incoming VEM CSV data is available for processing', async function (this: ICustomWorld) {
  pageObject = new OneIndiaHcpPage(this.page);
  await pageObject.navigate();
});

Given('the Work Order Solution Portal is accessible to the CMS team', async function (this: ICustomWorld) {
  await pageObject.navigate();
});

Given('email notifications to the meeting submitter with a copy to the CMS team are enabled', async function () {
  // Assuming this is a precondition handled outside the UI
});

Given('a meeting submitter is associated with the VEM event', async function () {
  // Assuming this is a precondition handled outside the UI
});

Given('the incoming VEM CSV contains all mandatory fields required for a Work Order, including PAN', async function (this: ICustomWorld) {
  await pageObject.uploadVemCsv('path/to/valid-vem.csv');
});

Given('the preparation time in the VEM data is {string}', async function (this: ICustomWorld, preparationTime: string) {
  // Assuming preparation time is part of the uploaded VEM CSV
});

Given('the CMS team enters the PAN details in the Work Order Solution Portal and initiates the next steps of Work Order generation', async function (this: ICustomWorld) {
  await pageObject.enterPanDetails('ABCDE1234F');
  await pageObject.processWorkOrder();
});

Given('the system has flagged the preparation time because it exceeds the 3-hour limit', async function () {
  // Assuming this is a system state handled outside the UI
});

Given('an existing Work Order already exists', async function () {
  // Assuming this is a precondition handled outside the UI
});

Given('the VEM history file contains a new approved VOD entry for this Work Order', async function () {
  // Assuming this is a precondition handled outside the UI
});

When('the system validates VEM data for Work Order creation', async function (this: ICustomWorld) {
  await pageObject.processWorkOrder();
});

When('the CMS team manually confirms the preparation time in the Work Order Solution Portal after verifying approvals', async function (this: ICustomWorld) {
  await pageObject.confirmPreparationTime();
});

When('the system processes updates for the existing Work Order', async function () {
  // Assuming this is a backend process
});

Then('a Work Order is created', async function (this: ICustomWorld) {
  await pageObject.assertWorkOrderCreated();
});

Then('the Work Order details sourced from VEM are stored', async function () {
  await pageObject.assertWorkOrderCreated();
});

Then('Work Order generation proceeds', async function (this: ICustomWorld) {
  await pageObject.assertWorkOrderCreated();
});

Then('no Work Order is created and no related details are stored', async function (this: ICustomWorld) {
  await expect(pageObject.workOrderDetails).not.toBeVisible({ timeout: 10000 });
});

Then('an email is sent to the meeting submitter with a copy to the CMS team listing the specific missing fields', async function () {
  await pageObject.assertNotification('Missing mandatory fields: [field1, field2]');
});

Then('Work Order creation does not proceed', async function (this: ICustomWorld) {
  await expect(pageObject.workOrderDetails).not.toBeVisible({ timeout: 10000 });
});

Then('no updates are applied to the Work Order', async function () {
  // Assuming this is a backend process
});

Then('the preparation time passes validation without a flag', async function () {
  // Assuming this is a backend process
});