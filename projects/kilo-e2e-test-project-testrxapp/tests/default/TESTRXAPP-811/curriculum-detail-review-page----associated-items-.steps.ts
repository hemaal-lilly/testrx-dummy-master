// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { CurriculumDetailReviewPageAssociatedItemsGridAssociateAnItemDialogWindowAndGridPage } from './curriculum-detail-review-page-associated-items-grid.page';

let pageObject: CurriculumDetailReviewPageAssociatedItemsGridAssociateAnItemDialogWindowAndGridPage;

Given('I am on the Curriculum Detail Review page', async function (this: ICustomWorld) {
  pageObject = new CurriculumDetailReviewPageAssociatedItemsGridAssociateAnItemDialogWindowAndGridPage(this.page);
  await pageObject.navigate();
});

Given('I am on the Curriculum Detail Review page as a user without proper access', async function (this: ICustomWorld) {
  pageObject = new CurriculumDetailReviewPageAssociatedItemsGridAssociateAnItemDialogWindowAndGridPage(this.page);
  await pageObject.navigate();
  await expect(pageObject.associateItemButton).not.toBeVisible();
});

When('I click the "Associate an Item" button', async function (this: ICustomWorld) {
  await pageObject.clickAssociateItemButton();
});

When('I enter a valid Item ID in the search field', async function (this: ICustomWorld) {
  await pageObject.enterItemId('VALID_ITEM_ID');
});

When('I enter a non-matching Item ID in the search field', async function (this: ICustomWorld) {
  await pageObject.enterItemId('INVALID_ITEM_ID');
});

When('I click the Search button', async function (this: ICustomWorld) {
  await pageObject.clickSearchButton();
});

When('I click the Search button with an empty Item ID field', async function (this: ICustomWorld) {
  await pageObject.clickSearchButton();
  await pageObject.expectValidationError();
});

When('I attempt to type invalid data into the Item Revision Date field', async function (this: ICustomWorld) {
  await pageObject.enterInvalidDateInRevisionCell();
});

Then('I should see the dialog window appear', async function (this: ICustomWorld) {
  await expect(pageObject.dialogWindow).toBeVisible();
});

Then('I should see the action buttons displayed in the dialog', async function (this: ICustomWorld) {
  const actionButtons = pageObject.dialogWindow.locator('[data-testid="action-buttons"]');
  await expect(actionButtons).toBeVisible();
});

Then('I should see the search results grid populated', async function (this: ICustomWorld) {
  await pageObject.validateResultsGrid();
});

Then('I should see no results in the search results grid', async function (this: ICustomWorld) {
  await pageObject.expectNoResults();
});

Then('I should see an appropriate error or validation message', async function (this: ICustomWorld) {
  await pageObject.expectValidationError();
});