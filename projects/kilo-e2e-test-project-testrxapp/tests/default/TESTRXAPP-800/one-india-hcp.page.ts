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

  get panInputField(): Locator {
    return this.page.locator('[data-testid="pan-input"]');
  }

  get confirmPreparationTimeButton(): Locator {
    return this.page.locator('[data-testid="confirm-preparation-time"]');
  }

  get validateButton(): Locator {
    return this.page.locator('[data-testid="validate-button"]');
  }

  get workOrderDetails(): Locator {
    return this.page.locator('[data-testid="work-order-details"]');
  }

  get notificationMessage(): Locator {
    return this.page.locator('[data-testid="notification-message"]');
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
    await this.panInputField.fill(pan);
  }

  /**
   * Confirm preparation time
   */
  async confirmPreparationTime(): Promise<void> {
    await this.confirmPreparationTimeButton.click();
  }

  /**
   * Validate VEM data for Work Order creation
   */
  async validateVemData(): Promise<void> {
    await this.validateButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Assert that Work Order details are visible
   */
  async expectWorkOrderCreated(): Promise<void> {
    await expect(this.workOrderDetails).toBeVisible({ timeout: 10000 });
  }

  /**
   * Assert that a notification message is displayed
   * @param expectedMessage - The expected notification message
   */
  async expectNotificationMessage(expectedMessage: string): Promise<void> {
    await expect(this.notificationMessage).toHaveText(expectedMessage, { timeout: 10000 });
  }
}