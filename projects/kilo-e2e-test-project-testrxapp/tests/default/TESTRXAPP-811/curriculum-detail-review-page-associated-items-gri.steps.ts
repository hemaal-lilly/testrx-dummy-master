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
  await pageObject.expectDialogVisible();
});

When('I enter a valid Item ID into the search field', async function () {
  await pageObject.enterItemId('VALID_ITEM_ID');
});

When('I enter a non-matching Item ID into the search field', async function () {
  await pageObject.enterItemId('INVALID_ITEM_ID');
});

When('I leave the Item ID field empty', async function () {
  await pageObject.enterItemId('');
});

When('I click the Search button', async function () {
  await pageObject.clickSearchButton();
});

Then('I should see the search results grid populated', async function () {
  await pageObject.validateGridHeaders();
});

Then('I should see no results in the search grid', async function () {
  await pageObject.expectNoResults();
});

Then('I should see an error message indicating the field is required', async function () {
  await pageObject.expectErrorMessage();
});

When('I click into the Item Revision Date cell', async function () {
  await pageObject.itemRevisionDateCell.click();
});

When('I attempt to type a non-date string into the date input', async function () {
  await pageObject.typeIntoDateCell('INVALID_DATE');
});

Then('I should see an error message indicating invalid date format', async function () {
  await pageObject.expectErrorMessage();
});