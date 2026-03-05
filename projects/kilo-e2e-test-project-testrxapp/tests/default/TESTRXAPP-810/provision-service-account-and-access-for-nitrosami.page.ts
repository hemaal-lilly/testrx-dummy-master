// Page Object: ProvisionServiceAccountAndAccessForNitrosamineAutomationPage
import { Page, Locator, expect } from '@playwright/test';

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

  async signIn(email: string, password: string): Promise<void> {
    await this.page.fill('[data-testid="email-login"]', email);
    await this.page.fill('[data-testid="password-login"]', password);
    await this.page.click('[data-testid="login-button"]');
    await this.page.waitForLoadState('networkidle');
  }

  async composeEmail(recipient: string, subject: string, body: string): Promise<void> {
    await this.emailInput.fill(recipient);
    await this.subjectInput.fill(subject);
    await this.bodyInput.fill(body);
    await this.sendButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async replyToEmail(): Promise<void> {
    await this.replyButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToProvisioningForm(): Promise<void> {
    await this.page.goto('/provisioning-form');
    await this.page.waitForLoadState('networkidle');
  }

  async fillProvisioningForm(data: { accountName: string; unixGroups: string[]; paths: string[]; monitoringDistribution: string[] }): Promise<void> {
    await this.provisioningForm.locator('[data-testid="account-name"]').fill(data.accountName);
    await this.provisioningForm.locator('[data-testid="unix-groups"]').fill(data.unixGroups.join(','));
    await this.provisioningForm.locator('[data-testid="paths"]').fill(data.paths.join(','));
    await this.provisioningForm.locator('[data-testid="monitoring-distribution"]').fill(data.monitoringDistribution.join(','));
  }

  async submitProvisioningRequest(): Promise<void> {
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectEmailReply(): Promise<void> {
    const reply = await this.page.locator('[data-testid="email-reply"]').textContent();
    expect(reply).toContain('Reply from nitroso-ops@corp.example');
  }

  async expectProvisioningSuccess(): Promise<void> {
    const successMessage = await this.page.locator('[data-testid="success-message"]').textContent();
    expect(successMessage).toContain('Provisioning request submitted successfully');
  }
}