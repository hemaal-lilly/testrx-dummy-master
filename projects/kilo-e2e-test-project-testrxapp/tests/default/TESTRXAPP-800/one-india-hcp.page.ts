// Page Object: OneIndiaHcpPage
import { Page, Locator, expect } from '@playwright/test';

export class OneIndiaHcpPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get loginButton(): Locator {
    return this.page.locator('[data-testid="login-button"]');
  }

  get workOrderSearchInput(): Locator {
    return this.page.locator('[data-testid="work-order-search-input"]');
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

  get confirmButton(): Locator {
    return this.page.locator('[data-testid="confirm-button"]');
  }

  // Actions
  async navigateToPortal(): Promise<void> {
    await this.page.goto('/work-order-solution-portal');
    await this.page.waitForLoadState('networkidle');
  }

  async logInAsCmsUser(): Promise<void> {
    await this.loginButton.click();
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

  async savePanEntry(): Promise<void> {
    await this.saveButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async confirmPreparation(): Promise<void> {
    await this.confirmButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectWorkOrderVisible(workOrderId: string): Promise<void> {
    const workOrderLocator = this.page.locator(`[data-testid="work-order-${workOrderId}"]`);
    await expect(workOrderLocator).toBeVisible();
  }
}