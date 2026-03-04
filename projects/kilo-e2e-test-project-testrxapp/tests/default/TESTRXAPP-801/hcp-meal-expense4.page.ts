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
  async navigateToODMPage(): Promise<void> {
    await this.page.goto('/odm');
    await this.page.waitForLoadState('networkidle');
  }

  async confirmProductListIsEmpty(): Promise<void> {
    const count = await this.productList.count();
    expect(count).toBe(0);
  }

  async confirmProductListContainsProducts(): Promise<void> {
    const count = await this.productList.count();
    expect(count).toBeGreaterThan(0);
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
    const message = await this.warningMessage.textContent();
    expect(message).not.toBeNull();
    return message!;
  }

  // Assertions
  async expectUIAfterProcessing(): Promise<void> {
    await expect(this.page).toHaveURL(/processing-complete/);
  }

  async expectUIPreProcessingState(): Promise<void> {
    await expect(this.page).toHaveURL(/pre-processing/);
  }
}