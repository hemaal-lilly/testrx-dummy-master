// Page Object: CsaLaunchpadHomePage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for CSA Launchpad Home Page.
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
  get myLqs302CardIcon() { return this.page.locator('[data-testid="my-lqs302-card-icon"]'); }
  get myLqs302CardArrow() { return this.page.locator('[data-testid="my-lqs302-card-arrow"]'); }
  get myItAssetsCardIcon() { return this.page.locator('[data-testid="my-it-assets-card-icon"]'); }
  get myItAssetsCardArrow() { return this.page.locator('[data-testid="my-it-assets-card-arrow"]'); }

  // Actions
  async navigateToHomePage(): Promise<void> {
    await this.page.goto('https://qa.csalaunchpad.lilly.com');
    await this.page.waitForLoadState('networkidle');
  }

  async clickMyLqs302Card(): Promise<void> {
    await this.myLqs302Card.click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickMyItAssetsCard(): Promise<void> {
    await this.myItAssetsCard.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectElementVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible({ timeout: 5000 });
  }

  async expectElementNotVisible(locator: Locator): Promise<void> {
    await expect(locator).not.toBeVisible({ timeout: 5000 });
  }

  async expectTabActive(locator: Locator): Promise<void> {
    await expect(locator).toHaveClass(/active/, { timeout: 5000 });
  }

  async expectTabNotActive(locator: Locator): Promise<void> {
    await expect(locator).not.toHaveClass(/active/, { timeout: 5000 });
  }
}