// Page Object: UserLoginPage
import { Page, Locator, expect } from '@playwright/test';

export class UserLoginPage {
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
   * @returns {Promise<void>}
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Fills in the email field.
   * @param {string} email - The email to input.
   * @returns {Promise<void>}
   */
  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  /**
   * Fills in the password field.
   * @param {string} password - The password to input.
   * @returns {Promise<void>}
   */
  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  /**
   * Clicks the submit button.
   * @returns {Promise<void>}
   */
  async submit(): Promise<void> {
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Asserts that the user is redirected to the success page.
   * @returns {Promise<void>}
   */
  async expectSuccess(): Promise<void> {
    await expect(this.page).toHaveURL(/success/);
  }
}