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
  get panField() { return this.page.locator('[data-testid="pan-field"]'); }
  get saveButton() { return this.page.locator('[data-testid="save-button"]'); }
  get confirmButton() { return this.page.locator('[data-testid="confirm-button"]'); }

  // Actions
  async navigate(): Promise<void> {
    await this.page.goto('/work-order-solution');
    await this.page.waitForLoadState('networkidle');
  }

  async searchWorkOrder(meetingId: string): Promise<void> {
    await this.searchInput.fill(meetingId);
    await this.searchButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async openWorkOrder(): Promise<void> {
    await this.workOrderLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  async enterPanDetails(pan: string): Promise<void> {
    await this.panField.fill(pan);
  }

  async saveWorkOrder(): Promise<void> {
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

  async expectPanFieldEditable(): Promise<void> {
    await expect(this.panField).toBeEditable();
  }
}