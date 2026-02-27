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
  get vemCsvUploadInput() { return this.page.locator('[data-testid="vem-csv-upload"]'); }
  get panInputField() { return this.page.locator('[data-testid="pan-input"]'); }
  get preparationTimeField() { return this.page.locator('[data-testid="preparation-time"]'); }
  get confirmButton() { return this.page.locator('[data-testid="confirm-button"]'); }
  get notificationBanner() { return this.page.locator('[data-testid="notification-banner"]'); }
  get workOrderDetails() { return this.page.locator('[data-testid="work-order-details"]'); }

  // Actions
  /**
   * Navigate to the Work Order Solution Portal
   */
  async navigate(): Promise<void> {
    await this.page.goto('/work-order-solution');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Upload VEM CSV data
   * @param filePath - Path to the VEM CSV file
   */
  async uploadVemCsv(filePath: string): Promise<void> {
    await this.vemCsvUploadInput.setInputFiles(filePath);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Enter PAN details
   * @param pan - PAN value to be entered
   */
  async enterPanDetails(pan: string): Promise<void> {
    await this.panInputField.fill(pan);
  }

  /**
   * Enter preparation time
   * @param time - Preparation time in hours
   */
  async enterPreparationTime(time: string): Promise<void> {
    await this.preparationTimeField.fill(time);
  }

  /**
   * Confirm action in the portal
   */
  async confirmAction(): Promise<void> {
    await this.confirmButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Assert that a Work Order is created
   */
  async expectWorkOrderCreated(): Promise<void> {
    await expect(this.workOrderDetails).toBeVisible({ timeout: 10000 });
  }

  /**
   * Assert that a notification is displayed
   * @param message - Expected notification message
   */
  async expectNotification(message: string): Promise<void> {
    await expect(this.notificationBanner).toHaveText(message, { timeout: 10000 });
  }
}