// Page Object: TestMarketplaceShankarPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Enterprise Automation Homepage
 */
export class TestMarketplaceShankarPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get lillyLogo() { return this.page.locator('[data-testid="lilly-logo"]'); }
  get headerTitle() { return this.page.locator('header h1'); }
  get headerSection() { return this.page.locator('[data-testid="header-section"]'); }
  get heroBanner() { return this.page.locator('[data-testid="hero-banner"]'); }
  get cardsSection() { return this.page.locator('[data-testid="cards-section"]'); }
  get topHeaderNavItem() { return (item: string) => this.page.locator(`[data-testid="nav-item-${item.toLowerCase().replace(/\s+/g, '-')}"`); }
  get ctaButton() { return (text: string) => this.page.locator(`button:has-text("${text}")`); }
  get homeTab() { return this.page.locator('[data-testid="home-tab"]'); }

  // Actions
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async assertElementVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible({ timeout: 5000 });
  }

  async assertElementNotVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeHidden({ timeout: 5000 });
  }

  async assertNavItemVisible(item: string): Promise<void> {
    const locator = this.topHeaderNavItem(item);
    await expect(locator).toBeVisible({ timeout: 5000 });
  }

  async assertNavItemNotVisible(item: string): Promise<void> {
    const locator = this.topHeaderNavItem(item);
    await expect(locator).toBeHidden({ timeout: 5000 });
  }

  async assertHomeTabActive(): Promise<void> {
    await expect(this.homeTab).toHaveAttribute('aria-selected', 'true', { timeout: 5000 });
  }

  async assertHomeTabNotActive(): Promise<void> {
    await expect(this.homeTab).not.toHaveAttribute('aria-selected', 'true', { timeout: 5000 });
  }
}