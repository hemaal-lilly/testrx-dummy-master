// Page Object: ProvisionServiceAccountAndAccessPage
import { Page, Locator, expect } from '@playwright/test';

export class ProvisionServiceAccountAndAccessPage {
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
  get firstEmail() { return this.page.locator('[data-testid="email-item"]:first-child'); }
  get hpcJobSubmitButton() { return this.page.locator('[data-testid="submit-job"]'); }
  get jobStatus() { return this.page.locator('[data-testid="job-status"]'); }
  get fileCreateButton() { return this.page.locator('[data-testid="create-file"]'); }
  get fileContentInput() { return this.page.locator('[data-testid="file-content"]'); }
  get fileSaveButton() { return this.page.locator('[data-testid="save-file"]'); }
  get fileReadContent() { return this.page.locator('[data-testid="file-read-content"]'); }

  // Actions
  async signIn(email: string): Promise<void> {
    await this.page.goto('/login');
    await this.emailInput.fill(email);
    await this.page.keyboard.press('Enter');
    await this.page.waitForLoadState('networkidle');
  }

  async composeAndSendEmail(to: string, subject: string, body: string): Promise<void> {
    await this.page.goto('/compose');
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

  async openFirstEmail(): Promise<void> {
    await this.firstEmail.click();
    await this.page.waitForLoadState('networkidle');
  }

  async submitHPCJob(): Promise<void> {
    await this.hpcJobSubmitButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async monitorJobCompletion(): Promise<void> {
    await expect(this.jobStatus).toHaveText('Completed', { timeout: 60000 });
  }

  async createFile(content: string): Promise<void> {
    await this.fileCreateButton.click();
    await this.fileContentInput.fill(content);
    await this.fileSaveButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async readFileContent(): Promise<string> {
    return await this.fileReadContent.textContent();
  }

  // Assertions
  async expectEmailReply(subject: string): Promise<void> {
    await expect(this.firstEmail).toContainText(subject);
  }

  async expectFileContent(expectedContent: string): Promise<void> {
    const content = await this.readFileContent();
    expect(content).toBe(expectedContent);
  }
}