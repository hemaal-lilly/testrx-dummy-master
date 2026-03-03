// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { CurriculumDetailReviewPage } from '../pages/CurriculumDetailReviewPage';

let pageObject: CurriculumDetailReviewPage;

Given('I am on the Curriculum Detail Review page', async function (this: ICustomWorld) {
  pageObject = new CurriculumDetailReviewPage(this.page);
  await pageObject.navigate();
});

When('I click the "Associate an Item" button', async function (this: ICustomWorld) {
  await pageObject.clickAssociateItemButton();
});

Then('I should see the Associate an Item dialog window', async function (this: ICustomWorld) {
  await expect(pageObject.dialogWindow).toBeVisible();
});

When('I enter a valid Item ID into the search field', async function (this: ICustomWorld) {
  await pageObject.searchItemId('valid-item-id');
});

Then('I should see the search results grid populated with matching items', async function (this: ICustomWorld) {
  await expect(pageObject.resultsGrid).toBeVisible();
});

When('I enter a non-matching Item ID into the search field', async function (this: ICustomWorld) {
  await pageObject.searchItemId('non-matching-item-id');
});

Then('I should see no results displayed in the grid', async function (this: ICustomWorld) {
  const gridRows = await pageObject.resultsGrid.locator('[data-testid="grid-row"]').count();
  expect(gridRows).toBe(0);
});

Then('I should see the grid with correct column headers and cell controls', async function (this: ICustomWorld) {
  await pageObject.validateGrid();
});

When('I click into the Item Revision Date cell', async function (this: ICustomWorld) {
  await pageObject.itemRevisionDateCell.click();
});

When('I attempt to type a non-date string into the date input', async function (this: ICustomWorld) {
  await pageObject.attemptInvalidDateInput();
});

Then('I should see an error or validation preventing invalid input', async function (this: ICustomWorld) {
  const errorMessage = await pageObject.page.locator('[data-testid="date-error-message"]');
  await expect(errorMessage).toBeVisible();
});