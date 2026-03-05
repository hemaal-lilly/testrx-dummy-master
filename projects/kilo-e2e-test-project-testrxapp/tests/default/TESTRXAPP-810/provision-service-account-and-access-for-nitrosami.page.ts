// Page Object: ProvisionServiceAccountAndAccessForNitrosamineAutomationPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for provisioning service accounts and validating access.
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
  get replyButton() { return this.page.locator('[data-testid="reply-button"]'); }
  get provisioningForm() { return this.page.locator('[data-testid="provisioning-form"]'); }
  get submitButton() { return this.page.locator('[data-testid="submit-button"]'); }

  // Actions
  async navigateToEmailClient(): Promise<void> {
    await this.page.goto('/email-client');
    await this.page.waitForLoadState('networkidle');
  }

  async signIn(email: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.page.locator('[data-testid="sign-in-button"]').click();
    await this.page.waitForLoadState('networkidle');
  }

  async composeAndSendEmail(to: string, subject: string, body: string): Promise<void> {
    await this.page.locator('[data-testid="compose-button"]').click();
    await this.page.locator('[data-testid="to-input"]').fill(to);
    await this.subjectInput.fill(subject);
    await this.bodyInput.fill(body);
    await this.sendButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async verifyReply(): Promise<void> {
    await this.replyButton.click();
    const replyContent = await this.page.locator('[data-testid="reply-content"]').textContent();
    expect(replyContent).toContain('Reply received');
  }

  async navigateToProvisioningForm(): Promise<void> {
    await this.page.goto('/provisioning-form');
    await this.page.waitForLoadState('networkidle');
  }

  async fillProvisioningForm(fields: { unixGroups: string[], lrlhpsPath: string, guavaPath: string, monitoringDistribution: string[] }): Promise<void> {
    await this.page.locator('[data-testid="unix-groups-input"]').fill(fields.unixGroups.join(','));
    await this.page.locator('[data-testid="lrlhps-path-input"]').fill(fields.lrlhpsPath);
    await this.page.locator('[data-testid="guava-path-input"]').fill(fields.guavaPath);
    await this.page.locator('[data-testid="monitoring-distribution-input"]').fill(fields.monitoringDistribution.join(','));
  }

  async submitProvisioningRequest(): Promise<void> {
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async verifyProvisioningSuccess(): Promise<void> {
    const successMessage = await this.page.locator('[data-testid="success-message"]').textContent();
    expect(successMessage).toContain('Provisioning request submitted successfully');
  }
}