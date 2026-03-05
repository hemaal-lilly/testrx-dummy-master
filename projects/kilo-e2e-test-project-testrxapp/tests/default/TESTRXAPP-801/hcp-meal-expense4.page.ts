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
    await this.page.goto('/odm');
    await this.page.waitForLoadState('networkidle');
  }

  async getProductCount(): Promise<number> {
    const countText = await this.productList.textContent();
    return parseInt(countText || '0', 10);
  }

  async addProduct(): Promise<void> {
    await this.addProductButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async processProductList(): Promise<void> {
    await this.processButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async getWarningMessageText(): Promise<string> {
    return await this.warningMessage.textContent();
  }

  // Assertions
  async expectProductCount(expectedCount: number): Promise<void> {
    const actualCount = await this.getProductCount();
    await expect(actualCount).toBe(expectedCount);
  }

  async expectWarningMessage(expectedMessage: string): Promise<void> {
    const actualMessage = await this.getWarningMessageText();
    await expect(actualMessage).toContain(expectedMessage);
  }
}