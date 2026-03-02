// Page Object: WorkOrderSolutionPortalPage
import { Page, Locator, expect } from '@playwright/test';

export class WorkOrderSolutionPortalPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get searchInput(): Locator {
    return this.page.locator('[data-testid="search-input"]');
  }

  get searchButton(): Locator {
    return this.page.locator('[data-testid="search-button"]');
  }

  get workOrderResult(): Locator {
    return this.page.locator('[data-testid="work-order-result"]');
  }

  get panField(): Locator {
    return this.page.locator('[data-testid="pan-field"]');
  }

  get saveButton(): Locator {
    return this.page.locator('[data-testid="save-button"]');
  }

  get confirmButton(): Locator {
    return this.page.locator('[data-testid="confirm-button"]');
  }

  // Actions
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  async searchWorkOrder(workOrderId: string): Promise<void> {
    await this.searchInput.fill(workOrderId);
    await this.searchButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async openWorkOrder(): Promise<void> {
    await this.workOrderResult.click();
    await this.page.waitForLoadState('networkidle');
  }

  async enterPanDetails(pan: string): Promise<void> {
    await this.panField.fill(pan);
    await this.saveButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async confirmPreparation(): Promise<void> {
    await this.confirmButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectWorkOrderVisible(): Promise<void> {
    await expect(this.workOrderResult).toBeVisible();
  }

  async expectPanSaved(): Promise<void> {
    await expect(this.panField).toHaveValue(/.+/); // Ensure PAN field is not empty
  }
}