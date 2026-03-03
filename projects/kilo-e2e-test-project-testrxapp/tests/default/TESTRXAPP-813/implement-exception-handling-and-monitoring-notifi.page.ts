// Page Object: ExceptionHandlingAndMonitoringPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Exception Handling and Monitoring Notifications
 */
export class ExceptionHandlingAndMonitoringPage {
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
  get errorMessage() { return this.page.locator('[data-testid="error-message"]'); }
  get logEntry() { return this.page.locator('[data-testid="log-entry"]'); }

  // Actions
  async configureMonitoringDistribution(email: string): Promise<void> {
    await this.monitoringDistributionField.fill(email);
  }

  async configureStakeholderRecipients(email: string): Promise<void> {
    await this.stakeholderRecipientsField.fill(email);
  }

  async configureLogPath(path: string): Promise<void> {
    await this.logPathField.fill(path);
  }

  async configureRetryAttempts(attempts: number): Promise<void> {
    await this.retryAttemptsField.fill(attempts.toString());
  }

  async setMoleculeDetails(moleculeId: string, project: string): Promise<void> {
    await this.moleculeIdField.fill(moleculeId);
    await this.projectField.fill(project);
  }

  async expectErrorMessage(message: string): Promise<void> {
    await expect(this.errorMessage).toHaveText(message, { timeout: 5000 });
  }

  async expectLogEntryIncludes(fields: string[]): Promise<void> {
    for (const field of fields) {
      await expect(this.logEntry).toContainText(field, { timeout: 5000 });
    }
  }
}