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
  get panInput() { return this.page.locator('[data-testid="pan-input"]'); }
  get preparationTimeInput() { return this.page.locator('[data-testid="preparation-time-input"]'); }
  get confirmButton() { return this.page.locator('[data-testid="confirm-button"]'); }
  get submitButton() { return this.page.locator('[data-testid="submit-button"]'); }
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
   * Upload VEM CSV file
   * @param filePath Path to the VEM CSV file
   */
  async uploadVemCsv(filePath: string): Promise<void> {
    await this.vemCsvUploadInput.setInputFiles(filePath);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Enter PAN details
   * @param pan PAN value to enter
   */
  async enterPan(pan: string): Promise<void> {
    await this.panInput.fill(pan);
  }

  /**
   * Enter preparation time
   * @param time Preparation time in hours
   */
  async enterPreparationTime(time: string): Promise<void> {
    await this.preparationTimeInput.fill(time);
  }

  /**
   * Confirm flagged preparation time
   */
  async confirmPreparationTime(): Promise<void> {
    await this.confirmButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Submit Work Order creation
   */
  async submitWorkOrder(): Promise<void> {
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Assert that a Work Order is created and details are visible
   */
  async expectWorkOrderCreated(): Promise<void> {
    await expect(this.workOrderDetails).toBeVisible({ timeout: 10000 });
  }

  /**
   * Assert that a notification banner is displayed
   * @param message Expected notification message
   */
  async expectNotification(message: string): Promise<void> {
    await expect(this.notificationBanner).toContainText(message, { timeout: 10000 });
  }
}