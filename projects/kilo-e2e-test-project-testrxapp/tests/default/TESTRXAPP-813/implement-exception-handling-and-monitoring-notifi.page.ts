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
  get monitoringDistributionField() { return this.page.locator('[data-testid="monitoring-distribution"]'); }
  get stakeholderRecipientsField() { return this.page.locator('[data-testid="stakeholder-recipients"]'); }
  get logPathField() { return this.page.locator('[data-testid="log-path"]'); }
  get retryAttemptsField() { return this.page.locator('[data-testid="retry-attempts"]'); }
  get moleculeIdField() { return this.page.locator('[data-testid="molecule-id"]'); }
  get projectField() { return this.page.locator('[data-testid="project"]'); }
  get exceptionLog() { return this.page.locator('[data-testid="exception-log"]'); }
  get errorNotification() { return this.page.locator('[data-testid="error-notification"]'); }
  get stopNotification() { return this.page.locator('[data-testid="stop-notification"]'); }

  // Actions
  async configureMonitoringDistribution(email: string): Promise<void> {
    await this.monitoringDistributionField.fill(email);
  }

  async configureStakeholderRecipients(email: string): Promise<void> {
    await this.stakeholderRecipientsField.fill(email);
  }

  async setLogPath(path: string): Promise<void> {
    await this.logPathField.fill(path);
  }

  async setRetryAttempts(attempts: number): Promise<void> {
    await this.retryAttemptsField.fill(attempts.toString());
  }

  async setMoleculeDetails(moleculeId: string, project: string): Promise<void> {
    await this.moleculeIdField.fill(moleculeId);
    await this.projectField.fill(project);
  }

  async captureException(stepName: string): Promise<void> {
    await this.page.locator(`[data-testid="exception-step-${stepName}"]`).click();
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

  async expectStopNotification(): Promise<void> {
    await expect(this.stopNotification).toBeVisible({ timeout: 10000 });
  }

  async expectExceptionLogEntry(): Promise<void> {
    await expect(this.exceptionLog).toBeVisible({ timeout: 10000 });
  }

  async expectRetryNotAttempted(): Promise<void> {
    await expect(this.page.locator('[data-testid="retry-not-attempted"]')).toBeVisible({ timeout: 10000 });
  }

  async expectValidationErrorMessage(message: string): Promise<void> {
    await expect(this.page.locator(`[data-testid="validation-error"][data-message="${message}"]`)).toBeVisible({ timeout: 10000 });
  }
}