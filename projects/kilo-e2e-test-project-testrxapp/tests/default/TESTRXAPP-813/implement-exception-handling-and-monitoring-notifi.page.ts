// Page Object: ImplementExceptionHandlingAndMonitoringNotificationsPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Implementing Exception Handling and Monitoring Notifications
 */
export class ImplementExceptionHandlingAndMonitoringNotificationsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get monitoringDistributionInput(): Locator {
    return this.page.locator('[data-testid="monitoring-distribution"]');
  }

  get stakeholderRecipientsInput(): Locator {
    return this.page.locator('[data-testid="stakeholder-recipients"]');
  }

  get logPathInput(): Locator {
    return this.page.locator('[data-testid="log-path"]');
  }

  get retryAttemptsInput(): Locator {
    return this.page.locator('[data-testid="retry-attempts"]');
  }

  get errorNotification(): Locator {
    return this.page.locator('[data-testid="error-notification"]');
  }

  get exceptionLogEntry(): Locator {
    return this.page.locator('[data-testid="exception-log-entry"]');
  }

  get stopNotification(): Locator {
    return this.page.locator('[data-testid="stop-notification"]');
  }

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

  async captureException(stepName: string): Promise<void> {
    await this.page.locator(`[data-testid="capture-exception-${stepName}"]`).click();
  }

  async triggerRetryPolicy(): Promise<void> {
    await this.page.locator('[data-testid="retry-policy-trigger"]').click();
  }

  async stopProcessing(): Promise<void> {
    await this.page.locator('[data-testid="stop-processing"]').click();
  }

  // Assertions
  async expectErrorNotification(): Promise<void> {
    await expect(this.errorNotification).toBeVisible({ timeout: 10000 });
  }

  async expectExceptionLogEntry(): Promise<void> {
    await expect(this.exceptionLogEntry).toBeVisible({ timeout: 10000 });
  }

  async expectStopNotification(): Promise<void> {
    await expect(this.stopNotification).toBeVisible({ timeout: 10000 });
  }
}