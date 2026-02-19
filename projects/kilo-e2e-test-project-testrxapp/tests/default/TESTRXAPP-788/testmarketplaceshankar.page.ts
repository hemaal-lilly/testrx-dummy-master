// Page Object: EnterpriseAutomationHomePage
import { Page, Locator, expect } from '@playwright/test';

export class EnterpriseAutomationHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get lillyLogo() { return this.page.locator('[data-testid="lilly-logo"]'); }
  get headerTitle() { return this.page.locator('[data-testid="header-title"]'); }
  get headerSection() { return this.page.locator('[data-testid="header-section"]'); }
  get heroBanner() { return this.page.locator('[data-testid="hero-banner"]'); }
  get cardsSection() { return this.page.locator('[data-testid="cards-section"]'); }
  get topNavBar() { return this.page.locator('[data-testid="top-nav-bar"]'); }
  get homeNavItem() { return this.page.locator('[data-testid="nav-home"]'); }
  get automationPlatformDropdown() { return this.page.locator('[data-testid="nav-automation-platform"]'); }
  get marketplaceNavItem() { return this.page.locator('[data-testid="nav-marketplace"]'); }
  get techZoneNavItem() { return this.page.locator('[data-testid="nav-techzone"]'); }
  get adminConsoleNavItem() { return this.page.locator('[data-testid="nav-admin-console"]'); }
  get submitIdeaButton() { return this.page.locator('[data-testid="cta-submit-idea"]'); }
  get automationPlatformDropdownMenu() { return this.page.locator('[data-testid="automation-platform-menu"]'); }

  // Actions
  async navigateToHomepage(): Promise<void> {
    await this.page.goto('https://qa.automate.lilly.com');
    await this.page.waitForLoadState('networkidle');
  }

  async refreshBrowser(): Promise<void> {
    await this.page.reload();
    await this.page.waitForLoadState('networkidle');
  }

  async resizeBrowser(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
  }

  async setZoomLevel(zoomPercentage: number): Promise<void> {
    await this.page.evaluate((zoom) => {
      document.body.style.zoom = `${zoom}%`;
    }, zoomPercentage);
  }

  async toggleAutomationPlatformDropdown(): Promise<void> {
    await this.automationPlatformDropdown.click();
  }

  // Assertions
  async expectElementVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible({ timeout: 5000 });
  }

  async expectElementNotVisible(locator: Locator): Promise<void> {
    await expect(locator).not.toBeVisible({ timeout: 5000 });
  }

  async expectHeaderTitleText(expectedText: string): Promise<void> {
    await expect(this.headerTitle).toHaveText(expectedText, { timeout: 5000 });
  }

  async expectNavItemActive(navItem: Locator): Promise<void> {
    await expect(navItem).toHaveClass(/active/, { timeout: 5000 });
  }

  async expectNavItemNotActive(navItem: Locator): Promise<void> {
    await expect(navItem).not.toHaveClass(/active/, { timeout: 5000 });
  }
}