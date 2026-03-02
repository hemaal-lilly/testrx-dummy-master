// Page Object: NitrosamineAutomationPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Nitrosamine Automation
 */
export class NitrosamineAutomationPage {
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
  get receivedEmail() { return this.page.locator('[data-testid="email-item"]'); }
  get replyButton() { return this.page.locator('[data-testid="reply-button"]'); }

  // Actions
  async navigateToEmailClient(): Promise<void> {
    await this.page.goto('/email-client');
    await this.page.waitForLoadState('networkidle');
  }

  async signIn(email: string): Promise<void> {
    await this.page.locator('[data-testid="email-signin"]').fill(email);
    await this.page.locator('[data-testid="signin-button"]').click();
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

  async refreshInbox(): Promise<void> {
    await this.inboxRefreshButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async openReceivedEmail(): Promise<void> {
    await this.receivedEmail.click();
    await this.page.waitForLoadState('networkidle');
  }

  async replyToEmail(replyContent: string): Promise<void> {
    await this.page.locator('[data-testid="reply-input"]').fill(replyContent);
    await this.replyButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async verifyEmailContent(expectedContent: string): Promise<void> {
    const emailContent = await this.page.locator('[data-testid="email-content"]').textContent();
    expect(emailContent).toContain(expectedContent);
  }
}