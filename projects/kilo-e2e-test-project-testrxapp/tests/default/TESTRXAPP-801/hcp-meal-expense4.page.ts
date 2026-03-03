// Page Object: HcpMealExpense4Page
import { Page, Locator, expect } from '@playwright/test';

export class HcpMealExpense4Page {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get productList() { return this.page.locator('[data-testid="product-list"]'); }
  get processButton() { return this.page.locator('[data-testid="process-button"]'); }
  get addProductButton() { return this.page.locator('[data-testid="add-product-button"]'); }
  get warningMessage() { return this.page.locator('[data-testid="warning-message"]'); }

  // Actions
  async navigate(): Promise<void> {
    await this.page.goto('/product-list');
    await this.page.waitForLoadState('networkidle');
  }

  async confirmProductListEmpty(): Promise<void> {
    const productCount = await this.productList.count();
    expect(productCount).toBe(0);
  }

  async confirmProductListNonEmpty(): Promise<void> {
    const productCount = await this.productList.count();
    expect(productCount).toBeGreaterThan(0);
  }

  async confirmProductListContainsExactlyOne(): Promise<void> {
    const productCount = await this.productList.count();
    expect(productCount).toBe(1);
  }

  async initiateProcessing(): Promise<void> {
    await this.processButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async addProduct(): Promise<void> {
    await this.addProductButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async captureWarningMessage(): Promise<string> {
    return await this.warningMessage.textContent();
  }

  // Assertions
  async expectUIChange(): Promise<void> {
    await expect(this.page).toHaveURL(/processing-complete/);
  }

  async expectWarningMessage(expectedMessage: string): Promise<void> {
    const actualMessage = await this.captureWarningMessage();
    expect(actualMessage).toBe(expectedMessage);
  }
}