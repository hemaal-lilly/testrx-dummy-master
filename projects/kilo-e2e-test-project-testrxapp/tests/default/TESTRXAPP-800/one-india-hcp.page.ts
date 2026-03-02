// Page Object: OneIndiaHcpPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for One India HCP Work Order Solution Portal
 */
export class OneIndiaHcpPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get vemDataUploadButton() { return this.page.locator('[data-testid="vem-data-upload"]'); }
  get panInputField() { return this.page.locator('[data-testid="pan-input"]'); }
  get confirmPreparationTimeButton() { return this.page.locator('[data-testid="confirm-preparation-time"]'); }
  get processWorkOrderButton() { return this.page.locator('[data-testid="process-work-order"]'); }
  get notificationBanner() { return this.page.locator('[data-testid="notification-banner"]'); }

  // Actions
  /**
   * Navigate to the Work Order Solution Portal
   */
  async navigate(): Promise<void> {
    await this.page.goto('/work-order-solution');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Upload VEM CSV data for processing
   */
  async uploadVemData(): Promise<void> {
    await this.vemDataUploadButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Enter PAN details in the Work Order Solution Portal
   * @param pan - PAN number to be entered
   */
  async enterPanDetails(pan: string): Promise<void> {
    await this.panInputField.fill(pan);
  }

  /**
   * Confirm preparation time manually
   */
  async confirmPreparationTime(): Promise<void> {
    await this.confirmPreparationTimeButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Process Work Order creation or updates
   */
  async processWorkOrder(): Promise<void> {
    await this.processWorkOrderButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Verify notification banner is visible
   */
  async expectNotificationBanner(): Promise<void> {
    await expect(this.notificationBanner).toBeVisible({ timeout: 10000 });
  }
}