// Page Object: CurriculumDetailReviewPageAssociatedItemsGridAssociateAnItemDialogWindowAndGridPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for the Curriculum Detail Review page -- Associated Items grid -- Associate an Item dialog window and grid
 */
export class CurriculumDetailReviewPageAssociatedItemsGridAssociateAnItemDialogWindowAndGridPage {
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

  get itemIdInput(): Locator {
    return this.page.locator('[data-testid="item-id-input"]');
  }

  get searchButton(): Locator {
    return this.page.locator('[data-testid="search-button"]');
  }

  get resultsGrid(): Locator {
    return this.page.locator('[data-testid="results-grid"]');
  }

  get itemRevisionDateCell(): Locator {
    return this.page.locator('[data-testid="item-revision-date-cell"]');
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

  async enterItemId(itemId: string): Promise<void> {
    await this.itemIdInput.fill(itemId);
  }

  async clickSearchButton(): Promise<void> {
    await this.searchButton.click();
  }

  async validateResultsGrid(): Promise<void> {
    await expect(this.resultsGrid).toBeVisible();
    await expect(this.resultsGrid.locator('th')).toHaveCount(5); // Example column count
  }

  async enterInvalidDateInRevisionCell(): Promise<void> {
    await this.itemRevisionDateCell.fill('invalid-date');
    await expect(this.itemRevisionDateCell).toHaveValue('');
  }

  // Assertions
  async expectNoResults(): Promise<void> {
    await expect(this.resultsGrid.locator('tr')).toHaveCount(0);
  }

  async expectValidationError(): Promise<void> {
    const errorMessage = this.page.locator('[data-testid="error-message"]');
    await expect(errorMessage).toBeVisible();
  }
}