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

  async confirmProductListEmpty(): Promise<void> {
    const productCount = await this.productList.locator('li').count();
    await expect(productCount).toBe(0);
  }

  async confirmProductListNotEmpty(): Promise<void> {
    const productCount = await this.productList.locator('li').count();
    await expect(productCount).toBeGreaterThan(0);
  }

  async confirmProductListContainsExactlyOne(): Promise<void> {
    const productCount = await this.productList.locator('li').count();
    await expect(productCount).toBe(1);
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

  // Assertions
  async expectUIUpdated(): Promise<void> {
    await expect(this.page).toHaveTitle(/Updated UI/);
  }

  async expectWarningMessageMatches(expectedMessage: string): Promise<void> {
    const actualMessage = await this.captureWarningMessage();
    await expect(actualMessage).toBe(expectedMessage);
  }
}