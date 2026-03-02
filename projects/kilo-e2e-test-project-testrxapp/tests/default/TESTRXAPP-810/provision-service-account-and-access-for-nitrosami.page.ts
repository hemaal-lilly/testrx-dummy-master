// Page Object: ProvisionServiceAccountAndAccessForNitrosamineAutomationPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for provisioning service account and access for Nitrosamine automation.
 */
export class ProvisionServiceAccountAndAccessForNitrosamineAutomationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get serviceAccountNameInput() { return this.page.locator('[data-testid="service-account-name"]'); }
  get emailServiceToggle() { return this.page.locator('[data-testid="email-service-toggle"]'); }
  get unixGroupsInput() { return this.page.locator('[data-testid="unix-groups"]'); }
  get lrlhpsPathInput() { return this.page.locator('[data-testid="lrlhps-path"]'); }
  get guavaPathInput() { return this.page.locator('[data-testid="guava-path"]'); }
  get connectivityTestButton() { return this.page.locator('[data-testid="connectivity-test"]'); }
  get errorMessage() { return this.page.locator('[data-testid="error-message"]'); }
  get successMessage() { return this.page.locator('[data-testid="success-message"]'); }

  // Actions
  /**
   * Navigate to the provisioning page.
   */
  async navigate(): Promise<void> {
    await this.page.goto('/provisioning');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Fill the service account name.
   * @param name - The service account name.
   */
  async fillServiceAccountName(name: string): Promise<void> {
    await this.serviceAccountNameInput.fill(name);
  }

  /**
   * Enable email service for the account.
   */
  async enableEmailService(): Promise<void> {
    await this.emailServiceToggle.check();
  }

  /**
   * Set UNIX group memberships.
   * @param groups - Comma-separated UNIX groups.
   */
  async setUnixGroups(groups: string): Promise<void> {
    await this.unixGroupsInput.fill(groups);
  }

  /**
   * Set LRLHPS repository path.
   * @param path - The repository path.
   */
  async setLrlhpsPath(path: string): Promise<void> {
    await this.lrlhpsPathInput.fill(path);
  }

  /**
   * Set Guava LAN share path.
   * @param path - The Guava LAN share path.
   */
  async setGuavaPath(path: string): Promise<void> {
    await this.guavaPathInput.fill(path);
  }

  /**
   * Execute a connectivity test.
   */
  async executeConnectivityTest(): Promise<void> {
    await this.connectivityTestButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Assert that the success message is visible.
   */
  async expectSuccess(): Promise<void> {
    await expect(this.successMessage).toBeVisible({ timeout: 10000 });
  }

  /**
   * Assert that the error message matches the expected text.
   * @param expectedMessage - The expected error message.
   */
  async expectErrorMessage(expectedMessage: string): Promise<void> {
    await expect(this.errorMessage).toHaveText(expectedMessage, { timeout: 10000 });
  }
}