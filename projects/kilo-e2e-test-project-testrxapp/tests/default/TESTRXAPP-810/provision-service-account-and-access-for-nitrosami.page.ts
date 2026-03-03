// Page Object: ProvisionServiceAccountPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for provisioning service account and validating operations.
 */
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
  get replyButton() { return this.page.locator('[data-testid="reply-button"]'); }
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

  async replyToEmail(): Promise<void> {
    await this.replyButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToProvisioningForm(): Promise<void> {
    await this.page.goto('/provisioning');
    await this.page.waitForLoadState('networkidle');
  }

  async fillProvisioningForm(fields: Record<string, string | string[]>): Promise<void> {
    for (const [key, value] of Object.entries(fields)) {
      const input = this.provisioningForm.locator(`[data-testid="${key}"]`);
      if (Array.isArray(value)) {
        await input.fill(value.join(','));
      } else {
        await input.fill(value);
      }
    }
  }

  async submitProvisioningForm(): Promise<void> {
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectEmailSent(): Promise<void> {
    await expect(this.page.locator('[data-testid="email-sent-confirmation"]')).toBeVisible();
  }

  async expectProvisioningSuccess(): Promise<void> {
    await expect(this.page.locator('[data-testid="provisioning-success"]')).toBeVisible();
  }
}