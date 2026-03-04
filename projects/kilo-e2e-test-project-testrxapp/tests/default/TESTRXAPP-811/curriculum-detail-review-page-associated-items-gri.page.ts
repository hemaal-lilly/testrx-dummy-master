// Page Object: CurriculumDetailReviewPageAssociatedItemsGridAssociateAnItemDialogWindowAndGridPage
import { Page, Locator, expect } from '@playwright/test';

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
  async navigate(): Promise<void> {
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

  async validateSearchResults(): Promise<void> {
    await expect(this.searchResultsGrid).toBeVisible();
    await expect(this.searchResultsGrid.locator('thead')).toBeVisible();
    await expect(this.searchResultsGrid.locator('tbody tr')).toHaveCountGreaterThan(0);
  }

  async attemptInvalidDateInput(): Promise<void> {
    await this.itemRevisionDateCell.click();
    await this.itemRevisionDateCell.fill('invalid-date');
    await expect(this.itemRevisionDateCell).toHaveValue('');
  }

  async validateNoAccess(): Promise<void> {
    await expect(this.associateItemButton).not.toBeVisible();
  }

  async validateEmptySearchField(): Promise<void> {
    await this.clickSearchButton();
    const validationMessage = await this.page.locator('[data-testid="validation-message"]').textContent();
    expect(validationMessage).toContain('Search field cannot be empty');
  }
}