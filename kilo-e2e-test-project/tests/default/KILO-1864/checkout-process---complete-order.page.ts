// Page Object: CheckoutProcessPage
import { Page, Locator, expect } from '@playwright/test';

export class CheckoutProcessPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get checkoutButton(): Locator {
    return this.page.locator('[data-testid="checkout-button"]');
  }

  get orderConfirmationMessage(): Locator {
    return this.page.locator('[data-testid="order-confirmation"]');
  }

  // Actions
  /**
   * Navigate to the Playwright homepage.
   */
  async navigateToHomepage(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Click the checkout button to complete the order.
   */
  async completeOrder(): Promise<void> {
    await this.checkoutButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Assert that the order confirmation message is visible.
   */
  async expectOrderConfirmation(): Promise<void> {
    await expect(this.orderConfirmationMessage).toBeVisible();
  }
}