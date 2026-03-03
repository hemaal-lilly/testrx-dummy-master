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
  get myLQS302Card() { return this.page.locator('[data-testid="my-lqs302-card"]'); }
  get myITAssetsCard() { return this.page.locator('[data-testid="my-it-assets-card"]'); }

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

  async expectHomeTabActive(): Promise<void> {
    await expect(this.homeTab).toHaveClass(/active/, { timeout: 5000 });
  }

  async expectHomeTabNotActive(): Promise<void> {
    await expect(this.homeTab).not.toHaveClass(/active/, { timeout: 5000 });
  }

  async expectCardVisible(cardLocator: Locator): Promise<void> {
    await expect(cardLocator).toBeVisible({ timeout: 5000 });
  }

  async expectCardNotVisible(cardLocator: Locator): Promise<void> {
    await expect(cardLocator).not.toBeVisible({ timeout: 5000 });
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