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

  async searchItemId(itemId: string): Promise<void> {
    await this.itemIdSearchField.fill(itemId);
    await this.searchButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async validateGrid(): Promise<void> {
    await expect(this.resultsGrid).toBeVisible();
    const headers = await this.resultsGrid.locator('[data-testid="grid-header"]').allTextContents();
    expect(headers).toContain('Item ID');
    expect(headers).toContain('Revision Date');
  }

  async attemptInvalidDateInput(): Promise<void> {
    await this.itemRevisionDateCell.click();
    await this.itemRevisionDateCell.fill('invalid-date');
    const errorMessage = await this.page.locator('[data-testid="date-error-message"]');
    await expect(errorMessage).toBeVisible();
  }
}