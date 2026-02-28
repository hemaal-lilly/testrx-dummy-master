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
  get submitIdeaButton() { return this.page.locator('[data-testid="submit-idea-btn"]'); }
  get automationPlatformDropdown() { return this.page.locator('[data-testid="automation-platform-dropdown"]'); }
  get marketplaceLink() { return this.page.locator('[data-testid="marketplace-link"]'); }
  get techZoneLink() { return this.page.locator('[data-testid="techzone-link"]'); }
  get adminConsoleLink() { return this.page.locator('[data-testid="admin-console-link"]'); }
  get myLQS302Card() { return this.page.locator('[data-testid="my-lqs302-card"]'); }
  get myITAssetsCard() { return this.page.locator('[data-testid="my-it-assets-card"]'); }
  get myLQS302Icon() { return this.page.locator('[data-testid="my-lqs302-icon"]'); }
  get myLQS302Arrow() { return this.page.locator('[data-testid="my-lqs302-arrow"]'); }
  get myITAssetsIcon() { return this.page.locator('[data-testid="my-it-assets-icon"]'); }
  get myITAssetsArrow() { return this.page.locator('[data-testid="my-it-assets-arrow"]'); }

  // Actions
  async navigateToHomePage(): Promise<void> {
    await this.page.goto('https://qa.csalaunchpad.lilly.com');
    await this.page.waitForLoadState('networkidle');
  }

  async clickMyLQS302Card(): Promise<void> {
    await this.myLQS302Card.click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickMyITAssetsCard(): Promise<void> {
    await this.myITAssetsCard.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectHeaderItemVisible(itemLocator: Locator): Promise<void> {
    await expect(itemLocator).toBeVisible({ timeout: 5000 });
  }

  async expectCardVisible(cardLocator: Locator): Promise<void> {
    await expect(cardLocator).toBeVisible({ timeout: 5000 });
  }

  async expectCardIconVisible(iconLocator: Locator): Promise<void> {
    await expect(iconLocator).toBeVisible({ timeout: 5000 });
  }

  async expectCardArrowVisible(arrowLocator: Locator): Promise<void> {
    await expect(arrowLocator).toBeVisible({ timeout: 5000 });
  }

  async expectTabActive(tabLocator: Locator): Promise<void> {
    await expect(tabLocator).toHaveClass(/active/, { timeout: 5000 });
  }

  async expectTabNotActive(tabLocator: Locator): Promise<void> {
    await expect(tabLocator).not.toHaveClass(/active/, { timeout: 5000 });
  }

  async expectElementNotVisible(elementLocator: Locator): Promise<void> {
    await expect(elementLocator).not.toBeVisible({ timeout: 5000 });
  }
}