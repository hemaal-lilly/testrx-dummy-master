// Page Object: UserRegistrationPage
import { Page, Locator, expect } from '@playwright/test';

export class UserRegistrationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get nameInput(): Locator {
    return this.page.locator('[data-testid="name-input"]');
  }

  get emailInput(): Locator {
    return this.page.locator('[data-testid="email-input"]');
  }

  get passwordInput(): Locator {
    return this.page.locator('[data-testid="password-input"]');
  }

  get submitButton(): Locator {
    return this.page.locator('[data-testid="submit-button"]');
  }

  get confirmationMessage(): Locator {
    return this.page.locator('[data-testid="confirmation-message"]');
  }

  // Actions
  /**
   * Navigates to the registration page.
   */
  async navigate(): Promise<void> {
    await this.page.goto('/register');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Fills in the registration form with user details.
   * @param name - User's name
   * @param email - User's email
   * @param password - User's password
   */
  async fillRegistrationForm(name: string, email: string, password: string): Promise<void> {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  /**
   * Submits the registration form.
   */
  async submitForm(): Promise<void> {
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Asserts that the confirmation message is visible.
   */
  async expectConfirmationMessage(): Promise<void> {
    await expect(this.confirmationMessage).toBeVisible();
    await expect(this.confirmationMessage).toHaveText('Registration successful!');
  }
}