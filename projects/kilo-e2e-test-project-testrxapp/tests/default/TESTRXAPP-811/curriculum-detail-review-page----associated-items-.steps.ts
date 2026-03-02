// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { CurriculumDetailReviewPage } from '../pages/CurriculumDetailReviewPage';

let pageObject: CurriculumDetailReviewPage;

Given('I am on the Curriculum Detail Review page', async function (this: ICustomWorld) {
  pageObject = new CurriculumDetailReviewPage(this.page);
  await pageObject.navigateToPage();
});

When('I click the "Associate an Item" button', async function (this: ICustomWorld) {
  await pageObject.openAssociateItemDialog();
});

Then('I should see the Associate an Item dialog window', async function (this: ICustomWorld) {
  await expect(pageObject.dialogWindow).toBeVisible();
});

Given('I am on the Associate an Item dialog window', async function (this: ICustomWorld) {
  await pageObject.openAssociateItemDialog();
});

When('I enter a valid Item ID into the search field and click Search', async function (this: ICustomWorld) {
  await pageObject.searchForItem('valid-item-id');
});

Then('I should see the search results grid populated with matching items', async function (this: ICustomWorld) {
  await expect(pageObject.searchResultsGrid).toBeVisible();
});

When('I enter a non-matching Item ID into the search field and click Search', async function (this: ICustomWorld) {
  await pageObject.searchForItem('non-matching-item-id');
});

Then('I should see no results in the search results grid', async function (this: ICustomWorld) {
  const rows = await pageObject.searchResultsGrid.locator('tbody tr').count();
  expect(rows).toBe(0);
});

Given('I have searched for a valid Item ID', async function (this: ICustomWorld) {
  await pageObject.searchForItem('valid-item-id');
});

Then('I should see correct column headers and cell controls in the search results grid', async function (this: ICustomWorld) {
  await pageObject.validateSearchResults();
});

Given('I have populated the search results grid', async function (this: ICustomWorld) {
  await pageObject.searchForItem('valid-item-id');
});

When('I attempt to type non-date characters into the Item Revision Date cell', async function (this: ICustomWorld) {
  await pageObject.attemptInvalidDateInput();
});

Then('I should see an error or validation preventing invalid input', async function (this: ICustomWorld) {
  const errorMessage = await pageObject.page.locator('[data-testid="date-error-message"]');
  await expect(errorMessage).toBeVisible();
});