// Page Object: ProvisionServiceAccountAndAccessForNitrosamineAutomationPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for provisioning service account and validating access.
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
  get monitoringMailbox() { return this.page.locator('[data-testid="monitoring-mailbox"]'); }
  get provisioningForm() { return this.page.locator('[data-testid="provisioning-form"]'); }
  get submitButton() { return this.page.locator('[data-testid="submit-button"]'); }

  // Actions
  async navigateToEmailClient(): Promise<void> {
    await this.page.goto('/email-client');
    await this.page.waitForLoadState('networkidle');
  }

  async composeEmail(recipient: string, subject: string, body: string): Promise<void> {
    await this.emailInput.fill(recipient);
    await this.subjectInput.fill(subject);
    await this.bodyInput.fill(body);
  }

  async sendEmail(): Promise<void> {
    await this.sendButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async validateEmailReceived(): Promise<void> {
    await expect(this.monitoringMailbox).toBeVisible();
    await expect(this.monitoringMailbox).toContainText('Subject:');
  }

  async navigateToProvisioningForm(): Promise<void> {
    await this.page.goto('/provisioning-form');
    await this.page.waitForLoadState('networkidle');
  }

  async fillProvisioningForm(data: { accountName: string; unixGroups: string[]; lrlhpsPath: string; guavaPath: string; monitoringDistribution: string[] }): Promise<void> {
    await this.provisioningForm.fill(JSON.stringify(data));
  }

  async submitProvisioningRequest(): Promise<void> {
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async validateProvisioningSuccess(): Promise<void> {
    await expect(this.page).toHaveURL(/success/);
  }
}