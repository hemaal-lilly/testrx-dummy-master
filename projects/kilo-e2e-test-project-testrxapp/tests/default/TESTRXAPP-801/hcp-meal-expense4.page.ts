// Page Object: OdmModulePage
import { Page, Locator, expect } from '@playwright/test';

export class OdmModulePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get processButton() { return this.page.locator('[data-testid="process-button"]'); }
  get productList() { return this.page.locator('[data-testid="product-list"]'); }
  get warningMessage() { return this.page.locator('[data-testid="warning-message"]'); }
  get addProductButton() { return this.page.locator('[data-testid="add-product-button"]'); }

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
  async expectProductInList(productName: string): Promise<void> {
    await expect(this.productList).toContainText(productName);
  }

  async expectWarningMessage(expectedMessage: string): Promise<void> {
    await expect(this.warningMessage).toHaveText(expectedMessage);
  }

  async expectNoProcessingIndication(): Promise<void> {
    await expect(this.productList).toBeEmpty();
  }
}