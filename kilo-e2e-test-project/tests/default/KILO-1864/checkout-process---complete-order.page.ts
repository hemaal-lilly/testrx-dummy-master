// Page Object: CheckoutPage
import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get checkoutButton(): Locator {
    return this.page.locator('[data-testid="checkout-button"]');
  }

  get shippingAddressInput(): Locator {
    return this.page.locator('[data-testid="shipping-address"]');
  }

  get paymentMethodSelect(): Locator {
    return this.page.locator('[data-testid="payment-method"]');
  }

  get placeOrderButton(): Locator {
    return this.page.locator('[data-testid="place-order-button"]');
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
   * Fill in the shipping address.
   * @param address - The shipping address to fill.
   */
  async fillShippingAddress(address: string): Promise<void> {
    await this.shippingAddressInput.fill(address);
  }

  /**
   * Select a payment method.
   * @param method - The payment method to select.
   */
  async selectPaymentMethod(method: string): Promise<void> {
    await this.paymentMethodSelect.selectOption(method);
  }

  /**
   * Click the checkout button to proceed.
   */
  async clickCheckoutButton(): Promise<void> {
    await this.checkoutButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Place the order by clicking the place order button.
   */
  async placeOrder(): Promise<void> {
    await this.placeOrderButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Assert that the order confirmation page is displayed.
   */
  async expectOrderConfirmation(): Promise<void> {
    await expect(this.page).toHaveURL(/order-confirmation/);
    await expect(this.page.locator('[data-testid="confirmation-message"]')).toBeVisible();
  }
}