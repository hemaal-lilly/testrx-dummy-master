// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { CurriculumDetailReviewPageAssociatedItemsGridAssociateAnItemDialogWindowAndGridPage } from './curriculum-detail-review-page-associated-items-gri.page';

let pageObject: CurriculumDetailReviewPageAssociatedItemsGridAssociateAnItemDialogWindowAndGridPage;

Given('I am on the Curriculum Detail Review page', async function (this: ICustomWorld) {
  pageObject = new CurriculumDetailReviewPageAssociatedItemsGridAssociateAnItemDialogWindowAndGridPage(this.page);
  await pageObject.navigateToPage();
});

When('I click the "Associate an Item" button', async function () {
  await pageObject.clickAssociateItemButton();
});

Then('I should see the Associate an Item dialog window', async function () {
  await expect(pageObject.dialogWindow).toBeVisible();
});

When('I enter a valid Item ID into the "Item ID" search field', async function () {
  await pageObject.searchItemId('valid-item-id');
});

Then('I should see the search results grid populated with matching items', async function () {
  await expect(pageObject.searchResultsGrid.locator('[data-testid="grid-row"]')).toHaveCountGreaterThan(0);
});

When('I enter a non-matching Item ID into the "Item ID" search field', async function () {
  await pageObject.searchItemId('non-matching-item-id');
});

Then('I should see no results in the search results grid', async function () {
  await pageObject.expectNoResults();
});

Given('I have searched for a valid Item ID', async function () {
  await pageObject.searchItemId('valid-item-id');
});

Then('I should see correct column headers and row controls in the search results grid', async function () {
  await expect(pageObject.searchResultsGrid.locator('[data-testid="grid-header"]')).toHaveCountGreaterThan(0);
});

Given('I am a user without proper access', async function (this: ICustomWorld) {
  pageObject = new CurriculumDetailReviewPageAssociatedItemsGridAssociateAnItemDialogWindowAndGridPage(this.page);
  await pageObject.navigateToPage();
});

Then('I should not see the "Associate an Item" button', async function () {
  await pageObject.expectRestrictedAccess();
});

When('I leave the "Item ID" search field empty', async function () {
  await pageObject.validateEmptySearchField();
});

Then('I should see an appropriate error message', async function () {
  await expect(pageObject.page.locator('[data-testid="error-message"]')).toBeVisible();
});

Given('I have populated the search results grid with a valid Item ID', async function () {
  await pageObject.searchItemId('valid-item-id');
});

When('I attempt to type a non-date string into the Item Revision Date cell', async function () {
  await pageObject.validateInvalidDateInput();
});

Then('I should see a validation error for the date input', async function () {
  await expect(pageObject.page.locator('[data-testid="date-validation-error"]')).toBeVisible();
});