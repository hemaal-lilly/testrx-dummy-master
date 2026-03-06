// Page Object: EnterpriseAutomationHomePage
import { Page, Locator, expect } from '@playwright/test';

export class EnterpriseAutomationHomePage {
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
  get ctaButton() { return this.page.locator('button:has-text("Submit an Idea")'); }
  get homeTab() { return this.page.locator('[data-testid="home-tab"]'); }

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
   * Assert that a section is visible
   * @param section - Locator for the section
   */
  async assertSectionVisible(section: Locator): Promise<void> {
    await expect(section).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that a navigation item is visible in the top header
   * @param itemText - The text of the navigation item
   */
  async assertNavItemVisible(itemText: string): Promise<void> {
    await expect(this.topHeader.locator(`text=${itemText}`)).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that a navigation item is not visible in the top header
   * @param itemText - The text of the navigation item
   */
  async assertNavItemNotVisible(itemText: string): Promise<void> {
    await expect(this.topHeader.locator(`text=${itemText}`)).not.toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that the CTA button is visible
   * @param buttonText - The text of the CTA button
   */
  async assertCTAButtonVisible(buttonText: string): Promise<void> {
    await expect(this.ctaButton).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that the home tab is active
   */
  async assertHomeTabActive(): Promise<void> {
    await expect(this.homeTab).toHaveClass(/active/, { timeout: 5000 });
  }

  /**
   * Assert that the home tab is not active
   */
  async assertHomeTabNotActive(): Promise<void> {
    await expect(this.homeTab).not.toHaveClass(/active/, { timeout: 5000 });
  }
}