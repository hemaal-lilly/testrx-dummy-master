// Page Object: TestMarketplaceShankarPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Enterprise Automation homepage.
 */
export class TestMarketplaceShankarPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get lillyLogo() { return this.page.locator('[data-testid="lilly-logo"]'); }
  get headerTitle() { return this.page.locator('header h1'); }
  get headerSection() { return this.page.locator('header'); }
  get heroBanner() { return this.page.locator('[data-testid="hero-banner"]'); }
  get cardsSection() { return this.page.locator('[data-testid="cards-section"]'); }
  get topHeader() { return this.page.locator('[data-testid="top-header"]'); }
  get ctaButton() { return this.page.locator('[data-testid="cta-submit-idea"]'); }
  get homeTab() { return this.page.locator('[data-testid="tab-home"]'); }

  // Actions
  /**
   * Navigate to the Enterprise Automation homepage.
   * @param url - The URL to navigate to.
   */
  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Assert that the Lilly logo is visible.
   */
  async assertLillyLogoVisible(): Promise<void> {
    await expect(this.lillyLogo).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that the Lilly logo is not visible.
   */
  async assertLillyLogoNotVisible(): Promise<void> {
    await expect(this.lillyLogo).toBeHidden({ timeout: 5000 });
  }

  /**
   * Assert that the header title matches the expected text.
   * @param expectedTitle - The expected title text.
   */
  async assertHeaderTitle(expectedTitle: string): Promise<void> {
    await expect(this.headerTitle).toHaveText(expectedTitle, { timeout: 5000 });
  }

  /**
   * Assert that a navigation item is visible in the top header.
   * @param itemText - The text of the navigation item.
   */
  async assertNavigationItemVisible(itemText: string): Promise<void> {
    await expect(this.topHeader.locator(`text=${itemText}`)).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that a navigation item is not visible in the top header.
   * @param itemText - The text of the navigation item.
   */
  async assertNavigationItemNotVisible(itemText: string): Promise<void> {
    await expect(this.topHeader.locator(`text=${itemText}`)).toBeHidden({ timeout: 5000 });
  }

  /**
   * Assert that the CTA button is visible.
   * @param buttonText - The text of the CTA button.
   */
  async assertCTAButtonVisible(buttonText: string): Promise<void> {
    await expect(this.ctaButton).toHaveText(buttonText, { timeout: 5000 });
    await expect(this.ctaButton).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that the "Home" tab is active.
   */
  async assertHomeTabActive(): Promise<void> {
    await expect(this.homeTab).toHaveAttribute('aria-selected', 'true', { timeout: 5000 });
  }

  /**
   * Assert that the "Home" tab is not active.
   */
  async assertHomeTabNotActive(): Promise<void> {
    await expect(this.homeTab).not.toHaveAttribute('aria-selected', 'true', { timeout: 5000 });
  }
}