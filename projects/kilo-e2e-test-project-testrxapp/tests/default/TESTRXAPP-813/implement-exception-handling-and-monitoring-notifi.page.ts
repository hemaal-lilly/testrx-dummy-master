// Page Object: ImplementExceptionHandlingAndMonitoringNotificationsPage
import { Page, Locator, expect } from '@playwright/test';

export class ImplementExceptionHandlingAndMonitoringNotificationsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get monitoringDistributionInput() { return this.page.locator('[data-testid="monitoring-distribution"]'); }
  get stakeholderRecipientsInput() { return this.page.locator('[data-testid="stakeholder-recipients"]'); }
  get logPathInput() { return this.page.locator('[data-testid="log-path"]'); }
  get retryAttemptsInput() { return this.page.locator('[data-testid="retry-attempts"]'); }
  get processExceptionAlert() { return this.page.locator('[data-testid="process-exception-alert"]'); }
  get errorNotificationEmail() { return this.page.locator('[data-testid="error-notification-email"]'); }
  get logEntry() { return this.page.locator('[data-testid="log-entry"]'); }

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

  async triggerProcessException(step: string): Promise<void> {
    await this.page.locator(`[data-testid="trigger-exception-${step}"]`).click();
  }

  async triggerCriticalFailure(step: string): Promise<void> {
    await this.page.locator(`[data-testid="trigger-critical-failure-${step}"]`).click();
  }

  async triggerRetryPolicy(step: string): Promise<void> {
    await this.page.locator(`[data-testid="trigger-retry-${step}"]`).click();
  }

  // Assertions
  async expectErrorNotificationEmailContains(content: string): Promise<void> {
    await expect(this.errorNotificationEmail).toContainText(content, { timeout: 10000 });
  }

  async expectLogEntryContains(content: string): Promise<void> {
    await expect(this.logEntry).toContainText(content, { timeout: 10000 });
  }

  async expectProcessExceptionAlertVisible(): Promise<void> {
    await expect(this.processExceptionAlert).toBeVisible({ timeout: 10000 });
  }

  async expectErrorMessage(message: string): Promise<void> {
    await expect(this.page.locator('[data-testid="error-message"]')).toHaveText(message, { timeout: 10000 });
  }
}