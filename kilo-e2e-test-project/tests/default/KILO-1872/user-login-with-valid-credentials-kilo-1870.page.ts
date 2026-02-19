// Page Object: UserLoginWithValidCredentialskilo1870Page
import { Page, Locator, expect } from '@playwright/test';

export class UserLoginWithValidCredentialskilo1870Page {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get emailInput(): Locator {
    return this.page.locator('[data-testid="email"]');
  }

  get passwordInput(): Locator {
    return this.page.locator('[data-testid="password"]');
  }

  get submitButton(): Locator {
    return this.page.locator('[data-testid="submit"]');
  }

  // Actions
  /**
   * Navigates to the Playwright homepage.
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Fills in the email input field.
   * @param email - The email address to input.
   */
  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  /**
   * Fills in the password input field.
   * @param password - The password to input.
   */
  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  /**
   * Submits the login form.
   */
  async submit(): Promise<void> {
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Verifies that the user is redirected to the success page.
   */
  async expectSuccess(): Promise<void> {
    await expect(this.page).toHaveURL(/success/);
  }
}