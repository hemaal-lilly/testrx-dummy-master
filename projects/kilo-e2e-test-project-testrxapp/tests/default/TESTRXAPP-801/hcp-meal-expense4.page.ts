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
  get processButton() { return this.page.locator('[data-testid="process-list"]'); }
  get warningMessage() { return this.page.locator('[data-testid="warning-message"]'); }

  // Actions
  async navigate(): Promise<void> {
    await this.page.goto('/product-list');
    await this.page.waitForLoadState('networkidle');
  }

  async confirmProductListIsEmpty(): Promise<void> {
    const productCount = await this.productList.count();
    expect(productCount).toBe(0);
  }

  async confirmProductListIsNotEmpty(): Promise<void> {
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
    return await this.warningMessage.textContent();
  }

  async expectWarningMessage(expectedMessage: string): Promise<void> {
    const actualMessage = await this.captureWarningMessage();
    expect(actualMessage).toBe(expectedMessage);
  }
}