// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { WorkOrderSolutionPortalPage } from '../pages/WorkOrderSolutionPortalPage';

let pageObject: WorkOrderSolutionPortalPage;

Given('I have triggered ingestion of a VEM CSV with missing required fields', async function (this: ICustomWorld) {
  // Simulate ingestion process (mock or API call)
  console.log('Ingestion triggered for VEM CSV with missing required fields');
});

Given('I have triggered ingestion of a VEM CSV with missing PAN field', async function (this: ICustomWorld) {
  // Simulate ingestion process (mock or API call)
  console.log('Ingestion triggered for VEM CSV with missing PAN field');
});

Given('I have triggered ingestion of a VEM CSV with preparation time over 3 hours', async function (this: ICustomWorld) {
  // Simulate ingestion process (mock or API call)
  console.log('Ingestion triggered for VEM CSV with preparation time over 3 hours');
});

When('I open the Work Order Solution Portal', async function (this: ICustomWorld) {
  pageObject = new WorkOrderSolutionPortalPage(this.page);
  await pageObject.navigate();
});

When('I log into the Work Order Solution Portal as a CMS team user', async function (this: ICustomWorld) {
  pageObject = new WorkOrderSolutionPortalPage(this.page);
  await pageObject.navigate();
  // Add login logic here if required
});

When('I open the Work Order associated with the meeting', async function (this: ICustomWorld) {
  await pageObject.searchWorkOrder('meeting-id'); // Replace 'meeting-id' with actual ID
  await pageObject.openWorkOrder();
});

When('I enter the PAN details and save', async function (this: ICustomWorld) {
  await pageObject.enterPanDetails('ABCDE1234F'); // Replace with actual PAN
});

When('I confirm the preparation time and approvals', async function (this: ICustomWorld) {
  await pageObject.confirmPreparation();
});

Then('I should see the Work Order corresponding to the meeting in the processed file', async function (this: ICustomWorld) {
  await pageObject.expectWorkOrderVisible();
});

Then('I should be able to proceed with Work Order generation', async function (this: ICustomWorld) {
  await pageObject.expectPanSaved();
});