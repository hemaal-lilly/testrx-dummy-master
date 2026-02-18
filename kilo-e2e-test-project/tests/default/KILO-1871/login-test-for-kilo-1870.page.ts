// Page Object: LoginPage
import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get emailInput(): Locator {
    return this.page.locator('[data-testid="email"]');
  }

  get passwordInput(): Locator {
    return this.page.locator('[data-testid="password"]');
  }

  get submitButton(): Locator {
    return this.page.locator('[data-testid="login-submit"]');
  }

  // Actions
  /**
   * Navigates to the login page.
   */
  async navigateToLogin(): Promise<void> {
    await this.page.goto('https://playwright.dev/login');
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
  async submitLoginForm(): Promise<void> {
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Verifies that the user has successfully logged in.
   */
  async expectSuccessfulLogin(): Promise<void> {
    await expect(this.page).toHaveURL(/dashboard/);
    await expect(this.page.locator('[data-testid="welcome-message"]')).toBeVisible();
  }
}