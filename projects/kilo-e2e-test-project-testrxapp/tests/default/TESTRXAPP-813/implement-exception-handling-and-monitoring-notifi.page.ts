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
  get moleculeProcessingStatus() { return this.page.locator('[data-testid="molecule-processing-status"]'); }
  get errorNotification() { return this.page.locator('[data-testid="error-notification"]'); }
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

  async simulateProcessException(step: string): Promise<void> {
    await this.page.evaluate((step) => {
      window.dispatchEvent(new CustomEvent('simulateProcessException', { detail: { step } }));
    }, step);
  }

  async simulateRecoverableError(step: string, attempts: number): Promise<void> {
    await this.page.evaluate((step, attempts) => {
      window.dispatchEvent(new CustomEvent('simulateRecoverableError', { detail: { step, attempts } }));
    }, step, attempts);
  }

  async simulateCriticalFailure(step: string): Promise<void> {
    await this.page.evaluate((step) => {
      window.dispatchEvent(new CustomEvent('simulateCriticalFailure', { detail: { step } }));
    }, step);
  }

  async simulateValidationError(field: string): Promise<void> {
    await this.page.evaluate((field) => {
      window.dispatchEvent(new CustomEvent('simulateValidationError', { detail: { field } }));
    }, field);
  }

  // Assertions
  async expectErrorEmailSent(): Promise<void> {
    await expect(this.errorNotification).toBeVisible({ timeout: 10000 });
  }

  async expectLogEntryIncludes(fields: string[]): Promise<void> {
    for (const field of fields) {
      await expect(this.logEntry).toContainText(field, { timeout: 10000 });
    }
  }

  async expectNoRetryAttempt(): Promise<void> {
    await expect(this.page.locator('[data-testid="retry-attempt"]')).not.toBeVisible({ timeout: 10000 });
  }

  async expectValidationError(message: string): Promise<void> {
    await expect(this.page.locator('[data-testid="validation-error"]')).toHaveText(message, { timeout: 10000 });
  }
}