// Step Definitions for: One India HCP
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { OneIndiaHcpPage } from '../pages/OneIndiaHcpPage';

let pageObject: OneIndiaHcpPage;

Given('incoming VEM CSV data is available for processing', async function (this: ICustomWorld) {
  pageObject = new OneIndiaHcpPage(this.page);
  await pageObject.navigate();
  await pageObject.uploadVemCsv('path/to/vem.csv');
});

Given('the Work Order Solution Portal is accessible to the CMS team', async function (this: ICustomWorld) {
  await pageObject.navigate();
});

Given('email notifications to the meeting submitter with a copy to the CMS team are enabled', async function (this: ICustomWorld) {
  // No specific UI action required for this step
});

Given('a meeting submitter is associated with the VEM event', async function (this: ICustomWorld) {
  // No specific UI action required for this step
});

Given('the incoming VEM CSV contains all mandatory fields required for a Work Order, including PAN', async function (this: ICustomWorld) {
  await pageObject.uploadVemCsv('path/to/vem.csv');
});

Given('the preparation time in the VEM data is {string}', async function (this: ICustomWorld, time: string) {
  await pageObject.enterPreparationTime(time);
});

When('the system validates VEM data for Work Order creation', async function (this: ICustomWorld) {
  await pageObject.submitWorkOrder();
});

Then('a Work Order is created', async function (this: ICustomWorld) {
  await pageObject.expectWorkOrderCreated();
});

Then('the Work Order details sourced from VEM are stored', async function (this: ICustomWorld) {
  await pageObject.expectWorkOrderCreated();
});

Given('the incoming VEM CSV contains all mandatory fields required for a Work Order except PAN', async function (this: ICustomWorld) {
  await pageObject.uploadVemCsv('path/to/vem.csv');
});

Given('the CMS team enters the PAN details in the Work Order Solution Portal and initiates the next steps of Work Order generation', async function (this: ICustomWorld) {
  await pageObject.enterPan('ABCDE1234F');
  await pageObject.submitWorkOrder();
});

When('the system validates the data after PAN entry', async function (this: ICustomWorld) {
  await pageObject.submitWorkOrder();
});

Then('Work Order generation proceeds', async function (this: ICustomWorld) {
  await pageObject.expectWorkOrderCreated();
});

Given('the preparation time in the VEM data is {string}', async function (this: ICustomWorld, time: string) {
  await pageObject.enterPreparationTime(time);
});

Given('the system has flagged the preparation time because it exceeds the 3-hour limit', async function (this: ICustomWorld) {
  // No specific UI action required for this step
});

When('the CMS team manually confirms the preparation time in the Work Order Solution Portal after verifying approvals', async function (this: ICustomWorld) {
  await pageObject.confirmPreparationTime();
});

Then('Work Order creation continues', async function (this: ICustomWorld) {
  await pageObject.expectWorkOrderCreated();
});