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
  await pageObject.clickAssociateItemButton();
});

Then('I should see the Associate an Item dialog window', async function (this: ICustomWorld) {
  await expect(pageObject.dialogWindow).toBeVisible();
});

Given('I am on the Associate an Item dialog window', async function (this: ICustomWorld) {
  await pageObject.clickAssociateItemButton();
});

When('I enter a valid Item ID and click the Search button', async function (this: ICustomWorld) {
  await pageObject.searchForItem('valid-item-id');
});

Then('I should see the search results grid populated with matching items', async function (this: ICustomWorld) {
  await expect(pageObject.searchResultsGrid).toBeVisible();
});

When('I enter a non-matching Item ID and click the Search button', async function (this: ICustomWorld) {
  await pageObject.searchForItem('non-matching-item-id');
});

Then('I should see no results in the search results grid', async function (this: ICustomWorld) {
  const gridContent = await pageObject.searchResultsGrid.textContent();
  expect(gridContent).toBe('');
});

When('I search for a valid Item ID', async function (this: ICustomWorld) {
  await pageObject.searchForItem('valid-item-id');
});

Then('I should see the correct column headers and cell controls in the search results grid', async function (this: ICustomWorld) {
  await pageObject.validateSearchResultsGrid();
});

Given('I have populated the search results grid with a valid Item ID', async function (this: ICustomWorld) {
  await pageObject.searchForItem('valid-item-id');
});

When('I enter invalid input into the Item Revision Date cell', async function (this: ICustomWorld) {
  await pageObject.enterInvalidDateInRevisionCell();
});

Then('I should see an error or validation preventing the invalid input', async function (this: ICustomWorld) {
  const errorMessage = await pageObject.page.locator('[data-testid="date-error-message"]').textContent();
  expect(errorMessage).toBe('Invalid date format');
});