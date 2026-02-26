// Page Object: TestCsaLaunchpadNewPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for CSA Launchpad Home Page
 */
export class TestCsaLaunchpadNewPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get topHeader() { return this.page.locator('[data-testid="top-header"]'); }
  get homeTab() { return this.page.locator('[data-testid="home-tab"]'); }
  get automationPlatformDropdown() { return this.page.locator('[data-testid="automation-platform-dropdown"]'); }
  get marketplaceLink() { return this.page.locator('[data-testid="marketplace-link"]'); }
  get techZoneLink() { return this.page.locator('[data-testid="techzone-link"]'); }
  get adminConsoleLink() { return this.page.locator('[data-testid="admin-console-link"]'); }
  get submitIdeaButton() { return this.page.locator('[data-testid="submit-idea-button"]'); }
  get myLQS302Card() { return this.page.locator('[data-testid="my-lqs302-card"]'); }
  get myITAssetsCard() { return this.page.locator('[data-testid="my-it-assets-card"]'); }
  get myLQS302Icon() { return this.page.locator('[data-testid="my-lqs302-icon"]'); }
  get myLQS302Arrow() { return this.page.locator('[data-testid="my-lqs302-arrow"]'); }
  get myITAssetsIcon() { return this.page.locator('[data-testid="my-it-assets-icon"]'); }
  get myITAssetsArrow() { return this.page.locator('[data-testid="my-it-assets-arrow"]'); }

  // Actions
  /**
   * Navigate to the CSA Launchpad Home Page
   */
  async navigateToHomePage(): Promise<void> {
    await this.page.goto('https://qa.csalaunchpad.lilly.com');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Click on the "My LQS302 Risk Evaluations" card
   */
  async clickMyLQS302Card(): Promise<void> {
    await this.myLQS302Card.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Click on the "My IT Assets" card
   */
  async clickMyITAssetsCard(): Promise<void> {
    await this.myITAssetsCard.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Assert that an element is visible
   * @param locator - Locator of the element
   */
  async assertVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that an element is not visible
   * @param locator - Locator of the element
   */
  async assertNotVisible(locator: Locator): Promise<void> {
    await expect(locator).not.toBeVisible({ timeout: 5000 });
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

  /**
   * Assert redirection to a specific URL
   * @param expectedUrl - Expected URL after redirection
   */
  async assertRedirection(expectedUrl: string): Promise<void> {
    await expect(this.page).toHaveURL(expectedUrl, { timeout: 5000 });
  }
}