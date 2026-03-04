// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { CurriculumDetailReviewPage } from './curriculum-detail-review-page';

let pageObject: CurriculumDetailReviewPage;

Given('I am on the Curriculum Detail Review page', async function (this: ICustomWorld) {
  pageObject = new CurriculumDetailReviewPage(this.page);
  await pageObject.navigateToPage();
});

When('I click the "Associate an Item" button', async function () {
  await pageObject.clickAssociateItemButton();
});

Then('I should see the Associate an Item dialog window', async function () {
  await expect(pageObject.dialogWindow).toBeVisible();
});

When('I enter a valid Item ID into the search field', async function () {
  await pageObject.searchForItem('valid-item-id'); // Replace with actual valid Item ID
});

Then('I should see the search results grid populated with matching items', async function () {
  await expect(pageObject.resultsGrid).toBeVisible();
});

When('I enter a non-matching Item ID into the search field', async function () {
  await pageObject.searchForItem('non-matching-item-id'); // Replace with actual non-matching Item ID
});

Then('I should see an empty search results grid', async function () {
  const rows = await pageObject.resultsGrid.locator('[data-testid="grid-row"]').count();
  expect(rows).toBe(0);
});

Then('I should see the correct column headers and cell controls in the search results grid', async function () {
  await pageObject.verifyGridHeadersAndControls();
});

When('I click into the Item Revision Date cell', async function () {
  await pageObject.itemRevisionDateCell.click();
});

When('I type invalid data into the date picker', async function () {
  await pageObject.typeInvalidDate();
});

Then('I should see an error or validation preventing invalid input', async function () {
  const errorMessage = await pageObject.page.locator('[data-testid="date-error-message"]');
  await expect(errorMessage).toBeVisible();
});