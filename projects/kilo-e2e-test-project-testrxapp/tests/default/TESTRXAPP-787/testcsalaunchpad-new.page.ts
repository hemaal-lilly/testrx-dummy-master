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
  get lqs302CardIcon() { return this.page.locator('[data-testid="lqs302-card-icon"]'); }
  get lqs302CardArrow() { return this.page.locator('[data-testid="lqs302-card-arrow"]'); }
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
  async expectHeaderNavigationItemsVisible(): Promise<void> {
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
    await expect(this.itAssetsCard).toBeVisible();
  }

  async expectCardDetails(card: Locator, icon: Locator, arrow: Locator): Promise<void> {
    await expect(card).toBeVisible();
    await expect(icon).toBeVisible();
    await expect(arrow).toBeVisible();
  }

  async expectRedirectToPage(expectedUrl: string): Promise<void> {
    await expect(this.page).toHaveURL(expectedUrl);
  }

  async expectCardNotVisible(card: Locator): Promise<void> {
    await expect(card).not.toBeVisible();
  }
}