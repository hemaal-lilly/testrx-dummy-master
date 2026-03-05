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
  get workOrderLink() { return this.page.locator('[data-testid="work-order-link"]'); }
  get panInput() { return this.page.locator('[data-testid="pan-input"]'); }
  get saveButton() { return this.page.locator('[data-testid="save-button"]'); }
  get approvalCheckbox() { return this.page.locator('[data-testid="approval-checkbox"]'); }
  get confirmButton() { return this.page.locator('[data-testid="confirm-button"]'); }

  // Actions
  async navigateToPortal(): Promise<void> {
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

  async enterPanDetails(pan: string): Promise<void> {
    await this.panInput.fill(pan);
  }

  async savePanDetails(): Promise<void> {
    await this.saveButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async confirmApprovals(): Promise<void> {
    await this.approvalCheckbox.check();
    await this.confirmButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectWorkOrderVisible(): Promise<void> {
    await expect(this.workOrderLink).toBeVisible();
  }

  async expectPanSaved(): Promise<void> {
    await expect(this.panInput).toHaveValue(/.+/); // Ensure PAN field is not empty
  }

  async expectApprovalsConfirmed(): Promise<void> {
    await expect(this.approvalCheckbox).toBeChecked();
  }
}