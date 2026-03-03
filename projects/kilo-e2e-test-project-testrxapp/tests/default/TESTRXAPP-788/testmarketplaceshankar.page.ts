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
  get headerTitle() { return this.page.locator('[data-testid="header-title"]'); }
  get headerSection() { return this.page.locator('[data-testid="header-section"]'); }
  get heroBanner() { return this.page.locator('[data-testid="hero-banner"]'); }
  get cardsSection() { return this.page.locator('[data-testid="cards-section"]'); }
  get topHeader() { return this.page.locator('[data-testid="top-header"]'); }
  get ctaButton() { return this.page.locator('[data-testid="cta-submit-idea"]'); }
  get activeHomeTab() { return this.page.locator('[data-testid="home-tab-active"]'); }
  get inactiveHomeTab() { return this.page.locator('[data-testid="home-tab-inactive"]'); }

  // Actions
  /**
   * Navigate to the Enterprise Automation homepage
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
   * Assert that the header title matches the expected text
   * @param expectedTitle - Expected title text
   */
  async assertHeaderTitleVisible(expectedTitle: string): Promise<void> {
    await expect(this.headerTitle).toHaveText(expectedTitle, { timeout: 5000 });
  }

  /**
   * Assert that a navigation item is visible in the top header
   * @param item - Navigation item text
   */
  async assertNavigationItemVisible(item: string): Promise<void> {
    await expect(this.topHeader.locator(`text=${item}`)).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that a navigation item is not visible in the top header
   * @param item - Navigation item text
   */
  async assertNavigationItemNotVisible(item: string): Promise<void> {
    await expect(this.topHeader.locator(`text=${item}`)).not.toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that the CTA button is visible
   * @param buttonText - Expected button text
   */
  async assertCTAButtonVisible(buttonText: string): Promise<void> {
    await expect(this.ctaButton).toHaveText(buttonText, { timeout: 5000 });
  }

  /**
   * Assert that the "Home" tab is active
   */
  async assertHomeTabActive(): Promise<void> {
    await expect(this.activeHomeTab).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that the "Home" tab is inactive
   */
  async assertHomeTabInactive(): Promise<void> {
    await expect(this.inactiveHomeTab).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that a section is visible
   * @param section - Locator for the section
   */
  async assertSectionVisible(section: Locator): Promise<void> {
    await expect(section).toBeVisible({ timeout: 5000 });
  }
}