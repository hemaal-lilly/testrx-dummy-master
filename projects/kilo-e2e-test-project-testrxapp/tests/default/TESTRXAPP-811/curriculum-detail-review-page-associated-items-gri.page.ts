// Page Object: CurriculumDetailReviewPageAssociatedItemsGridAssociateAnItemDialogWindowAndGridPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Curriculum Detail Review page -- Associated Items grid -- Associate an Item dialog window and grid
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

  get gridHeaders(): Locator {
    return this.page.locator('[data-testid="grid-headers"]');
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

  async enterItemId(itemId: string): Promise<void> {
    await this.itemIdSearchField.fill(itemId);
  }

  async clickSearchButton(): Promise<void> {
    await this.searchButton.click();
  }

  async validateGridHeaders(): Promise<void> {
    await expect(this.gridHeaders).toBeVisible();
  }

  async typeIntoDateCell(value: string): Promise<void> {
    await this.itemRevisionDateCell.fill(value);
  }

  // Assertions
  async expectDialogVisible(): Promise<void> {
    await expect(this.dialogWindow).toBeVisible();
  }

  async expectNoResults(): Promise<void> {
    const results = await this.page.locator('[data-testid="grid-row"]').count();
    expect(results).toBe(0);
  }

  async expectErrorMessage(): Promise<void> {
    const errorMessage = this.page.locator('[data-testid="error-message"]');
    await expect(errorMessage).toBeVisible();
  }
}