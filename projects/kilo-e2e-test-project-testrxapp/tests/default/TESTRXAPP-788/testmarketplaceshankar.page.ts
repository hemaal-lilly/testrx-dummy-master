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
  get topHeader() { return this.page.locator('[data-testid="top-header"]'); }
  get ctaButton() { return this.page.locator('[data-testid="cta-submit-idea"]'); }
  get homeTab() { return this.page.locator('[data-testid="home-tab"]'); }

  // Actions
  async navigate(): Promise<void> {
    await this.page.goto('https://qa.automate.lilly.com');
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async assertLillyLogoVisible(): Promise<void> {
    await expect(this.lillyLogo).toBeVisible({ timeout: 5000 });
  }

  async assertLillyLogoNotVisible(): Promise<void> {
    await expect(this.lillyLogo).not.toBeVisible({ timeout: 5000 });
  }

  async assertHeaderTitleVisible(title: string): Promise<void> {
    await expect(this.headerTitle).toHaveText(title, { timeout: 5000 });
  }

  async assertSectionVisible(section: Locator): Promise<void> {
    await expect(section).toBeVisible({ timeout: 5000 });
  }

  async assertTopHeaderItemVisible(item: string): Promise<void> {
    await expect(this.topHeader.locator(`text="${item}"`)).toBeVisible({ timeout: 5000 });
  }

  async assertTopHeaderItemNotVisible(item: string): Promise<void> {
    await expect(this.topHeader.locator(`text="${item}"`)).not.toBeVisible({ timeout: 5000 });
  }

  async assertCTABtnVisible(): Promise<void> {
    await expect(this.ctaButton).toBeVisible({ timeout: 5000 });
  }

  async assertHomeTabActive(): Promise<void> {
    await expect(this.homeTab).toHaveClass(/active/, { timeout: 5000 });
  }

  async assertHomeTabNotActive(): Promise<void> {
    await expect(this.homeTab).not.toHaveClass(/active/, { timeout: 5000 });
  }
}