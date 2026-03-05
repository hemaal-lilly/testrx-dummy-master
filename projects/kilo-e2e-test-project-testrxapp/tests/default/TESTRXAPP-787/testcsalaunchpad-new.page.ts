// Page Object: CsaLaunchpadHomePage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for CSA Launchpad Home Page
 */
export class CsaLaunchpadHomePage {
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
  get myLqs302Card() { return this.page.locator('[data-testid="my-lqs302-card"]'); }
  get myItAssetsCard() { return this.page.locator('[data-testid="my-it-assets-card"]'); }

  // Actions
  async navigateToHomePage(): Promise<void> {
    await this.page.goto('https://qa.csalaunchpad.lilly.com');
    await this.page.waitForLoadState('networkidle');
  }

  async clickCard(cardLocator: Locator): Promise<void> {
    await cardLocator.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectElementVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible({ timeout: 5000 });
  }

  async expectElementNotVisible(locator: Locator): Promise<void> {
    await expect(locator).not.toBeVisible({ timeout: 5000 });
  }

  async expectTabActive(tabLocator: Locator): Promise<void> {
    await expect(tabLocator).toHaveClass(/active/, { timeout: 5000 });
  }

  async expectTabNotActive(tabLocator: Locator): Promise<void> {
    await expect(tabLocator).not.toHaveClass(/active/, { timeout: 5000 });
  }

  async expectCardIconVisible(cardLocator: Locator): Promise<void> {
    const icon = cardLocator.locator('[data-testid="card-icon"]');
    await expect(icon).toBeVisible({ timeout: 5000 });
  }

  async expectCardArrowVisible(cardLocator: Locator): Promise<void> {
    const arrow = cardLocator.locator('[data-testid="card-arrow"]');
    await expect(arrow).toBeVisible({ timeout: 5000 });
  }
}