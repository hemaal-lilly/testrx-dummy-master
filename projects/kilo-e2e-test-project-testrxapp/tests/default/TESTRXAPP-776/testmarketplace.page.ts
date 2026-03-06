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
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  async refreshPage(): Promise<void> {
    await this.page.reload({ waitUntil: 'networkidle' });
  }

  async hardReload(): Promise<void> {
    await this.page.reload({ waitUntil: 'networkidle', timeout: 0 });
  }

  async resizeBrowser(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
  }

  async scrollToCardsSection(): Promise<void> {
    await this.cardsSectionTitle.scrollIntoViewIfNeeded();
  }

  // Assertions
  async expectHeroSectionVisible(): Promise<void> {
    await expect(this.heroSection).toBeVisible({ timeout: 5000 });
  }

  async expectHeroHeadingText(expectedText: string): Promise<void> {
    await expect(this.heroHeading).toHaveText(expectedText, { timeout: 5000 });
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

  async expectCardsSectionTitleVisible(expectedText: string): Promise<void> {
    await expect(this.cardsSectionTitle).toHaveText(expectedText, { timeout: 5000 });
  }

  async expectNumberOfCards(expectedCount: number): Promise<void> {
    await expect(this.cards).toHaveCount(expectedCount, { timeout: 5000 });
  }

  async expectCardTitles(expectedTitles: string[]): Promise<void> {
    const titles = await this.cardTitles.allTextContents();
    expect(titles).toEqual(expectedTitles);
  }

  async expectEachCardElements(): Promise<void> {
    const cardCount = await this.cards.count();
    for (let i = 0; i < cardCount; i++) {
      const card = this.cards.nth(i);
      await expect(card.locator('[data-testid="card-image"]')).toBeVisible();
      await expect(card.locator('[data-testid="card-title"]')).toBeVisible();
      await expect(card.locator('[data-testid="card-description"]')).toBeVisible();
    }
  }
}