// Page Object: WorkOrderSolutionPage
import { Page, Locator, expect } from '@playwright/test';

export class WorkOrderSolutionPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get searchInput() { return this.page.locator('[data-testid="search-input"]'); }
  get searchButton() { return this.page.locator('[data-testid="search-button"]'); }
  get panField() { return this.page.locator('[data-testid="pan-input"]'); }
  get saveButton() { return this.page.locator('[data-testid="save-button"]'); }
  get confirmButton() { return this.page.locator('[data-testid="confirm-button"]'); }

  // Actions
  async navigateToPortal(): Promise<void> {
    await this.page.goto('https://playwright.dev/work-order-solution');
    await this.page.waitForLoadState('networkidle');
  }

  async searchWorkOrder(workOrderId: string): Promise<void> {
    await this.searchInput.fill(workOrderId);
    await this.searchButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async enterPAN(pan: string): Promise<void> {
    await this.panField.fill(pan);
  }

  async savePAN(): Promise<void> {
    await this.saveButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async confirmPreparation(): Promise<void> {
    await this.confirmButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectWorkOrderVisible(workOrderId: string): Promise<void> {
    const workOrderLocator = this.page.locator(`[data-testid="work-order-${workOrderId}"]`);
    await expect(workOrderLocator).toBeVisible();
  }
}