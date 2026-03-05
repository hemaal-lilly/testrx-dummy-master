// Step Definitions for: One India HCP
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { OneIndiaHcpPage } from '../pages/OneIndiaHcpPage';

let pageObject: OneIndiaHcpPage;

Given('incoming VEM CSV data is available for processing', async function (this: ICustomWorld) {
  pageObject = new OneIndiaHcpPage(this.page);
  await pageObject.navigate();
  await pageObject.uploadVemCsv('path/to/vem-data.csv');
});

Given('the Work Order Solution Portal is accessible to the CMS team', async function (this: ICustomWorld) {
  pageObject = new OneIndiaHcpPage(this.page);
  await pageObject.navigate();
});

Given('the CMS team enters the PAN details in the Work Order Solution Portal and initiates the next steps of Work Order generation', async function (this: ICustomWorld) {
  await pageObject.enterPanDetails('ABCDE1234F');
  await pageObject.validateVemData();
});

Given('the CMS team manually confirms the preparation time in the Work Order Solution Portal after verifying approvals', async function (this: ICustomWorld) {
  await pageObject.confirmPreparationTime();
});

When('the system validates VEM data for Work Order creation', async function (this: ICustomWorld) {
  await pageObject.validateVemData();
});

When('the system validates the data after PAN entry', async function (this: ICustomWorld) {
  await pageObject.validateVemData();
});

When('the system processes updates for the existing Work Order', async function (this: ICustomWorld) {
  await pageObject.validateVemData();
});

When('the system evaluates readiness for Work Order creation', async function (this: ICustomWorld) {
  await pageObject.validateVemData();
});

Then('a Work Order is created', async function (this: ICustomWorld) {
  await pageObject.expectWorkOrderCreated();
});

Then('the Work Order details sourced from VEM are stored', async function (this: ICustomWorld) {
  await pageObject.expectWorkOrderCreated();
});

Then('no Work Order is created and no related details are stored', async function (this: ICustomWorld) {
  await expect(pageObject.workOrderDetails).not.toBeVisible({ timeout: 5000 });
});

Then('an email is sent to the meeting submitter with a copy to the CMS team listing the specific missing fields', async function (this: ICustomWorld) {
  await pageObject.expectNotificationMessage('Missing mandatory fields: [list of fields]');
});

Then('Work Order generation does not proceed', async function (this: ICustomWorld) {
  await expect(pageObject.workOrderDetails).not.toBeVisible({ timeout: 5000 });
});

Then('Work Order creation does not continue', async function (this: ICustomWorld) {
  await expect(pageObject.workOrderDetails).not.toBeVisible({ timeout: 5000 });
});

Then('the preparation time passes validation without a flag', async function (this: ICustomWorld) {
  await pageObject.expectNotificationMessage('Preparation time validated successfully.');
});

Then('Work Order creation proceeds', async function (this: ICustomWorld) {
  await pageObject.expectWorkOrderCreated();
});