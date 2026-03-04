// Page Object: TestMarketplacePage
import { Page, Locator, expect } from '@playwright/test';

export class TestMarketplacePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get heroSection() { return this.page.locator('[data-testid="hero-section"]'); }
  get heroHeading() { return this.page.locator('[data-testid="hero-heading"]'); }
  get heroDescription() { return this.page.locator('[data-testid="hero-description"]'); }
  get getStartedButton() { return this.page.locator('[data-testid="get-started-button"]'); }
  get heroImage() { return this.page.locator('[data-testid="hero-image"]'); }
  get cardsSectionTitle() { return this.page.locator('[data-testid="cards-section-title"]'); }
  get cards() { return this.page.locator('[data-testid="card"]'); }
  get cardTitles() { return this.page.locator('[data-testid="card-title"]'); }
  get cardImages() { return this.page.locator('[data-testid="card-image"]'); }
  get cardDescriptions() { return this.page.locator('[data-testid="card-description"]'); }

  // Actions
  async navigateToMarketplace(): Promise<void> {
    await this.page.goto('/marketplace');
    await this.page.waitForLoadState('networkidle');
  }

  async scrollToCardsSection(): Promise<void> {
    await this.cardsSectionTitle.scrollIntoViewIfNeeded();
  }

  async refreshPage(): Promise<void> {
    await this.page.reload({ waitUntil: 'networkidle' });
  }

  async hardReloadPage(): Promise<void> {
    await this.page.goto(this.page.url(), { timeout: 30000, waitUntil: 'networkidle' });
  }

  async resizeWindow(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
  }

  // Assertions
  async expectHeroSectionVisible(): Promise<void> {
    await expect(this.heroSection).toBeVisible();
  }

  async expectHeroHeadingText(expectedText: string): Promise<void> {
    await expect(this.heroHeading).toHaveText(expectedText);
  }

  async expectHeroDescriptionVisible(): Promise<void> {
    await expect(this.heroDescription).toBeVisible();
  }

  async expectGetStartedButtonVisible(): Promise<void> {
    await expect(this.getStartedButton).toBeVisible();
  }

  async expectGetStartedButtonNotVisible(): Promise<void> {
    await expect(this.getStartedButton).toBeHidden();
  }

  async expectHeroImageVisible(): Promise<void> {
    await expect(this.heroImage).toBeVisible();
  }

  async expectCardsSectionTitleVisible(expectedTitle: string): Promise<void> {
    await expect(this.cardsSectionTitle).toHaveText(expectedTitle);
  }

  async expectCardsCount(expectedCount: number): Promise<void> {
    await expect(this.cards).toHaveCount(expectedCount);
  }

  async expectCardTitles(expectedTitles: string[]): Promise<void> {
    const titles = await this.cardTitles.allTextContents();
    expect(titles).toEqual(expectedTitles);
  }

  async expectEachCardHasImageTitleDescription(): Promise<void> {
    const cardCount = await this.cards.count();
    for (let i = 0; i < cardCount; i++) {
      await expect(this.cardImages.nth(i)).toBeVisible();
      await expect(this.cardTitles.nth(i)).toBeVisible();
      await expect(this.cardDescriptions.nth(i)).toBeVisible();
    }
  }
}