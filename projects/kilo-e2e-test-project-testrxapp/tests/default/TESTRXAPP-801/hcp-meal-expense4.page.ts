// Page Object: OdmModulePage
import { Page, Locator, expect } from '@playwright/test';

export class OdmModulePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get productList() { return this.page.locator('[data-testid="product-list"]'); }
  get addProductButton() { return this.page.locator('[data-testid="add-product"]'); }
  get warningMessage() { return this.page.locator('[data-testid="warning-message"]'); }
  get processingIndicator() { return this.page.locator('[data-testid="processing-indicator"]'); }

  // Actions
  async navigate(): Promise<void> {
    await this.page.goto('/odm-module');
    await this.page.waitForLoadState('networkidle');
  }

  async triggerProcessing(): Promise<void> {
    await this.page.click('[data-testid="trigger-processing"]');
    await this.page.waitForLoadState('networkidle');
  }

  async addProduct(): Promise<void> {
    await this.addProductButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectProductAdded(): Promise<void> {
    await expect(this.productList).toContainText('Product Name');
  }

  async expectWarningMessage(expectedMessage: string): Promise<void> {
    await expect(this.warningMessage).toHaveText(expectedMessage);
  }

  async expectNoProcessing(): Promise<void> {
    await expect(this.processingIndicator).not.toBeVisible();
  }

  async expectUiUpdated(): Promise<void> {
    await expect(this.productList).toBeVisible();
  }
}