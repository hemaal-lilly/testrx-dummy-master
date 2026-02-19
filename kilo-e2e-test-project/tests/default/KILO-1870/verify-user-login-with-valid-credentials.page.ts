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

  // Actions
  /**
   * Navigate to the login page
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/login');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Fill in the email input field
   * @param email - The email address to input
   */
  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  /**
   * Fill in the password input field
   * @param password - The password to input
   */
  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  /**
   * Click the login button
   */
  async submitLogin(): Promise<void> {
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Verify the user is successfully logged in
   */
  async expectSuccessfulLogin(): Promise<void> {
    await expect(this.page).toHaveURL(/dashboard/);
    await expect(this.page.locator('[data-testid="welcome-message"]')).toBeVisible();
  }
}