// Page Object: CheckoutPage
import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get nameInput(): Locator {
    return this.page.locator('[data-testid="name-input"]');
  }

  get addressInput(): Locator {
    return this.page.locator('[data-testid="address-input"]');
  }

  get paymentMethodDropdown(): Locator {
    return this.page.locator('[data-testid="payment-method-dropdown"]');
  }

  get submitOrderButton(): Locator {
    return this.page.locator('[data-testid="submit-order-button"]');
  }

  get orderConfirmationMessage(): Locator {
    return this.page.locator('[data-testid="order-confirmation-message"]');
  }

  // Actions
  /**
   * Navigate to the checkout page.
   */
  async navigate(): Promise<void> {
    await this.page.goto('/checkout');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Fill in the checkout form with user details.
   * @param name - The name of the user.
   * @param address - The address of the user.
   * @param paymentMethod - The payment method to select.
   */
  async fillCheckoutDetails(name: string, address: string, paymentMethod: string): Promise<void> {
    await this.nameInput.fill(name);
    await this.addressInput.fill(address);
    await this.paymentMethodDropdown.selectOption(paymentMethod);
  }

  /**
   * Submit the order.
   */
  async submitOrder(): Promise<void> {
    await this.submitOrderButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Assert that the order confirmation message is visible.
   */
  async expectOrderConfirmation(): Promise<void> {
    await expect(this.orderConfirmationMessage).toBeVisible({ timeout: 5000 });
  }
}