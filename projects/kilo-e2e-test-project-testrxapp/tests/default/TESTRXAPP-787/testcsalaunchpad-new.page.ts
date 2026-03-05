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
  get marketplaceLink() { return this.page.locator('[data-testid="marketplace-link"]'); }
  get techZoneLink() { return this.page.locator('[data-testid="techzone-link"]'); }
  get adminConsoleLink() { return this.page.locator('[data-testid="admin-console-link"]'); }
  get submitIdeaButton() { return this.page.locator('[data-testid="submit-idea-button"]'); }
  get myLqs302Card() { return this.page.locator('[data-testid="my-lqs302-card"]'); }
  get myLqs302CardIcon() { return this.page.locator('[data-testid="my-lqs302-card-icon"]'); }
  get myLqs302CardArrow() { return this.page.locator('[data-testid="my-lqs302-card-arrow"]'); }
  get myItAssetsCard() { return this.page.locator('[data-testid="my-it-assets-card"]'); }
  get myItAssetsCardIcon() { return this.page.locator('[data-testid="my-it-assets-card-icon"]'); }
  get myItAssetsCardArrow() { return this.page.locator('[data-testid="my-it-assets-card-arrow"]'); }

  // Actions
  async navigateToHomePage(url: string): Promise<void> {
    await this.page.goto(url);
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
  async expectHeaderNavigationItems(): Promise<void> {
    await expect(this.homeTab).toBeVisible();
    await expect(this.automationPlatformDropdown).toBeVisible();
    await expect(this.marketplaceLink).toBeVisible();
    await expect(this.techZoneLink).toBeVisible();
    await expect(this.adminConsoleLink).toBeVisible();
  }

  async expectSubmitIdeaButtonVisible(): Promise<void> {
    await expect(this.submitIdeaButton).toBeVisible();
  }

  async expectHomeTabActive(): Promise<void> {
    await expect(this.homeTab).toHaveClass(/active/);
  }

  async expectHomeTabNotActive(): Promise<void> {
    await expect(this.homeTab).not.toHaveClass(/active/);
  }

  async expectMyLqs302CardVisible(): Promise<void> {
    await expect(this.myLqs302Card).toBeVisible();
    await expect(this.myLqs302CardIcon).toBeVisible();
    await expect(this.myLqs302CardArrow).toBeVisible();
  }

  async expectMyItAssetsCardVisible(): Promise<void> {
    await expect(this.myItAssetsCard).toBeVisible();
    await expect(this.myItAssetsCardIcon).toBeVisible();
    await expect(this.myItAssetsCardArrow).toBeVisible();
  }

  async expectMyItAssetsCardNotVisible(): Promise<void> {
    await expect(this.myItAssetsCard).toBeHidden();
  }
}