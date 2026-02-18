// Page Object: AutomatedLoginTestWithXrayIntegrationPage
import { Page, Locator, expect } from '@playwright/test';

export class AutomatedLoginTestWithXrayIntegrationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get loginButton() { return this.page.locator('[data-testid="login-button"]'); }
  get emailInput() { return this.page.locator('[data-testid="email-input"]'); }
  get passwordInput() { return this.page.locator('[data-testid="password-input"]'); }
  get submitButton() { return this.page.locator('[data-testid="submit-button"]'); }

  // Actions
  /**
   * Navigate to the Playwright homepage
   */
  async navigateToHome(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Navigate to the login page
   */
  async navigateToLoginPage(): Promise<void> {
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Fill in login credentials
   * @param email - User's email address
   * @param password - User's password
   */
  async fillLoginCredentials(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  /**
   * Submit the login form
   */
  async submitLogin(): Promise<void> {
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Assert successful login by checking the URL
   */
  async expectSuccessfulLogin(): Promise<void> {
    await expect(this.page).toHaveURL(/dashboard/);
  }
}