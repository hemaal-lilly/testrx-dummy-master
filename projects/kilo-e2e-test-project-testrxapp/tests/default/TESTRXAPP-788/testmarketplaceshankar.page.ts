// Page Object: EnterpriseAutomationHomePage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Enterprise Automation homepage.
 */
export class EnterpriseAutomationHomePage {
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
  get ctaButton() { return this.page.locator('[data-testid="cta-submit-idea"]'); }
  get homeTab() { return this.page.locator('[data-testid="home-tab"]'); }

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
   * Verifies that the Lilly logo is visible.
   */
  async assertLillyLogoVisible(): Promise<void> {
    await expect(this.lillyLogo).toBeVisible({ timeout: 5000 });
  }

  /**
   * Verifies that the Lilly logo is not visible.
   */
  async assertLillyLogoNotVisible(): Promise<void> {
    await expect(this.lillyLogo).not.toBeVisible({ timeout: 5000 });
  }

  /**
   * Verifies that the header title matches the expected text.
   * @param expectedTitle - The expected header title text.
   */
  async assertHeaderTitleVisible(expectedTitle: string): Promise<void> {
    await expect(this.headerTitle).toHaveText(expectedTitle, { timeout: 5000 });
  }

  /**
   * Verifies that a section is visible.
   * @param locator - Locator for the section.
   */
  async assertSectionVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible({ timeout: 5000 });
  }

  /**
   * Verifies that a navigation item is visible in the top header.
   * @param navItemText - The text of the navigation item.
   */
  async assertNavItemVisible(navItemText: string): Promise<void> {
    await expect(this.topHeader.locator(`text=${navItemText}`)).toBeVisible({ timeout: 5000 });
  }

  /**
   * Verifies that a navigation item is not visible in the top header.
   * @param navItemText - The text of the navigation item.
   */
  async assertNavItemNotVisible(navItemText: string): Promise<void> {
    await expect(this.topHeader.locator(`text=${navItemText}`)).not.toBeVisible({ timeout: 5000 });
  }

  /**
   * Verifies that the CTA button is visible.
   * @param buttonText - The text of the CTA button.
   */
  async assertCTAButtonVisible(buttonText: string): Promise<void> {
    await expect(this.ctaButton).toHaveText(buttonText, { timeout: 5000 });
  }

  /**
   * Verifies that the "Home" tab is active.
   */
  async assertHomeTabActive(): Promise<void> {
    await expect(this.homeTab).toHaveClass(/active/, { timeout: 5000 });
  }

  /**
   * Verifies that the "Home" tab is not active.
   */
  async assertHomeTabNotActive(): Promise<void> {
    await expect(this.homeTab).not.toHaveClass(/active/, { timeout: 5000 });
  }
}