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
  get monitoringDistributionInput() { return this.page.locator('[data-testid="monitoring-distribution"]'); }
  get stakeholderRecipientsInput() { return this.page.locator('[data-testid="stakeholder-recipients"]'); }
  get logPathInput() { return this.page.locator('[data-testid="log-path"]'); }
  get retryAttemptsInput() { return this.page.locator('[data-testid="retry-attempts"]'); }
  get moleculeIdInput() { return this.page.locator('[data-testid="molecule-id"]'); }
  get projectInput() { return this.page.locator('[data-testid="project"]'); }
  get exceptionLogEntry() { return this.page.locator('[data-testid="exception-log-entry"]'); }
  get errorNotification() { return this.page.locator('[data-testid="error-notification"]'); }
  get stopNotification() { return this.page.locator('[data-testid="stop-notification"]'); }
  get retryPolicyLog() { return this.page.locator('[data-testid="retry-policy-log"]'); }

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

  async configureMoleculeDetails(moleculeId: string, project: string): Promise<void> {
    await this.moleculeIdInput.fill(moleculeId);
    await this.projectInput.fill(project);
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

  async expectRetryPolicyLog(): Promise<void> {
    await expect(this.retryPolicyLog).toBeVisible({ timeout: 10000 });
  }

  async expectExceptionLogEntry(): Promise<void> {
    await expect(this.exceptionLogEntry).toBeVisible({ timeout: 10000 });
  }
}