// Page Object: ProvisionServiceAccountPage
import { Page, Locator, expect } from '@playwright/test';

export class ProvisionServiceAccountPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get emailInput() { return this.page.locator('[data-testid="email-input"]'); }
  get subjectInput() { return this.page.locator('[data-testid="subject-input"]'); }
  get bodyInput() { return this.page.locator('[data-testid="body-input"]'); }
  get sendButton() { return this.page.locator('[data-testid="send-button"]'); }
  get inboxRefreshButton() { return this.page.locator('[data-testid="refresh-inbox"]'); }
  get receivedEmail() { return this.page.locator('[data-testid="received-email"]'); }
  get provisioningForm() { return this.page.locator('[data-testid="provisioning-form"]'); }
  get submitProvisioningButton() { return this.page.locator('[data-testid="submit-provisioning"]'); }

  // Actions
  async navigateToEmailClient(): Promise<void> {
    await this.page.goto('/email-client');
    await this.page.waitForLoadState('networkidle');
  }

  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    await this.emailInput.fill(to);
    await this.subjectInput.fill(subject);
    await this.bodyInput.fill(body);
    await this.sendButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async refreshInbox(): Promise<void> {
    await this.inboxRefreshButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async readReceivedEmail(): Promise<string> {
    const emailContent = await this.receivedEmail.textContent();
    return emailContent || '';
  }

  async submitProvisioningRequest(config: Record<string, string | string[]>): Promise<void> {
    await this.provisioningForm.fill(JSON.stringify(config));
    await this.submitProvisioningButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectEmailContent(expectedContent: string): Promise<void> {
    const content = await this.readReceivedEmail();
    expect(content).toContain(expectedContent);
  }

  async expectProvisioningSuccess(): Promise<void> {
    await expect(this.page.locator('[data-testid="success-message"]')).toBeVisible();
  }
}