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
  async expectHeaderItemsVisible(): Promise<void> {
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

  async expectCardsVisible(): Promise<void> {
    await expect(this.lqs302Card).toBeVisible();
    await expect(this.lqs302CardIcon).toBeVisible();
    await expect(this.lqs302CardArrow).toBeVisible();
    await expect(this.itAssetsCard).toBeVisible();
    await expect(this.itAssetsCardIcon).toBeVisible();
    await expect(this.itAssetsCardArrow).toBeVisible();
  }

  async expectLqs302CardRedirect(): Promise<void> {
    await expect(this.page).toHaveURL(/lqs302-risk-evaluations/);
  }

  async expectItAssetsCardRedirect(): Promise<void> {
    await expect(this.page).toHaveURL(/my-it-assets/);
  }

  async expectItAssetsCardNotVisible(): Promise<void> {
    await expect(this.itAssetsCard).not.toBeVisible();
  }
}