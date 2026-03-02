// Page Object: EnterpriseAutomationHomePage
import { Page, Locator, expect } from '@playwright/test';

export class EnterpriseAutomationHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get lillyLogo() { return this.page.locator('[data-testid="lilly-logo"]'); }
  get headerTitle() { return this.page.locator('h1:has-text("Enterprise Automation")'); }
  get headerSection() { return this.page.locator('[data-testid="header-section"]'); }
  get heroBanner() { return this.page.locator('[data-testid="hero-banner"]'); }
  get cardsSection() { return this.page.locator('[data-testid="cards-section"]'); }
  get topHeader() { return this.page.locator('[data-testid="top-header"]'); }
  get ctaButton() { return this.page.locator('button:has-text("Submit an Idea")'); }
  get homeTab() { return this.page.locator('[data-testid="home-tab"]'); }

  // Actions
  async navigate(): Promise<void> {
    await this.page.goto('https://qa.automate.lilly.com');
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectLillyLogoVisible(): Promise<void> {
    await expect(this.lillyLogo).toBeVisible({ timeout: 5000 });
  }

  async expectHeaderTitleVisible(): Promise<void> {
    await expect(this.headerTitle).toBeVisible({ timeout: 5000 });
  }

  async expectHeaderSectionVisible(): Promise<void> {
    await expect(this.headerSection).toBeVisible({ timeout: 5000 });
  }

  async expectHeroBannerVisible(): Promise<void> {
    await expect(this.heroBanner).toBeVisible({ timeout: 5000 });
  }

  async expectCardsSectionVisible(): Promise<void> {
    await expect(this.cardsSection).toBeVisible({ timeout: 5000 });
  }

  async expectTopHeaderContains(text: string): Promise<void> {
    await expect(this.topHeader.locator(`text=${text}`)).toBeVisible({ timeout: 5000 });
  }

  async expectCTASubmitButtonVisible(): Promise<void> {
    await expect(this.ctaButton).toBeVisible({ timeout: 5000 });
  }

  async expectHomeTabActive(): Promise<void> {
    await expect(this.homeTab).toHaveClass(/active/, { timeout: 5000 });
  }

  async expectLillyLogoNotVisible(): Promise<void> {
    await expect(this.lillyLogo).not.toBeVisible({ timeout: 5000 });
  }

  async expectTopHeaderDoesNotContain(text: string): Promise<void> {
    await expect(this.topHeader.locator(`text=${text}`)).not.toBeVisible({ timeout: 5000 });
  }

  async expectHomeTabNotActive(): Promise<void> {
    await expect(this.homeTab).not.toHaveClass(/active/, { timeout: 5000 });
  }
}