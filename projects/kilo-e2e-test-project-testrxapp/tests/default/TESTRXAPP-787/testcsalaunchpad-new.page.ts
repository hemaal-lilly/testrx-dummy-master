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
  get submitIdeaButton() { return this.page.locator('[data-testid="submit-idea-button"]'); }
  get myLQS302Card() { return this.page.locator('[data-testid="my-lqs302-card"]'); }
  get myITAssetsCard() { return this.page.locator('[data-testid="my-it-assets-card"]'); }
  get cardIcon() { return this.page.locator('[data-testid="card-icon"]'); }
  get cardArrow() { return this.page.locator('[data-testid="card-arrow"]'); }

  // Actions
  /**
   * Navigate to the CSA Launchpad Home Page
   */
  async navigateToHomePage(): Promise<void> {
    await this.page.goto('https://qa.csalaunchpad.lilly.com');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Click on a specific card
   * @param cardLocator - Locator for the card to click
   */
  async clickCard(cardLocator: Locator): Promise<void> {
    await expect(cardLocator).toBeVisible({ timeout: 5000 });
    await cardLocator.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Assert that a specific element is visible
   * @param locator - Locator for the element
   */
  async expectElementVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that a specific element is not visible
   * @param locator - Locator for the element
   */
  async expectElementNotVisible(locator: Locator): Promise<void> {
    await expect(locator).not.toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that the home tab is active
   */
  async expectHomeTabActive(): Promise<void> {
    await expect(this.homeTab).toHaveClass(/active/, { timeout: 5000 });
  }

  /**
   * Assert that the home tab is not active
   */
  async expectHomeTabNotActive(): Promise<void> {
    await expect(this.homeTab).not.toHaveClass(/active/, { timeout: 5000 });
  }
}