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
  async expectHeaderItemVisible(item: Locator, itemName: string): Promise<void> {
    await expect(item, `${itemName} should be visible in the top header`).toBeVisible({ timeout: 5000 });
  }

  async expectCardVisible(card: Locator, cardName: string): Promise<void> {
    await expect(card, `${cardName} card should be visible`).toBeVisible({ timeout: 5000 });
  }

  async expectCardNotVisible(card: Locator, cardName: string): Promise<void> {
    await expect(card, `${cardName} card should not be visible`).not.toBeVisible({ timeout: 5000 });
  }

  async expectCardClickable(card: Locator, cardName: string): Promise<void> {
    await expect(card, `${cardName} card should be clickable`).toBeEnabled({ timeout: 5000 });
  }

  async expectCardNotClickable(card: Locator, cardName: string): Promise<void> {
    await expect(card, `${cardName} card should not be clickable`).not.toBeEnabled({ timeout: 5000 });
  }

  async expectTabActive(tab: Locator, tabName: string): Promise<void> {
    await expect(tab, `${tabName} tab should be active`).toHaveClass(/active/, { timeout: 5000 });
  }

  async expectTabNotActive(tab: Locator, tabName: string): Promise<void> {
    await expect(tab, `${tabName} tab should not be active`).not.toHaveClass(/active/, { timeout: 5000 });
  }
}