// Page Object: TestCsaLaunchpadNewPage
import { Page, Locator, expect } from '@playwright/test';

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
  async expectHeaderNavigationVisible(): Promise<void> {
    await expect(this.homeTab).toBeVisible({ timeout: 5000 });
    await expect(this.automationPlatformDropdown).toBeVisible({ timeout: 5000 });
    await expect(this.marketplaceLink).toBeVisible({ timeout: 5000 });
    await expect(this.techZoneLink).toBeVisible({ timeout: 5000 });
    await expect(this.adminConsoleLink).toBeVisible({ timeout: 5000 });
  }

  async expectSubmitIdeaButtonVisible(): Promise<void> {
    await expect(this.submitIdeaButton).toBeVisible({ timeout: 5000 });
  }

  async expectHomeTabActive(): Promise<void> {
    await expect(this.homeTab).toHaveClass(/active/, { timeout: 5000 });
  }

  async expectHomeTabNotActive(): Promise<void> {
    await expect(this.homeTab).not.toHaveClass(/active/, { timeout: 5000 });
  }

  async expectCardVisible(card: Locator): Promise<void> {
    await expect(card).toBeVisible({ timeout: 5000 });
  }

  async expectCardNotVisible(card: Locator): Promise<void> {
    await expect(card).not.toBeVisible({ timeout: 5000 });
  }

  async expectRedirectedTo(url: string): Promise<void> {
    await expect(this.page).toHaveURL(url, { timeout: 5000 });
  }
}