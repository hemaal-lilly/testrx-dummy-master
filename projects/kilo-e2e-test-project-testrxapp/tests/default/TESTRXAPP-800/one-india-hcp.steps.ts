// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { WorkOrderSolutionPortalPage } from '../pages/WorkOrderSolutionPortalPage';

let pageObject: WorkOrderSolutionPortalPage;

Given('I trigger ingestion of the VEM CSV with missing required fields', async function (this: ICustomWorld) {
  // Simulate ingestion process (mocked or external API call)
  console.log('Triggering ingestion of VEM CSV with missing required fields...');
});

Given('I trigger ingestion of the VEM CSV with PAN missing', async function (this: ICustomWorld) {
  // Simulate ingestion process (mocked or external API call)
  console.log('Triggering ingestion of VEM CSV with PAN missing...');
});

Given('I trigger ingestion of the VEM CSV with preparation time over 3 hours', async function (this: ICustomWorld) {
  // Simulate ingestion process (mocked or external API call)
  console.log('Triggering ingestion of VEM CSV with preparation time over 3 hours...');
});

When('I open the Work Order Solution Portal', async function (this: ICustomWorld) {
  pageObject = new WorkOrderSolutionPortalPage(this.page);
  await pageObject.navigate();
});

When('I log into the Work Order Solution Portal as a CMS team user', async function (this: ICustomWorld) {
  pageObject = new WorkOrderSolutionPortalPage(this.page);
  await pageObject.navigate();
  // Simulate login process (mocked or external API call)
  console.log('Logging in as CMS team user...');
});

Then('I should see the corresponding Work Order for the meeting', async function (this: ICustomWorld) {
  await pageObject.searchWorkOrder('meeting-id');
  await pageObject.expectWorkOrderVisible();
});

Then('I should be able to enter PAN details and save the Work Order', async function (this: ICustomWorld) {
  await pageObject.openWorkOrder();
  await pageObject.enterPanDetails('ABCDE1234F');
  await pageObject.saveWorkOrder();
  await pageObject.expectPanFieldEditable();
});

Then('I should confirm approvals and proceed with Work Order creation', async function (this: ICustomWorld) {
  await pageObject.openWorkOrder();
  await pageObject.confirmApprovals();
});