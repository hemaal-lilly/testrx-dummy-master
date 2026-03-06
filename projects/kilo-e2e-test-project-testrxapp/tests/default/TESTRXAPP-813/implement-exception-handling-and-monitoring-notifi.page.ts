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
  get moleculeIdInput() { return this.page.locator('[data-testid="molecule-id"]'); }
  get projectInput() { return this.page.locator('[data-testid="project"]'); }
  get errorNotification() { return this.page.locator('[data-testid="error-notification"]'); }
  get stopNotification() { return this.page.locator('[data-testid="stop-notification"]'); }
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

  async configureMolecule(moleculeId: string, project: string): Promise<void> {
    await this.moleculeIdInput.fill(moleculeId);
    await this.projectInput.fill(project);
  }

  async expectErrorNotification(): Promise<void> {
    await expect(this.errorNotification).toBeVisible({ timeout: 10000 });
  }

  async expectStopNotification(): Promise<void> {
    await expect(this.stopNotification).toBeVisible({ timeout: 10000 });
  }

  async expectLogEntry(): Promise<void> {
    await expect(this.logEntry).toBeVisible({ timeout: 10000 });
  }
}