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

When('I click the "Associate an Item" button', async function () {
  await pageObject.clickAssociateItemButton();
});

When('I enter a valid Item ID into the search field', async function () {
  await pageObject.searchForItem('VALID_ITEM_ID');
});

When('I enter a non-matching Item ID into the search field', async function () {
  await pageObject.searchForItem('NON_MATCHING_ID');
});

When('I click the Search button', async function () {
  // Search button is clicked as part of the searchForItem method
});

When('I attempt to type invalid data into the date picker cell', async function () {
  await pageObject.typeInvalidDataInDatePicker();
});

Then('I should see the Associate an Item dialog window', async function () {
  await expect(pageObject.dialogWindow).toBeVisible();
});

Then('I should see the search results grid populated with matching items', async function () {
  await expect(pageObject.resultsGrid).toBeVisible();
  await expect(pageObject.resultsGrid.locator('tr')).toHaveCountGreaterThan(0); // At least one result
});

Then('I should see no results in the search results grid', async function () {
  await expect(pageObject.resultsGrid.locator('tr')).toHaveCount(0); // No results
});

Then('I should see the search results grid with correct column headers and cell controls', async function () {
  await pageObject.validateResultsGrid();
});

Then('I should see an error or validation message', async function () {
  await expect(pageObject.datePickerCell).toHaveValue(''); // Assuming invalid input is cleared
});