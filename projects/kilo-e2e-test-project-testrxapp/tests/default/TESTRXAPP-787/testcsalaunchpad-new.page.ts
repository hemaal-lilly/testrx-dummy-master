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
  get myLqsCard() { return this.page.locator('[data-testid="my-lqs-card"]'); }
  get myItAssetsCard() { return this.page.locator('[data-testid="my-it-assets-card"]'); }
  get myLqsCardIcon() { return this.page.locator('[data-testid="my-lqs-card-icon"]'); }
  get myLqsCardArrow() { return this.page.locator('[data-testid="my-lqs-card-arrow"]'); }
  get myItAssetsCardIcon() { return this.page.locator('[data-testid="my-it-assets-card-icon"]'); }
  get myItAssetsCardArrow() { return this.page.locator('[data-testid="my-it-assets-card-arrow"]'); }

  // Actions
  async navigateToHomePage(): Promise<void> {
    await this.page.goto('https://qa.csalaunchpad.lilly.com');
    await this.page.waitForLoadState('networkidle');
  }

  async clickMyLqsCard(): Promise<void> {
    await this.myLqsCard.click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickMyItAssetsCard(): Promise<void> {
    await this.myItAssetsCard.click();
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

  async expectMyLqsCardVisible(): Promise<void> {
    await expect(this.myLqsCard).toBeVisible();
    await expect(this.myLqsCardIcon).toBeVisible();
    await expect(this.myLqsCardArrow).toBeVisible();
  }

  async expectMyItAssetsCardVisible(): Promise<void> {
    await expect(this.myItAssetsCard).toBeVisible();
    await expect(this.myItAssetsCardIcon).toBeVisible();
    await expect(this.myItAssetsCardArrow).toBeVisible();
  }

  async expectMyItAssetsCardNotVisible(): Promise<void> {
    await expect(this.myItAssetsCard).toBeHidden();
  }

  async expectRedirectToLqsPage(): Promise<void> {
    await expect(this.page).toHaveURL(/\/lqs302-risk-evaluations/);
  }

  async expectRedirectToItAssetsPage(): Promise<void> {
    await expect(this.page).toHaveURL(/\/my-it-assets/);
  }
}