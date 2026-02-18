// Page Object: MarketplaceTabPage
import { Page, Locator, expect } from '@playwright/test';

export class MarketplaceTabPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get marketplaceTab() { return this.page.locator('[aria-label="Marketplace"]'); }
  get marketplaceContent() { return this.page.locator('[data-testid="marketplace-content"]'); }

  /**
   * Navigate to the Playwright homepage
   */
  async navigateToHomePage(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Click on the Marketplace tab
   */
  async clickMarketplaceTab(): Promise<void> {
    await this.marketplaceTab.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Assert that the Marketplace content is visible
   */
  async expectMarketplaceContentVisible(): Promise<void> {
    await expect(this.marketplaceContent).toBeVisible({ timeout: 5000 });
  }
}