// Page Object: CurriculumDetailReviewPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Curriculum Detail Review page
 */
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
  async navigateToPage(): Promise<void> {
    await this.page.goto('/curriculum-detail-review');
    await this.page.waitForLoadState('networkidle');
  }

  async clickAssociateItemButton(): Promise<void> {
    await this.associateItemButton.click();
    await expect(this.dialogWindow).toBeVisible();
  }

  async enterItemId(itemId: string): Promise<void> {
    await this.itemIdSearchField.fill(itemId);
  }

  async clickSearchButton(): Promise<void> {
    await this.searchButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async validateResultsGrid(): Promise<void> {
    await expect(this.resultsGrid).toBeVisible();
    await expect(this.resultsGrid.locator('th')).toHaveCountGreaterThan(0); // Validate headers
    await expect(this.resultsGrid.locator('td')).toHaveCountGreaterThan(0); // Validate rows
  }

  async enterInvalidDate(): Promise<void> {
    await this.datePickerCell.click();
    await this.datePickerCell.fill('invalid-date');
    await expect(this.datePickerCell).not.toHaveValue('invalid-date');
  }

  async validateNoAssociateItemButton(): Promise<void> {
    await expect(this.associateItemButton).not.toBeVisible();
  }
}