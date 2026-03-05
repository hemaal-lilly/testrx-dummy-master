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
  get loginUsernameInput() { return this.page.locator('[data-testid="login-username"]'); }
  get loginPasswordInput() { return this.page.locator('[data-testid="login-password"]'); }
  get loginSubmitButton() { return this.page.locator('[data-testid="login-submit"]'); }
  get panInputField() { return this.page.locator('[data-testid="pan-input"]'); }
  get saveButton() { return this.page.locator('[data-testid="save-button"]'); }
  get approvalConfirmButton() { return this.page.locator('[data-testid="approval-confirm-button"]'); }

  // Actions
  async navigateToPortal(): Promise<void> {
    await this.page.goto('/work-order-solution-portal');
    await this.page.waitForLoadState('networkidle');
  }

  async login(username: string, password: string): Promise<void> {
    await this.loginUsernameInput.fill(username);
    await this.loginPasswordInput.fill(password);
    await this.loginSubmitButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async searchWorkOrder(workOrderId: string): Promise<void> {
    await this.searchInput.fill(workOrderId);
    await this.searchButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async enterPanDetails(pan: string): Promise<void> {
    await this.panInputField.fill(pan);
    await this.saveButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async confirmApprovals(): Promise<void> {
    await this.approvalConfirmButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectWorkOrderVisible(workOrderId: string): Promise<void> {
    const workOrderLocator = this.page.locator(`[data-testid="work-order-${workOrderId}"]`);
    await expect(workOrderLocator).toBeVisible();
  }

  async expectPanSaved(): Promise<void> {
    await expect(this.panInputField).toHaveValue(/.+/); // Ensure PAN field is not empty
  }
}