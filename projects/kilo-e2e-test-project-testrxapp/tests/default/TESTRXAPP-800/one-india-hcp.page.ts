// Page Object: OneIndiaHcpPage
import { Page, Locator, expect } from '@playwright/test';

export class OneIndiaHcpPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get workOrderSearchInput(): Locator {
    return this.page.locator('[data-testid="work-order-search"]');
  }

  get searchButton(): Locator {
    return this.page.locator('[data-testid="search-button"]');
  }

  get panInputField(): Locator {
    return this.page.locator('[data-testid="pan-input"]');
  }

  get saveButton(): Locator {
    return this.page.locator('[data-testid="save-button"]');
  }

  get errorMessage(): Locator {
    return this.page.locator('[data-testid="error-message"]');
  }

  // Actions
  async navigateToPortal(): Promise<void> {
    await this.page.goto('https://playwright.dev/work-order-portal');
    await this.page.waitForLoadState('networkidle');
  }

  async searchWorkOrder(workOrderId: string): Promise<void> {
    await this.workOrderSearchInput.fill(workOrderId);
    await this.searchButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async enterPanDetails(pan: string): Promise<void> {
    await this.panInputField.fill(pan);
  }

  async savePanDetails(): Promise<void> {
    await this.saveButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectErrorMessage(expectedMessage: string): Promise<void> {
    await expect(this.errorMessage).toHaveText(expectedMessage, { timeout: 5000 });
  }

  async expectWorkOrderFound(): Promise<void> {
    await expect(this.workOrderSearchInput).toHaveValue(/.+/, { timeout: 5000 });
  }
}