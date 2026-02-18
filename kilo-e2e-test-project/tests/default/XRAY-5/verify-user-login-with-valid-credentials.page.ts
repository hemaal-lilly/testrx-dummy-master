// Page Object: LoginPage
import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get emailInput(): Locator {
    return this.page.locator('[data-testid="email-input"]');
  }

  get passwordInput(): Locator {
    return this.page.locator('[data-testid="password-input"]');
  }

  get submitButton(): Locator {
    return this.page.locator('[data-testid="submit-button"]');
  }

  // Actions

  /**
   * Navigates to the login page.
   * @returns {Promise<void>}
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/login');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Fills in the email input field.
   * @param {string} email - The email address to input.
   * @returns {Promise<void>}
   */
  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  /**
   * Fills in the password input field.
   * @param {string} password - The password to input.
   * @returns {Promise<void>}
   */
  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  /**
   * Clicks the submit button to log in.
   * @returns {Promise<void>}
   */
  async submit(): Promise<void> {
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions

  /**
   * Verifies that the user is redirected to the dashboard after login.
   * @returns {Promise<void>}
   */
  async expectDashboard(): Promise<void> {
    await expect(this.page).toHaveURL(/dashboard/);
    await expect(this.page.locator('[data-testid="welcome-message"]')).toBeVisible();
  }
}