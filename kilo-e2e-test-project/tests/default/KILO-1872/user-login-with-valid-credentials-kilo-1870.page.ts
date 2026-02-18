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

  get loginButton(): Locator {
    return this.page.locator('[data-testid="login-button"]');
  }

  // Actions
  /**
   * Navigate to the Playwright homepage
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Fill in the email field
   * @param email - The user's email address
   */
  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  /**
   * Fill in the password field
   * @param password - The user's password
   */
  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  /**
   * Click the login button
   */
  async clickLogin(): Promise<void> {
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Assert that the user is redirected to the dashboard page
   */
  async expectDashboardPage(): Promise<void> {
    await expect(this.page).toHaveURL(/dashboard/);
  }
}