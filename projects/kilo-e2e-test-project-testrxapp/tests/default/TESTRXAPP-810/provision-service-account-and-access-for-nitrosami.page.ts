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
  get provisioningForm() { return this.page.locator('[data-testid="provisioning-form"]'); }
  get submitProvisioningButton() { return this.page.locator('[data-testid="submit-provisioning"]'); }

  // Actions
  async signIn(email: string): Promise<void> {
    await this.page.goto('/login');
    await this.page.fill('[data-testid="username"]', email);
    await this.page.fill('[data-testid="password"]', 'password'); // Replace with secure handling
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

  async refreshInbox(): Promise<void> {
    await this.inboxRefreshButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async submitProvisioningRequest(fields: Record<string, string | string[]>): Promise<void> {
    for (const [key, value] of Object.entries(fields)) {
      const fieldLocator = this.provisioningForm.locator(`[data-testid="${key}"]`);
      if (Array.isArray(value)) {
        await fieldLocator.fill(value.join(', '));
      } else {
        await fieldLocator.fill(value);
      }
    }
    await this.submitProvisioningButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectEmailInInbox(subject: string): Promise<void> {
    const emailLocator = this.page.locator(`[data-testid="email-subject-${subject}"]`);
    await expect(emailLocator).toBeVisible();
  }

  async expectProvisioningSuccess(): Promise<void> {
    const successMessage = this.page.locator('[data-testid="provisioning-success"]');
    await expect(successMessage).toBeVisible();
  }
}