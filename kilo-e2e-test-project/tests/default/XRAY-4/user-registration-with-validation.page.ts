// Page Object: UserRegistrationWithValidationPage
import { Page, Locator, expect } from '@playwright/test';

export class UserRegistrationWithValidationPage {
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

  get confirmPasswordInput(): Locator {
    return this.page.locator('[data-testid="confirm-password-input"]');
  }

  get submitButton(): Locator {
    return this.page.locator('[data-testid="submit-button"]');
  }

  get successMessage(): Locator {
    return this.page.locator('[data-testid="success-message"]');
  }

  // Actions
  /**
   * Navigate to the registration page.
   */
  async navigate(): Promise<void> {
    await this.page.goto('/register');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Fill the registration form with provided data.
   * @param email - User email
   * @param password - User password
   * @param confirmPassword - Confirmation of the password
   */
  async fillRegistrationForm(email: string, password: string, confirmPassword: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(confirmPassword);
  }

  /**
   * Submit the registration form.
   */
  async submitForm(): Promise<void> {
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Assert that the success message is visible.
   */
  async expectSuccessMessage(): Promise<void> {
    await expect(this.successMessage).toBeVisible({ timeout: 5000 });
  }
}