// Page Object: CurriculumDetailReviewPage
import { Page, Locator, expect } from '@playwright/test';

export class CurriculumDetailReviewPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get associateItemButton(): Locator {
    return this.page.locator('[data-testid="associate-item-button"]');
  }

  get dialogWindow(): Locator {
    return this.page.locator('[data-testid="associate-item-dialog"]');
  }

  get itemIdSearchField(): Locator {
    return this.page.locator('[data-testid="item-id-search-field"]');
  }

  get searchButton(): Locator {
    return this.page.locator('[data-testid="search-button"]');
  }

  get resultsGrid(): Locator {
    return this.page.locator('[data-testid="results-grid"]');
  }

  get datePickerCell(): Locator {
    return this.page.locator('[data-testid="date-picker-cell"]');
  }

  // Actions
  async navigate(): Promise<void> {
    await this.page.goto('/curriculum-detail-review');
    await this.page.waitForLoadState('networkidle');
  }

  async clickAssociateItemButton(): Promise<void> {
    await this.associateItemButton.click();
    await expect(this.dialogWindow).toBeVisible();
  }

  async searchForItem(itemId: string): Promise<void> {
    await this.itemIdSearchField.fill(itemId);
    await this.searchButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async validateResultsGrid(): Promise<void> {
    await expect(this.resultsGrid).toBeVisible();
    await expect(this.resultsGrid.locator('th')).toHaveCount(5); // Example: 5 columns
  }

  async typeInvalidDataInDatePicker(): Promise<void> {
    await this.datePickerCell.click();
    await this.datePickerCell.fill('invalid-data');
    await expect(this.datePickerCell).toHaveValue(''); // Assuming validation clears invalid input
  }
}