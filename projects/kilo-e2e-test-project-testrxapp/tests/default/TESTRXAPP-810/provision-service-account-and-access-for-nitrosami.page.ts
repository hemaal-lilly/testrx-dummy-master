// Page Object: ProvisionServiceAccountAndAccessForNitrosamineAutomationPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for provisioning the Nitrosamine service account and validating its access.
 */
export class ProvisionServiceAccountAndAccessForNitrosamineAutomationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get emailInput() { return this.page.locator('[data-testid="email-input"]'); }
  get subjectInput() { return this.page.locator('[data-testid="subject-input"]'); }
  get bodyInput() { return this.page.locator('[data-testid="body-input"]'); }
  get sendButton() { return this.page.locator('[data-testid="send-button"]'); }
  get provisioningForm() { return this.page.locator('[data-testid="provisioning-form"]'); }
  get submitButton() { return this.page.locator('[data-testid="submit-button"]'); }
  get jobStatus() { return this.page.locator('[data-testid="job-status"]'); }

  // Actions
  async navigateToEmailClient(): Promise<void> {
    await this.page.goto('/email-client');
    await this.page.waitForLoadState('networkidle');
  }

  async composeAndSendEmail(email: string, subject: string, body: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.subjectInput.fill(subject);
    await this.bodyInput.fill(body);
    await this.sendButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToProvisioningPage(): Promise<void> {
    await this.page.goto('/provisioning');
    await this.page.waitForLoadState('networkidle');
  }

  async submitProvisioningForm(data: { accountName?: string; unixGroups: string[]; lrlhpsPath: string; guavaPath: string; monitoringDistribution?: string[] }): Promise<void> {
    if (data.accountName) {
      await this.page.locator('[data-testid="account-name"]').fill(data.accountName);
    }
    await this.page.locator('[data-testid="unix-groups"]').fill(data.unixGroups.join(','));
    await this.page.locator('[data-testid="lrlhps-path"]').fill(data.lrlhpsPath);
    await this.page.locator('[data-testid="guava-path"]').fill(data.guavaPath);
    if (data.monitoringDistribution) {
      await this.page.locator('[data-testid="monitoring-distribution"]').fill(data.monitoringDistribution.join(','));
    }
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async monitorJobStatus(): Promise<void> {
    await expect(this.jobStatus).toHaveText(/completed/);
  }

  // Assertions
  async expectEmailSent(): Promise<void> {
    await expect(this.page.locator('[data-testid="email-sent-confirmation"]')).toBeVisible();
  }

  async expectProvisioningSuccess(): Promise<void> {
    await expect(this.page.locator('[data-testid="provisioning-success"]')).toBeVisible();
  }
}