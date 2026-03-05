// Page Object: EnterpriseAutomationPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Enterprise Automation homepage.
 */
export class EnterpriseAutomationPage {
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
  get topHeader() { return this.page.locator('[data-testid="top-header"]'); }
  get ctaButton() { return this.page.locator('[data-testid="cta-submit-idea"]'); }
  get homeTab() { return this.page.locator('[data-testid="tab-home"]'); }

  // Actions
  /**
   * Navigates to the homepage and waits for the page to load.
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://qa.automate.lilly.com');
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
    await expect(this.lillyLogo).not.toBeVisible({ timeout: 5000 });
  }

  /**
   * Asserts that the header title matches the expected text.
   * @param title - Expected title text.
   */
  async assertHeaderTitleVisible(title: string): Promise<void> {
    await expect(this.headerTitle).toHaveText(title, { timeout: 5000 });
  }

  /**
   * Asserts that a navigation item is visible in the top header.
   * @param item - Expected navigation item text.
   */
  async assertTopHeaderItemVisible(item: string): Promise<void> {
    await expect(this.topHeader.locator(`text=${item}`)).toBeVisible({ timeout: 5000 });
  }

  /**
   * Asserts that a navigation item is not visible in the top header.
   * @param item - Navigation item text.
   */
  async assertTopHeaderItemNotVisible(item: string): Promise<void> {
    await expect(this.topHeader.locator(`text=${item}`)).not.toBeVisible({ timeout: 5000 });
  }

  /**
   * Asserts that the CTA button is visible.
   * @param buttonText - Expected button text.
   */
  async assertCTAButtonVisible(buttonText: string): Promise<void> {
    await expect(this.ctaButton).toHaveText(buttonText, { timeout: 5000 });
    await expect(this.ctaButton).toBeVisible({ timeout: 5000 });
  }

  /**
   * Asserts that the "Home" tab is active/selected.
   */
  async assertHomeTabActive(): Promise<void> {
    await expect(this.homeTab).toHaveClass(/active/, { timeout: 5000 });
  }

  /**
   * Asserts that the "Home" tab is not active/selected.
   */
  async assertHomeTabNotActive(): Promise<void> {
    await expect(this.homeTab).not.toHaveClass(/active/, { timeout: 5000 });
  }
}