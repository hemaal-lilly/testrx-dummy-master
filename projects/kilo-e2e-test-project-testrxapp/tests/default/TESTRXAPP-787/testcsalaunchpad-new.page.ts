// Page Object: TestCsaLaunchpadNewPage
import { Page, Locator, expect } from '@playwright/test';

export class TestCsaLaunchpadNewPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get topHeader() { return this.page.locator('[data-testid="top-header"]'); }
  get homeTab() { return this.page.locator('[data-testid="home-tab"]'); }
  get submitIdeaButton() { return this.page.locator('[data-testid="submit-idea-button"]'); }
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
  async navigateToHomePage(baseUrl: string): Promise<void> {
    await this.page.goto(baseUrl);
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
  async expectElementVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible({ timeout: 5000 });
  }

  async expectElementNotVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeHidden({ timeout: 5000 });
  }

  async expectElementHighlighted(locator: Locator): Promise<void> {
    await expect(locator).toHaveClass(/active|selected/, { timeout: 5000 });
  }

  async expectElementNotHighlighted(locator: Locator): Promise<void> {
    await expect(locator).not.toHaveClass(/active|selected/, { timeout: 5000 });
  }

  async expectRedirect(expectedUrl: string): Promise<void> {
    await expect(this.page).toHaveURL(expectedUrl, { timeout: 5000 });
  }
}