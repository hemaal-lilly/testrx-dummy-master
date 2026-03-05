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

Given('I am on the Associate an Item dialog window', async function (this: ICustomWorld) {
  await pageObject.clickAssociateItemButton();
});

Given('I have searched for a valid Item ID {string}', async function (this: ICustomWorld, itemId: string) {
  await pageObject.clickAssociateItemButton();
  await pageObject.searchItemById(itemId);
});

Given('I am on the Curriculum Detail Review page as a user without proper access', async function (this: ICustomWorld) {
  pageObject = new CurriculumDetailReviewPage(this.page);
  await pageObject.navigateToPage();
  await pageObject.expectNoAccessToButton();
});

When('I click the "Associate an Item" button', async function (this: ICustomWorld) {
  await pageObject.clickAssociateItemButton();
});

When('I enter a valid Item ID {string} into the search field', async function (this: ICustomWorld, itemId: string) {
  await pageObject.searchItemById(itemId);
});

When('I enter a non-matching Item ID {string} into the search field', async function (this: ICustomWorld, itemId: string) {
  await pageObject.searchItemById(itemId);
  await pageObject.expectNoResults();
});

When('I leave the Item ID field empty', async function (this: ICustomWorld) {
  await pageObject.validateEmptySearch();
});

When('I attempt to enter invalid data {string} into the Item Revision Date field', async function (this: ICustomWorld, invalidDate: string) {
  await pageObject.enterInvalidRevisionDate(invalidDate);
});

Then('I should see the Associate an Item dialog window', async function (this: ICustomWorld) {
  await expect(pageObject.dialogWindow).toBeVisible();
});

Then('I should see the search results grid populated with matching items', async function (this: ICustomWorld) {
  await expect(pageObject.resultsGrid).toBeVisible();
});

Then('I should see no results in the search results grid', async function (this: ICustomWorld) {
  await pageObject.expectNoResults();
});

Then('I should see the search results grid with correct column headers and cell controls', async function (this: ICustomWorld) {
  await pageObject.expectResultsGridStructure();
});

Then('I should not see the "Associate an Item" button', async function (this: ICustomWorld) {
  await pageObject.expectNoAccessToButton();
});

Then('I should see an error message indicating the field is required', async function (this: ICustomWorld) {
  await expect(this.page.locator('[data-testid="error-message"]')).toContainText('Field is required');
});

Then('I should see an error message indicating invalid date format', async function (this: ICustomWorld) {
  await expect(this.page.locator('[data-testid="error-message"]')).toContainText('Invalid date format');
});