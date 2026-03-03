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

Given('I am on the Curriculum Detail Review page as an unauthorized user', async function (this: ICustomWorld) {
  pageObject = new CurriculumDetailReviewPage(this.page);
  await pageObject.navigateToPage();
  await pageObject.validateNoAssociateItemButton();
});

When('I click the "Associate an Item" button', async function (this: ICustomWorld) {
  await pageObject.clickAssociateItemButton();
});

When('I enter a valid Item ID into the search field', async function (this: ICustomWorld) {
  await pageObject.enterItemId('VALID_ITEM_ID');
});

When('I enter a non-matching Item ID into the search field', async function (this: ICustomWorld) {
  await pageObject.enterItemId('INVALID_ITEM_ID');
});

When('I ensure the search field is empty', async function (this: ICustomWorld) {
  await pageObject.enterItemId('');
});

When('I click the Search button', async function (this: ICustomWorld) {
  await pageObject.clickSearchButton();
});

When('I attempt to enter invalid data into the date picker', async function (this: ICustomWorld) {
  await pageObject.enterInvalidDate();
});

Then('I should see the Associate an Item dialog window', async function (this: ICustomWorld) {
  await expect(pageObject.dialogWindow).toBeVisible();
});

Then('I should see the search results grid populated with matching items', async function (this: ICustomWorld) {
  await pageObject.validateResultsGrid();
});

Then('I should see no results in the search grid', async function (this: ICustomWorld) {
  await expect(pageObject.resultsGrid.locator('td')).toHaveCount(0);
});

Then('I should see the correct headers and controls in the search results grid', async function (this: ICustomWorld) {
  await pageObject.validateResultsGrid();
});

Then('I should not see the "Associate an Item" button', async function (this: ICustomWorld) {
  await pageObject.validateNoAssociateItemButton();
});

Then('I should see an error or invalid input rejected', async function (this: ICustomWorld) {
  await expect(pageObject.datePickerCell).not.toHaveValue('invalid-date');
});