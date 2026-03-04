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

  async expectCardVisible(card: Locator): Promise<void> {
    await expect(card).toBeVisible();
  }

  async expectCardNotVisible(card: Locator): Promise<void> {
    await expect(card).not.toBeVisible();
  }

  async expectCardIconVisible(card: Locator): Promise<void> {
    const icon = card.locator('[data-testid="card-icon"]');
    await expect(icon).toBeVisible();
  }

  async expectCardRightArrowVisible(card: Locator): Promise<void> {
    const rightArrow = card.locator('[data-testid="card-right-arrow"]');
    await expect(rightArrow).toBeVisible();
  }

  async expectRedirectedTo(urlPart: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(urlPart));
  }
}