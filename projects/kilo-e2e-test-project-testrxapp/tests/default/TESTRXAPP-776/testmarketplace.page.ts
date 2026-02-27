// Page Object: MarketplacePage
import { Page, Locator, expect } from '@playwright/test';

export class MarketplacePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get heroSection() { return this.page.locator('[data-testid="hero-section"]'); }
  get heroHeading() { return this.page.locator('[data-testid="hero-heading"]'); }
  get heroDescription() { return this.page.locator('[data-testid="hero-description"]'); }
  get getStartedButton() { return this.page.locator('[data-testid="get-started-button"]'); }
  get heroImage() { return this.page.locator('[data-testid="hero-image"]'); }
  get cardsSectionTitle() { return this.page.locator('[data-testid="cards-section-title"]'); }
  get cards() { return this.page.locator('[data-testid="card"]'); }
  get cardTitles() { return this.page.locator('[data-testid="card-title"]'); }

  // Actions
  async navigateToMarketplace(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  async refreshPage(): Promise<void> {
    await this.page.reload();
    await this.page.waitForLoadState('networkidle');
  }

  async hardReload(): Promise<void> {
    await this.page.evaluate(() => location.reload(true));
    await this.page.waitForLoadState('networkidle');
  }

  async scrollToCardsSection(): Promise<void> {
    await this.cardsSectionTitle.scrollIntoViewIfNeeded();
  }

  async resizeBrowserWindow(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
  }

  // Assertions
  async expectHeroSectionVisible(): Promise<void> {
    await expect(this.heroSection).toBeVisible({ timeout: 5000 });
  }

  async expectHeroHeadingEquals(text: string): Promise<void> {
    await expect(this.heroHeading).toHaveText(text, { timeout: 5000 });
  }

  async expectHeroDescriptionVisible(): Promise<void> {
    await expect(this.heroDescription).toBeVisible({ timeout: 5000 });
  }

  async expectGetStartedButtonVisible(): Promise<void> {
    await expect(this.getStartedButton).toBeVisible({ timeout: 5000 });
  }

  async expectGetStartedButtonNotVisible(): Promise<void> {
    await expect(this.getStartedButton).not.toBeVisible({ timeout: 5000 });
  }

  async expectHeroImageVisible(): Promise<void> {
    await expect(this.heroImage).toBeVisible({ timeout: 5000 });
  }

  async expectCardsSectionTitleVisible(title: string): Promise<void> {
    await expect(this.cardsSectionTitle).toHaveText(title, { timeout: 5000 });
  }

  async expectCardsCount(count: number): Promise<void> {
    await expect(this.cards).toHaveCount(count, { timeout: 5000 });
  }

  async expectCardTitlesMatch(expectedTitles: string[]): Promise<void> {
    const actualTitles = await this.cardTitles.allTextContents();
    expect(actualTitles).toEqual(expectedTitles);
  }

  async expectCardElementsVisible(): Promise<void> {
    const cards = await this.cards.elementHandles();
    for (const card of cards) {
      const cardImage = await card.$('[data-testid="card-image"]');
      const cardTitle = await card.$('[data-testid="card-title"]');
      const cardDescription = await card.$('[data-testid="card-description"]');

      expect(cardImage).not.toBeNull();
      expect(cardTitle).not.toBeNull();
      expect(cardDescription).not.toBeNull();
    }
  }
}