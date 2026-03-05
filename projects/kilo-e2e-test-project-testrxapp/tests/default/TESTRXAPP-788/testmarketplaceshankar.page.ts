// Page Object: TestMarketplaceShankarPage
import { Page, Locator, expect } from '@playwright/test';

export class TestMarketplaceShankarPage {
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
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async assertLillyLogoVisible(): Promise<void> {
    await expect(this.lillyLogo).toBeVisible({ timeout: 5000 });
  }

  async assertLillyLogoNotVisible(): Promise<void> {
    await expect(this.lillyLogo).toBeHidden({ timeout: 5000 });
  }

  async assertHeaderTitleVisible(): Promise<void> {
    await expect(this.headerTitle).toBeVisible({ timeout: 5000 });
  }

  async assertHeaderSectionVisible(): Promise<void> {
    await expect(this.headerSection).toBeVisible({ timeout: 5000 });
  }

  async assertHeroBannerVisible(): Promise<void> {
    await expect(this.heroBanner).toBeVisible({ timeout: 5000 });
  }

  async assertCardsSectionVisible(): Promise<void> {
    await expect(this.cardsSection).toBeVisible({ timeout: 5000 });
  }

  async assertTopHeaderContains(text: string): Promise<void> {
    await expect(this.topHeader).toContainText(text, { timeout: 5000 });
  }

  async assertTopHeaderDoesNotContain(text: string): Promise<void> {
    await expect(this.topHeader).not.toContainText(text, { timeout: 5000 });
  }

  async assertCTAButtonVisible(): Promise<void> {
    await expect(this.ctaButton).toBeVisible({ timeout: 5000 });
  }

  async assertHomeTabActive(): Promise<void> {
    await expect(this.homeTab).toHaveClass(/active/, { timeout: 5000 });
  }

  async assertHomeTabNotActive(): Promise<void> {
    await expect(this.homeTab).not.toHaveClass(/active/, { timeout: 5000 });
  }
}