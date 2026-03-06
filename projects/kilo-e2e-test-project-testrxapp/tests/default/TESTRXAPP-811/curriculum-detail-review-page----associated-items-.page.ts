// Page Object: CurriculumDetailReviewPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Curriculum Detail Review page and Associate an Item dialog window.
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

  get itemIdInput(): Locator {
    return this.page.locator('[data-testid="item-id-input"]');
  }

  get searchButton(): Locator {
    return this.page.locator('[data-testid="search-button"]');
  }

  get searchResultsGrid(): Locator {
    return this.page.locator('[data-testid="search-results-grid"]');
  }

  get itemRevisionDateCell(): Locator {
    return this.page.locator('[data-testid="item-revision-date-cell"]');
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

  async searchForItem(itemId: string): Promise<void> {
    await this.itemIdInput.fill(itemId);
    await this.searchButton.click();
    await expect(this.searchResultsGrid).toBeVisible();
  }

  async validateSearchResultsGrid(): Promise<void> {
    const columnHeaders = await this.searchResultsGrid.locator('[data-testid="column-header"]').allTextContents();
    expect(columnHeaders).toContain('Item ID');
    expect(columnHeaders).toContain('Item Name');
    expect(columnHeaders).toContain('Item Revision Date');
  }

  async enterInvalidDateInRevisionCell(): Promise<void> {
    await this.itemRevisionDateCell.click();
    await this.itemRevisionDateCell.fill('invalid-date');
    const errorMessage = await this.page.locator('[data-testid="date-error-message"]').textContent();
    expect(errorMessage).toBe('Invalid date format');
  }
}