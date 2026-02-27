// Page Object: OdmModulePage
import { Page, Locator, expect } from '@playwright/test';

export class OdmModulePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get processButton() { return this.page.locator('[data-testid="process-button"]'); }
  get addProductButton() { return this.page.locator('[data-testid="add-product-button"]'); }
  get productList() { return this.page.locator('[data-testid="product-list"]'); }
  get warningMessage() { return this.page.locator('[data-testid="warning-message"]'); }

  // Actions
  async navigate(): Promise<void> {
    await this.page.goto('/odm-module');
    await this.page.waitForLoadState('networkidle');
  }

  async triggerProcessing(): Promise<void> {
    await this.processButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async addProduct(): Promise<void> {
    await this.addProductButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectProductAdded(productName: string): Promise<void> {
    await expect(this.productList).toContainText(productName);
  }

  async expectWarningMessage(expectedMessage: string): Promise<void> {
    const messageText = await this.warningMessage.textContent();
    expect(messageText?.trim()).toBe(expectedMessage);
  }

  async expectNoProductListProcessed(): Promise<void> {
    await expect(this.productList).toBeEmpty();
  }
}