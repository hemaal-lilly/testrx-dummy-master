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
  get homeTab() { return this.page.locator('[data-testid="home-tab"]'); }
  get automationPlatformDropdown() { return this.page.locator('[data-testid="automation-platform-dropdown"]'); }
  get marketplaceLink() { return this.page.locator('[data-testid="marketplace-link"]'); }
  get techZoneLink() { return this.page.locator('[data-testid="techzone-link"]'); }
  get adminConsoleLink() { return this.page.locator('[data-testid="admin-console-link"]'); }
  get submitIdeaButton() { return this.page.locator('[data-testid="submit-idea-button"]'); }
  get lqs302Card() { return this.page.locator('[data-testid="lqs302-card"]'); }
  get itAssetsCard() { return this.page.locator('[data-testid="it-assets-card"]'); }
  get lqs302CardIcon() { return this.page.locator('[data-testid="lqs302-card-icon"]'); }
  get lqs302CardArrow() { return this.page.locator('[data-testid="lqs302-card-arrow"]'); }
  get itAssetsCardIcon() { return this.page.locator('[data-testid="it-assets-card-icon"]'); }
  get itAssetsCardArrow() { return this.page.locator('[data-testid="it-assets-card-arrow"]'); }

  // Actions
  /**
   * Navigate to the CSA Launchpad Home Page
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://qa.csalaunchpad.lilly.com');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Click on the "My LQS302 Risk Evaluations (LEval)" card
   */
  async clickLqs302Card(): Promise<void> {
    await this.lqs302Card.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Click on the "My IT Assets" card
   */
  async clickItAssetsCard(): Promise<void> {
    await this.itAssetsCard.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Assert that the specified element is visible
   * @param locator - Locator to check visibility
   */
  async assertVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that the specified element is not visible
   * @param locator - Locator to check invisibility
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
}