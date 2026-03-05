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

  async searchItemId(itemId: string): Promise<void> {
    await this.itemIdSearchField.fill(itemId);
    await this.searchButton.click();
    await expect(this.searchResultsGrid).toBeVisible();
  }

  async validateEmptySearchField(): Promise<void> {
    await this.itemIdSearchField.fill('');
    await this.searchButton.click();
    await expect(this.page.locator('[data-testid="error-message"]')).toBeVisible();
  }

  async validateInvalidDateInput(): Promise<void> {
    await this.itemRevisionDateCell.click();
    await this.itemRevisionDateCell.fill('invalid-date');
    await expect(this.page.locator('[data-testid="date-validation-error"]')).toBeVisible();
  }

  // Assertions
  async expectNoResults(): Promise<void> {
    await expect(this.searchResultsGrid.locator('[data-testid="grid-row"]')).toHaveCount(0);
  }

  async expectRestrictedAccess(): Promise<void> {
    await expect(this.associateItemButton).toBeHidden();
  }
}