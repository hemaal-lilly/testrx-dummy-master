// Page Object: PlaywrightHomePage
import { Page, Locator, expect } from '@playwright/test';

export class PlaywrightHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get loginButton(): Locator {
    return this.page.locator('[data-testid="login-button"]'); // Replace with actual data-testid
  }

  get emailInput(): Locator {
    return this.page.locator('[data-testid="email-input"]'); // Replace with actual data-testid
  }

  get passwordInput(): Locator {
    return this.page.locator('[data-testid="password-input"]'); // Replace with actual data-testid
  }

  // Actions
  /**
   * Navigates to the Playwright homepage and waits for the page to load.
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Fills in the email and password fields.
   * @param email - The email address to input.
   * @param password - The password to input.
   */
  async fillLoginForm(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  /**
   * Clicks the login button and waits for the page to load.
   */
  async submitLogin(): Promise<void> {
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Verifies that the login was successful by checking the URL.
   */
  async expectLoginSuccess(): Promise<void> {
    await expect(this.page).toHaveURL(/dashboard/); // Replace with actual success URL pattern
  }
}