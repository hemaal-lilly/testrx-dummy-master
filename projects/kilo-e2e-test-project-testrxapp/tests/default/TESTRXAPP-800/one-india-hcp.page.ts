// Page Object: OneIndiaHcpPage
import { Page, Locator, expect } from '@playwright/test';

export class OneIndiaHcpPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get searchInput() { return this.page.locator('[data-testid="search-input"]'); }
  get searchButton() { return this.page.locator('[data-testid="search-button"]'); }
  get workOrderResult() { return this.page.locator('[data-testid="work-order-result"]'); }
  get panField() { return this.page.locator('[data-testid="pan-field"]'); }
  get saveButton() { return this.page.locator('[data-testid="save-button"]'); }
  get confirmButton() { return this.page.locator('[data-testid="confirm-button"]'); }

  // Actions
  async navigateToPortal(): Promise<void> {
    await this.page.goto('/work-order-portal');
    await this.page.waitForLoadState('networkidle');
  }

  async searchWorkOrder(workOrderId: string): Promise<void> {
    await this.searchInput.fill(workOrderId);
    await this.searchButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async enterPanDetails(pan: string): Promise<void> {
    await this.panField.fill(pan);
    await this.saveButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async confirmPreparationTime(): Promise<void> {
    await this.confirmButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectWorkOrderVisible(): Promise<void> {
    await expect(this.workOrderResult).toBeVisible();
  }

  async expectPanFieldToBeFilled(): Promise<void> {
    await expect(this.panField).toHaveValue(/.+/);
  }
}