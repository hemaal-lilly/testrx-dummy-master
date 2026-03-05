// Page Object: ImplementExceptionHandlingAndMonitoringNotificationsPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Exception Handling and Monitoring Notifications
 */
export class ImplementExceptionHandlingAndMonitoringNotificationsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get monitoringDistribution() { return this.page.locator('[data-testid="monitoring-distribution"]'); }
  get stakeholderRecipients() { return this.page.locator('[data-testid="stakeholder-recipients"]'); }
  get logPath() { return this.page.locator('[data-testid="log-path"]'); }
  get retryAttempts() { return this.page.locator('[data-testid="retry-attempts"]'); }
  get moleculeDetails() { return this.page.locator('[data-testid="molecule-details"]'); }
  get errorNotification() { return this.page.locator('[data-testid="error-notification"]'); }
  get exceptionLogEntry() { return this.page.locator('[data-testid="exception-log-entry"]'); }

  // Actions
  async configureMonitoringDistribution(email: string): Promise<void> {
    await this.monitoringDistribution.fill(email);
    await expect(this.monitoringDistribution).toHaveValue(email);
  }

  async configureStakeholderRecipients(email: string): Promise<void> {
    await this.stakeholderRecipients.fill(email);
    await expect(this.stakeholderRecipients).toHaveValue(email);
  }

  async configureLogPath(path: string): Promise<void> {
    await this.logPath.fill(path);
    await expect(this.logPath).toHaveValue(path);
  }

  async configureRetryAttempts(attempts: number): Promise<void> {
    await this.retryAttempts.fill(attempts.toString());
    await expect(this.retryAttempts).toHaveValue(attempts.toString());
  }

  async processMolecule(moleculeID: string, project: string): Promise<void> {
    await this.moleculeDetails.fill(`${moleculeID},${project}`);
    await expect(this.moleculeDetails).toHaveValue(`${moleculeID},${project}`);
  }

  async captureException(stepName: string): Promise<void> {
    await this.page.locator(`[data-testid="exception-${stepName}"]`).click();
    await expect(this.errorNotification).toBeVisible();
  }

  async triggerRetryPolicy(): Promise<void> {
    await this.page.locator('[data-testid="retry-policy-trigger"]').click();
    await expect(this.page.locator('[data-testid="retry-success"]')).toBeVisible();
  }

  async stopProcessing(): Promise<void> {
    await this.page.locator('[data-testid="stop-processing"]').click();
    await expect(this.page.locator('[data-testid="stop-notification"]')).toBeVisible();
  }

  async validateLogEntry(): Promise<void> {
    await expect(this.exceptionLogEntry).toBeVisible();
  }
}