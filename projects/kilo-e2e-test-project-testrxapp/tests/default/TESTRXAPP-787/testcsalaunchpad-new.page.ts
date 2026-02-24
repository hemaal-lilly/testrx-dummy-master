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
  get lqs302Card() { return this.page.locator('[data-testid="lqs302-card"]'); }
  get lqs302CardIcon() { return this.page.locator('[data-testid="lqs302-card-icon"]'); }
  get lqs302CardArrow() { return this.page.locator('[data-testid="lqs302-card-arrow"]'); }
  get itAssetsCard() { return this.page.locator('[data-testid="it-assets-card"]'); }
  get itAssetsCardIcon() { return this.page.locator('[data-testid="it-assets-card-icon"]'); }
  get itAssetsCardArrow() { return this.page.locator('[data-testid="it-assets-card-arrow"]'); }

  // Actions
  async navigateToHomePage(): Promise<void> {
    await this.page.goto('https://qa.csalaunchpad.lilly.com');
    await this.page.waitForLoadState('networkidle');
  }

  async clickLqs302Card(): Promise<void> {
    await this.lqs302Card.click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickItAssetsCard(): Promise<void> {
    await this.itAssetsCard.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectHeaderItemVisible(itemLocator: Locator): Promise<void> {
    await expect(itemLocator).toBeVisible({ timeout: 5000 });
  }

  async expectCardVisible(cardLocator: Locator): Promise<void> {
    await expect(cardLocator).toBeVisible({ timeout: 5000 });
  }

  async expectCardIconVisible(cardIconLocator: Locator): Promise<void> {
    await expect(cardIconLocator).toBeVisible({ timeout: 5000 });
  }

  async expectCardArrowVisible(cardArrowLocator: Locator): Promise<void> {
    await expect(cardArrowLocator).toBeVisible({ timeout: 5000 });
  }

  async expectHomeTabActive(): Promise<void> {
    await expect(this.homeTab).toHaveClass(/active/, { timeout: 5000 });
  }

  async expectHomeTabNotActive(): Promise<void> {
    await expect(this.homeTab).not.toHaveClass(/active/, { timeout: 5000 });
  }

  async expectRedirectedTo(url: string): Promise<void> {
    await expect(this.page).toHaveURL(url, { timeout: 5000 });
  }
}