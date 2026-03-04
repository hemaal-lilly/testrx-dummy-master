// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { CurriculumDetailReviewPageAssociatedItemsGridAssociateAnItemDialogWindowAndGridPage } from './curriculum-detail-review-page-associated-items-gri.page';

let pageObject: CurriculumDetailReviewPageAssociatedItemsGridAssociateAnItemDialogWindowAndGridPage;

Given('I am on the Curriculum Detail Review page', async function (this: ICustomWorld) {
  pageObject = new CurriculumDetailReviewPageAssociatedItemsGridAssociateAnItemDialogWindowAndGridPage(this.page);
  await pageObject.navigate();
});

Given('I am on the Curriculum Detail Review page as a user without proper access', async function (this: ICustomWorld) {
  pageObject = new CurriculumDetailReviewPageAssociatedItemsGridAssociateAnItemDialogWindowAndGridPage(this.page);
  await pageObject.navigate();
  await pageObject.validateNoAccess();
});

When('I click the "Associate an Item" button', async function (this: ICustomWorld) {
  await pageObject.clickAssociateItemButton();
});

When('I enter a valid Item ID in the search field', async function (this: ICustomWorld) {
  await pageObject.enterItemId('valid-item-id');
});

When('I enter a non-matching Item ID in the search field', async function (this: ICustomWorld) {
  await pageObject.enterItemId('non-matching-item-id');
});

When('I leave the search field empty', async function (this: ICustomWorld) {
  await pageObject.enterItemId('');
});

When('I click the Search button', async function (this: ICustomWorld) {
  await pageObject.clickSearchButton();
});

When('I attempt to type a non-date string into the Item Revision Date cell', async function (this: ICustomWorld) {
  await pageObject.attemptInvalidDateInput();
});

Then('I should see the Associate an Item dialog window', async function (this: ICustomWorld) {
  await expect(pageObject.dialogWindow).toBeVisible();
});

Then('I should see the search results grid populated with matching items', async function (this: ICustomWorld) {
  await pageObject.validateSearchResults();
});

Then('I should see no results in the search results grid', async function (this: ICustomWorld) {
  await expect(pageObject.searchResultsGrid.locator('tbody tr')).toHaveCount(0);
});

Then('I should see the grid headers and controls for the displayed row', async function (this: ICustomWorld) {
  await pageObject.validateSearchResults();
});

Then('I should see an appropriate validation message', async function (this: ICustomWorld) {
  await pageObject.validateEmptySearchField();
});