// Page Object: LoginPage
import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get usernameInput(): Locator {
    return this.page.locator('[data-testid="username"]');
  }

  get passwordInput(): Locator {
    return this.page.locator('[data-testid="password"]');
  }

  get loginButton(): Locator {
    return this.page.locator('[data-testid="login-button"]');
  }

  get errorMessage(): Locator {
    return this.page.locator('[data-testid="error-message"]');
  }

  get headerNavigation(): Locator {
    return this.page.locator('[data-testid="header-navigation"]');
  }

  // Actions
  /**
   * Navigate to the login page
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://qa.automate.lilly.com');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Fill the username field
   * @param username - The username to input
   */
  async fillUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  /**
   * Fill the password field
   * @param password - The password to input
   */
  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  /**
   * Click the login button
   */
  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Assert that the header navigation is visible
   */
  async assertHeaderNavigationVisible(): Promise<void> {
    await expect(this.headerNavigation).toBeVisible();
  }

  /**
   * Assert that an error message is displayed
   */
  async assertErrorMessageVisible(): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
  }
}