// Page Object: EnterpriseAutomationPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Enterprise Automation homepage
 */
export class EnterpriseAutomationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get lillyLogo() { return this.page.locator('[data-testid="lilly-logo"]'); }
  get headerTitle() { return this.page.locator('h1:has-text("Enterprise Automation")'); }
  get headerSection() { return this.page.locator('[data-testid="header-section"]'); }
  get heroBanner() { return this.page.locator('[data-testid="hero-banner"]'); }
  get cardsSection() { return this.page.locator('[data-testid="cards-section"]'); }
  get topHeader() { return this.page.locator('[data-testid="top-header"]'); }
  get ctaButton() { return this.page.locator('[data-testid="cta-submit-idea"]'); }
  get homeTab() { return this.page.locator('[data-testid="tab-home"]'); }

  // Actions
  /**
   * Navigate to the homepage
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://qa.automate.lilly.com');
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Assert that the Lilly logo is visible
   */
  async assertLillyLogoVisible(): Promise<void> {
    await expect(this.lillyLogo).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that the Lilly logo is not visible
   */
  async assertLillyLogoNotVisible(): Promise<void> {
    await expect(this.lillyLogo).not.toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that the header title is visible
   */
  async assertHeaderTitleVisible(): Promise<void> {
    await expect(this.headerTitle).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that the header section is visible
   */
  async assertHeaderSectionVisible(): Promise<void> {
    await expect(this.headerSection).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that the hero banner is visible
   */
  async assertHeroBannerVisible(): Promise<void> {
    await expect(this.heroBanner).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that the cards section is visible
   */
  async assertCardsSectionVisible(): Promise<void> {
    await expect(this.cardsSection).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that a navigation item is visible in the top header
   */
  async assertNavigationItemVisible(item: string): Promise<void> {
    await expect(this.topHeader.locator(`text=${item}`)).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that a navigation item is not visible in the top header
   */
  async assertNavigationItemNotVisible(item: string): Promise<void> {
    await expect(this.topHeader.locator(`text=${item}`)).not.toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that the CTA button is visible
   */
  async assertCTAButtonVisible(): Promise<void> {
    await expect(this.ctaButton).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that the "Home" tab is active
   */
  async assertHomeTabActive(): Promise<void> {
    await expect(this.homeTab).toHaveClass(/active/, { timeout: 5000 });
  }

  /**
   * Assert that the "Home" tab is not active
   */
  async assertHomeTabNotActive(): Promise<void> {
    await expect(this.homeTab).not.toHaveClass(/active/, { timeout: 5000 });
  }
}