// Page Object: EnterpriseAutomationPage
import { Page, Locator, expect } from '@playwright/test';

export class EnterpriseAutomationPage {
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
  get topHeader() { return this.page.locator('[data-testid="top-header"]'); }
  get ctaButton() { return this.page.locator('[data-testid="cta-submit-idea"]'); }
  get homeTab() { return this.page.locator('[data-testid="home-tab"]'); }

  // Actions
  async navigateToHomePage(): Promise<void> {
    await this.page.goto('https://qa.automate.lilly.com');
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async assertLogoVisibility(shouldBeVisible: boolean): Promise<void> {
    if (shouldBeVisible) {
      await expect(this.lillyLogo).toBeVisible({ timeout: 5000 });
    } else {
      await expect(this.lillyLogo).not.toBeVisible({ timeout: 5000 });
    }
  }

  async assertHeaderTitleVisibility(title: string): Promise<void> {
    await expect(this.headerTitle).toHaveText(title, { timeout: 5000 });
  }

  async assertSectionVisibility(section: Locator): Promise<void> {
    await expect(section).toBeVisible({ timeout: 5000 });
  }

  async assertNavigationItemVisibility(item: string, shouldBeVisible: boolean): Promise<void> {
    const navItem = this.topHeader.locator(`text=${item}`);
    if (shouldBeVisible) {
      await expect(navItem).toBeVisible({ timeout: 5000 });
    } else {
      await expect(navItem).not.toBeVisible({ timeout: 5000 });
    }
  }

  async assertCTAButtonVisibility(shouldBeVisible: boolean): Promise<void> {
    if (shouldBeVisible) {
      await expect(this.ctaButton).toBeVisible({ timeout: 5000 });
    } else {
      await expect(this.ctaButton).not.toBeVisible({ timeout: 5000 });
    }
  }

  async assertTabActive(tabName: string, shouldBeActive: boolean): Promise<void> {
    const tab = this.homeTab.locator(`text=${tabName}`);
    if (shouldBeActive) {
      await expect(tab).toHaveClass(/active/, { timeout: 5000 });
    } else {
      await expect(tab).not.toHaveClass(/active/, { timeout: 5000 });
    }
  }
}