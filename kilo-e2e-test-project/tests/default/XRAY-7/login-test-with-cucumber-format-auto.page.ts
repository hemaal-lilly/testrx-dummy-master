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

  get loginButton(): Locator {
    return this.page.locator('[data-testid="login-button"]');
  }

  get successMessage(): Locator {
    return this.page.locator('[data-testid="success-message"]');
  }

  // Actions
  /**
   * Navigates to the login page.
   */
  async navigateToLoginPage(): Promise<void> {
    await this.page.goto('https://playwright.dev/login');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Fills in the email and password fields.
   * @param email - The email address to input.
   * @param password - The password to input.
   */
  async fillCredentials(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  /**
   * Clicks the login button.
   */
  async clickLogin(): Promise<void> {
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Verifies that the user is successfully logged in.
   */
  async verifyLoginSuccess(): Promise<void> {
    await expect(this.successMessage).toBeVisible({ timeout: 5000 });
    await expect(this.successMessage).toHaveText('Login successful');
  }
}