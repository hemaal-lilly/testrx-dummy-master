// Page Object: HcpMealExpense4Page
import { Page, Locator, expect } from '@playwright/test';

export class HcpMealExpense4Page {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get productList() { return this.page.locator('[data-testid="product-list"]'); }
  get addProductButton() { return this.page.locator('[data-testid="add-product"]'); }
  get processButton() { return this.page.locator('[data-testid="process"]'); }
  get warningMessage() { return this.page.locator('[data-testid="warning-message"]'); }

  // Actions
  async navigate(): Promise<void> {
    await this.page.goto('/path/to/product-list');
    await this.page.waitForLoadState('networkidle');
  }

  async confirmProductListEmpty(): Promise<void> {
    const productCount = await this.productList.count();
    expect(productCount).toBe(0);
  }

  async confirmProductListNotEmpty(): Promise<void> {
    const productCount = await this.productList.count();
    expect(productCount).toBeGreaterThan(0);
  }

  async addProduct(): Promise<void> {
    await this.addProductButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async initiateProcessing(): Promise<void> {
    await this.processButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async captureWarningMessage(): Promise<string> {
    await expect(this.warningMessage).toBeVisible({ timeout: 5000 });
    return await this.warningMessage.textContent();
  }

  // Assertions
  async expectUIAfterProcessing(): Promise<void> {
    await expect(this.page).toHaveURL(/processing-completed/);
  }

  async expectUIInPreProcessingState(): Promise<void> {
    await expect(this.page).toHaveURL(/pre-processing/);
  }
}