// Page Object: ProvisionServiceAccountPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for provisioning service account and validating access.
 */
export class ProvisionServiceAccountPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get signInButton(): Locator {
    return this.page.locator('[data-testid="sign-in"]');
  }

  get emailInput(): Locator {
    return this.page.locator('[data-testid="email-input"]');
  }

  get subjectInput(): Locator {
    return this.page.locator('[data-testid="subject-input"]');
  }

  get bodyInput(): Locator {
    return this.page.locator('[data-testid="body-input"]');
  }

  get sendButton(): Locator {
    return this.page.locator('[data-testid="send-button"]');
  }

  get provisioningForm(): Locator {
    return this.page.locator('[data-testid="provisioning-form"]');
  }

  get submitRequestButton(): Locator {
    return this.page.locator('[data-testid="submit-request"]');
  }

  // Actions
  async signIn(email: string): Promise<void> {
    await this.page.goto('/login');
    await this.page.waitForLoadState('networkidle');
    await this.emailInput.fill(email);
    await this.signInButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async composeEmail(subject: string, body: string): Promise<void> {
    await this.subjectInput.fill(subject);
    await this.bodyInput.fill(body);
  }

  async sendEmail(): Promise<void> {
    await this.sendButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async submitProvisioningRequest(data: Record<string, string | string[]>): Promise<void> {
    await this.provisioningForm.fill(JSON.stringify(data));
    await this.submitRequestButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async verifyEmailSent(): Promise<void> {
    const confirmationMessage = this.page.locator('[data-testid="email-sent-confirmation"]');
    await expect(confirmationMessage).toBeVisible();
  }

  async verifyProvisioningSuccess(): Promise<void> {
    const successMessage = this.page.locator('[data-testid="provisioning-success"]');
    await expect(successMessage).toBeVisible();
  }
}