// Page Object: ExceptionHandlingAndMonitoringNotificationsPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Exception Handling and Monitoring Notifications
 */
export class ExceptionHandlingAndMonitoringNotificationsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get monitoringDistributionInput() { return this.page.locator('[data-testid="monitoring-distribution"]'); }
  get stakeholderRecipientsInput() { return this.page.locator('[data-testid="stakeholder-recipients"]'); }
  get logPathInput() { return this.page.locator('[data-testid="log-path"]'); }
  get retryAttemptsInput() { return this.page.locator('[data-testid="retry-attempts"]'); }
  get exceptionLogEntry() { return this.page.locator('[data-testid="exception-log-entry"]'); }
  get errorMessage() { return this.page.locator('[data-testid="error-message"]'); }

  // Actions
  async configureMonitoringDistribution(email: string): Promise<void> {
    await this.monitoringDistributionInput.fill(email);
  }

  async configureStakeholderRecipients(email: string): Promise<void> {
    await this.stakeholderRecipientsInput.fill(email);
  }

  async configureLogPath(path: string): Promise<void> {
    await this.logPathInput.fill(path);
  }

  async configureRetryAttempts(attempts: number): Promise<void> {
    await this.retryAttemptsInput.fill(attempts.toString());
  }

  async triggerProcessException(stepName: string): Promise<void> {
    await this.page.locator(`[data-testid="trigger-exception-${stepName}"]`).click();
    await this.page.waitForLoadState('networkidle');
  }

  async expectErrorMessage(expectedMessage: string): Promise<void> {
    await expect(this.errorMessage).toHaveText(expectedMessage, { timeout: 5000 });
  }

  async expectLogEntryIncludes(fields: string[]): Promise<void> {
    for (const field of fields) {
      await expect(this.exceptionLogEntry).toContainText(field, { timeout: 5000 });
    }
  }
}