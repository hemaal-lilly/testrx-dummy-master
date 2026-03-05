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
  get myLQS302Card() { return this.page.locator('[data-testid="my-lqs302-card"]'); }
  get myITAssetsCard() { return this.page.locator('[data-testid="my-it-assets-card"]'); }

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

  async expectHomeTabHighlighted(): Promise<void> {
    await expect(this.homeTab).toHaveClass(/active/);
  }

  async expectHomeTabNotHighlighted(): Promise<void> {
    await expect(this.homeTab).not.toHaveClass(/active/);
  }

  async expectMyLQS302CardVisible(): Promise<void> {
    await expect(this.myLQS302Card).toBeVisible();
  }

  async expectMyITAssetsCardVisible(): Promise<void> {
    await expect(this.myITAssetsCard).toBeVisible();
  }

  async expectMyLQS302CardNotVisible(): Promise<void> {
    await expect(this.myLQS302Card).toBeHidden();
  }

  async expectMyITAssetsCardNotVisible(): Promise<void> {
    await expect(this.myITAssetsCard).toBeHidden();
  }

  async expectRedirectToPage(expectedUrl: string): Promise<void> {
    await expect(this.page).toHaveURL(expectedUrl);
  }
}