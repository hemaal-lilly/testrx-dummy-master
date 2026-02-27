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
  // Placeholder for backend validation or email setup
});

Given('a meeting submitter is associated with the VEM event', async function () {
  // Placeholder for backend validation or association setup
});

Given('the incoming VEM CSV contains all mandatory fields required for a Work Order, including PAN', async function (this: ICustomWorld) {
  await pageObject.uploadVemCsv('path/to/mandatory-fields.csv');
});

Given('the preparation time in the VEM data is {string}', async function (this: ICustomWorld, time: string) {
  await pageObject.enterPreparationTime(time);
});

Given('the CMS team enters the PAN details in the Work Order Solution Portal and initiates the next steps of Work Order generation', async function (this: ICustomWorld) {
  await pageObject.enterPanDetails('ABCDE1234F');
  await pageObject.confirmAction();
});

Given('an existing Work Order already exists', async function () {
  // Placeholder for backend validation or existing Work Order setup
});

Given('updated data for the Work Order is available in VEM', async function () {
  // Placeholder for backend validation or data setup
});

Given('the VEM history file contains a new approved VOD entry for this Work Order', async function () {
  // Placeholder for backend validation or history setup
});

When('the system validates VEM data for Work Order creation', async function () {
  // Placeholder for backend validation logic
});

When('the system validates the data after PAN entry', async function () {
  // Placeholder for backend validation logic
});

When('the CMS team manually confirms the preparation time in the Work Order Solution Portal after verifying approvals', async function (this: ICustomWorld) {
  await pageObject.confirmAction();
});

When('the system processes updates for the existing Work Order', async function () {
  // Placeholder for backend processing logic
});

Then('a Work Order is created', async function (this: ICustomWorld) {
  await pageObject.expectWorkOrderCreated();
});

Then('the Work Order details sourced from VEM are stored', async function () {
  // Placeholder for backend storage validation
});

Then('Work Order generation proceeds', async function (this: ICustomWorld) {
  await pageObject.expectWorkOrderCreated();
});

Then('no Work Order is created and no related details are stored', async function () {
  // Placeholder for backend validation
});

Then('an email is sent to the meeting submitter with a copy to the CMS team listing the specific missing fields', async function () {
  await pageObject.expectNotification('Missing mandatory fields detected');
});

Then('Work Order creation does not continue', async function () {
  await pageObject.expectNotification('Work Order creation failed');
});

Then('no updates are applied to the Work Order', async function () {
  await pageObject.expectNotification('No updates applied');
});

Then('the preparation time passes validation without a flag', async function () {
  await pageObject.expectNotification('Preparation time validated successfully');
});

Then('Work Order creation proceeds', async function (this: ICustomWorld) {
  await pageObject.expectWorkOrderCreated();
});