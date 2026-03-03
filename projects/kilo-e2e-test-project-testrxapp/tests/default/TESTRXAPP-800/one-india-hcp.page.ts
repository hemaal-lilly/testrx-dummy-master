// Page Object: WorkOrderSolutionPortalPage
import { Page, Locator, expect } from '@playwright/test';

export class WorkOrderSolutionPortalPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get searchInput() { return this.page.locator('[data-testid="search-input"]'); }
  get searchButton() { return this.page.locator('[data-testid="search-button"]'); }
  get workOrderLink() { return this.page.locator('[data-testid="work-order-link"]'); }
  get panInputField() { return this.page.locator('[data-testid="pan-input"]'); }
  get saveButton() { return this.page.locator('[data-testid="save-button"]'); }
  get confirmButton() { return this.page.locator('[data-testid="confirm-button"]'); }

  // Actions
  async navigate(): Promise<void> {
    await this.page.goto('/work-order-solution-portal');
    await this.page.waitForLoadState('networkidle');
  }

  async searchWorkOrder(workOrderId: string): Promise<void> {
    await this.searchInput.fill(workOrderId);
    await this.searchButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async openWorkOrder(): Promise<void> {
    await this.workOrderLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  async enterPAN(pan: string): Promise<void> {
    await this.panInputField.fill(pan);
  }

  async savePAN(): Promise<void> {
    await this.saveButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async confirmApprovals(): Promise<void> {
    await this.confirmButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectWorkOrderVisible(): Promise<void> {
    await expect(this.workOrderLink).toBeVisible();
  }

  async expectPANSaved(): Promise<void> {
    await expect(this.panInputField).toHaveValue(/.+/);
  }
}