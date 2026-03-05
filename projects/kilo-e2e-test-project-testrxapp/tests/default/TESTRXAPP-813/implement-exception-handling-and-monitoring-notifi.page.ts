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
  get exceptionLog() { return this.page.locator('[data-testid="exception-log"]'); }
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

  async simulateProcessException(step: string): Promise<void> {
    await this.page.locator(`[data-testid="simulate-exception-${step}"]`).click();
  }

  async simulateCriticalFailure(step: string): Promise<void> {
    await this.page.locator(`[data-testid="simulate-critical-failure-${step}"]`).click();
  }

  async simulateRecoverableError(step: string): Promise<void> {
    await this.page.locator(`[data-testid="simulate-recoverable-error-${step}"]`).click();
  }

  async expectErrorMessage(message: string): Promise<void> {
    await expect(this.errorMessage).toHaveText(message, { timeout: 5000 });
  }

  async expectExceptionLogContains(fields: Record<string, string>): Promise<void> {
    for (const [key, value] of Object.entries(fields)) {
      await expect(this.exceptionLog.locator(`[data-field="${key}"]`)).toHaveText(value, { timeout: 5000 });
    }
  }

  async expectNoRetryAttempt(): Promise<void> {
    await expect(this.page.locator('[data-testid="retry-attempt"]')).toHaveCount(0, { timeout: 5000 });
  }
}