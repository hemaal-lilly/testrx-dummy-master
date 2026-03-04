// Page Object: CurriculumDetailReviewPageAssociatedItemsGridAssociateAnItemDialogWindowAndGridPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Curriculum Detail Review page
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

  get itemIdSearchField(): Locator {
    return this.page.locator('[data-testid="item-id-search-field"]');
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
  async navigateToPage(): Promise<void> {
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
    await expect(this.resultsGrid).toBeVisible();
  }

  async verifyGridHeadersAndControls(): Promise<void> {
    const headers = await this.resultsGrid.locator('[data-testid="grid-header"]').allTextContents();
    expect(headers).toEqual(['Header1', 'Header2', 'Header3']); // Replace with actual headers
  }

  async typeInvalidDate(): Promise<void> {
    await this.itemRevisionDateCell.click();
    await this.itemRevisionDateCell.fill('invalid-date');
    const errorMessage = await this.page.locator('[data-testid="date-error-message"]');
    await expect(errorMessage).toBeVisible();
  }
}