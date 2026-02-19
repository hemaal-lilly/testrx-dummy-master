// Page Object: MarketplaceMarketplaceTabPage
import { Page, Locator, expect } from '@playwright/test';

export class MarketplaceMarketplaceTabPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get marketplaceTab() { return this.page.locator('[data-testid="marketplace-tab"]'); }
  get marketplaceContent() { return this.page.locator('[data-testid="marketplace-content"]'); }

  /**
   * Navigate to the Playwright homepage.
   * @returns {Promise<void>}
   */
  async navigateToHomepage(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Click on the Marketplace tab.
   * @returns {Promise<void>}
   */
  async clickMarketplaceTab(): Promise<void> {
    await this.marketplaceTab.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Assert that the Marketplace content is visible.
   * @returns {Promise<void>}
   */
  async assertMarketplaceContentVisible(): Promise<void> {
    await expect(this.marketplaceContent).toBeVisible({ timeout: 5000 });
  }
}