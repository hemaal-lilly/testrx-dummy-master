// Page Object: CurriculumDetailReviewPageAssociatedItemsGridAssociateAnItemDialogWindowAndGridPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Curriculum Detail Review page and Associate an Item dialog window.
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

  get revisionDateInput(): Locator {
    return this.page.locator('[data-testid="revision-date-input"]');
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

  async searchItemById(itemId: string): Promise<void> {
    await this.itemIdInput.fill(itemId);
    await this.searchButton.click();
    await expect(this.resultsGrid).toBeVisible();
  }

  async validateEmptySearch(): Promise<void> {
    await this.itemIdInput.fill('');
    await this.searchButton.click();
    await expect(this.page.locator('[data-testid="error-message"]')).toContainText('Field is required');
  }

  async enterInvalidRevisionDate(invalidDate: string): Promise<void> {
    await this.revisionDateInput.fill(invalidDate);
    await expect(this.page.locator('[data-testid="error-message"]')).toContainText('Invalid date format');
  }

  // Assertions
  async expectNoResults(): Promise<void> {
    await expect(this.resultsGrid).toHaveCount(0);
  }

  async expectResultsGridStructure(): Promise<void> {
    const headers = await this.resultsGrid.locator('th').allTextContents();
    expect(headers).toEqual(['Item ID', 'Item Name', 'Revision Date']);
    await expect(this.resultsGrid.locator('td')).toBeVisible();
  }

  async expectNoAccessToButton(): Promise<void> {
    await expect(this.associateItemButton).toBeHidden();
  }
}