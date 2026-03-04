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
  get headerTitle() { return this.page.locator('[data-testid="header-title"]'); }
  get headerSection() { return this.page.locator('[data-testid="header-section"]'); }
  get heroBanner() { return this.page.locator('[data-testid="hero-banner"]'); }
  get cardsSection() { return this.page.locator('[data-testid="cards-section"]'); }
  get topHeader() { return this.page.locator('[data-testid="top-header"]'); }
  get ctaButton() { return this.page.locator('[data-testid="cta-button"]'); }
  get homeTab() { return this.page.locator('[data-testid="home-tab"]'); }

  // Actions
  /**
   * Navigates to the specified URL and waits for the page to load.
   * @param url The URL to navigate to.
   */
  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Asserts that the Lilly logo is visible.
   */
  async assertLillyLogoVisible(): Promise<void> {
    await expect(this.lillyLogo).toBeVisible({ timeout: 5000 });
  }

  /**
   * Asserts that the Lilly logo is not visible.
   */
  async assertLillyLogoNotVisible(): Promise<void> {
    await expect(this.lillyLogo).toBeHidden({ timeout: 5000 });
  }

  /**
   * Asserts that the header title contains the specified text.
   * @param title The expected header title text.
   */
  async assertHeaderTitleVisible(title: string): Promise<void> {
    await expect(this.headerTitle).toHaveText(title, { timeout: 5000 });
  }

  /**
   * Asserts that the specified navigation item is visible in the top header.
   * @param item The navigation item text.
   */
  async assertTopHeaderItemVisible(item: string): Promise<void> {
    await expect(this.topHeader.locator(`text=${item}`)).toBeVisible({ timeout: 5000 });
  }

  /**
   * Asserts that the specified navigation item is not visible in the top header.
   * @param item The navigation item text.
   */
  async assertTopHeaderItemNotVisible(item: string): Promise<void> {
    await expect(this.topHeader.locator(`text=${item}`)).toBeHidden({ timeout: 5000 });
  }

  /**
   * Asserts that the CTA button contains the specified text and is visible.
   * @param buttonText The expected CTA button text.
   */
  async assertCTAButtonVisible(buttonText: string): Promise<void> {
    await expect(this.ctaButton).toHaveText(buttonText, { timeout: 5000 });
    await expect(this.ctaButton).toBeVisible({ timeout: 5000 });
  }

  /**
   * Asserts that the "Home" tab is active.
   */
  async assertHomeTabActive(): Promise<void> {
    await expect(this.homeTab).toHaveAttribute('aria-selected', 'true', { timeout: 5000 });
  }

  /**
   * Asserts that the "Home" tab is not active.
   */
  async assertHomeTabNotActive(): Promise<void> {
    await expect(this.homeTab).not.toHaveAttribute('aria-selected', 'true', { timeout: 5000 });
  }

  /**
   * Asserts that a section is visible.
   * @param sectionLocator The locator for the section.
   */
  async assertSectionVisible(sectionLocator: Locator): Promise<void> {
    await expect(sectionLocator).toBeVisible({ timeout: 5000 });
  }
}