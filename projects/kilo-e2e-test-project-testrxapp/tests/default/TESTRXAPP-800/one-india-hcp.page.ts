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

  // Locators
  get vemCsvUploadInput(): Locator {
    return this.page.locator('[data-testid="vem-csv-upload"]');
  }

  get panInput(): Locator {
    return this.page.locator('[data-testid="pan-input"]');
  }

  get confirmPreparationTimeButton(): Locator {
    return this.page.locator('[data-testid="confirm-preparation-time"]');
  }

  get processWorkOrderButton(): Locator {
    return this.page.locator('[data-testid="process-work-order"]');
  }

  get notificationMessage(): Locator {
    return this.page.locator('[data-testid="notification-message"]');
  }

  get workOrderDetails(): Locator {
    return this.page.locator('[data-testid="work-order-details"]');
  }

  // Actions
  /**
   * Navigate to the Work Order Solution Portal
   */
  async navigate(): Promise<void> {
    await this.page.goto('/work-order-solution-portal');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Upload VEM CSV data
   * @param filePath - Path to the VEM CSV file
   */
  async uploadVemCsv(filePath: string): Promise<void> {
    await this.vemCsvUploadInput.setInputFiles(filePath);
  }

  /**
   * Enter PAN details
   * @param pan - PAN details to be entered
   */
  async enterPanDetails(pan: string): Promise<void> {
    await this.panInput.fill(pan);
  }

  /**
   * Confirm preparation time
   */
  async confirmPreparationTime(): Promise<void> {
    await this.confirmPreparationTimeButton.click();
  }

  /**
   * Process Work Order
   */
  async processWorkOrder(): Promise<void> {
    await this.processWorkOrderButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Assert that a Work Order is created
   */
  async assertWorkOrderCreated(): Promise<void> {
    await expect(this.workOrderDetails).toBeVisible({ timeout: 10000 });
  }

  /**
   * Assert that a notification is displayed
   * @param message - Expected notification message
   */
  async assertNotification(message: string): Promise<void> {
    await expect(this.notificationMessage).toHaveText(message, { timeout: 10000 });
  }
}