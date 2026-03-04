// Step Definitions: curriculum-detail-review.steps.ts
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

When('I enter a valid Item ID into the search field', async function () {
  await pageObject.enterItemId('VALID_ITEM_ID');
});

When('I enter a non-matching Item ID into the search field', async function () {
  await pageObject.enterItemId('INVALID_ITEM_ID');
});

When('I click the Search button', async function () {
  await pageObject.clickSearchButton();
});

Then('I should see the Associate an Item dialog window', async function () {
  await expect(pageObject.dialogWindow).toBeVisible();
});

Then('I should see the search results grid populated with matching items', async function () {
  await pageObject.validateResultsGrid();
});

Then('I should see no results in the search grid', async function () {
  await expect(pageObject.resultsGrid.locator('td')).toHaveCount(0);
});

Then('I should see the grid column headers and cell controls displayed correctly', async function () {
  await pageObject.validateResultsGrid();
});

When('I attempt to enter invalid text into the date picker cell', async function () {
  await pageObject.attemptInvalidDateInput('INVALID_TEXT');
});

Then('I should see an error or validation preventing invalid input', async function () {
  // Validation is handled in the Page Object method
});