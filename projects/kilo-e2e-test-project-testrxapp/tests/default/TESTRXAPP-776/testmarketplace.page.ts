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

  // Actions
  async navigateToMarketplace(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  async scrollToCardsSection(): Promise<void> {
    await this.cardsSectionTitle.scrollIntoViewIfNeeded();
  }

  async refreshPage(): Promise<void> {
    await this.page.reload({ waitUntil: 'networkidle' });
  }

  async hardReload(): Promise<void> {
    await this.page.evaluate(() => location.reload(true));
    await this.page.waitForLoadState('networkidle');
  }

  async resizeBrowser(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
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

  async expectThreeCardsVisible(): Promise<void> {
    await expect(this.cards).toHaveCount(3, { timeout: 5000 });
  }

  async expectCardTitles(expectedTitles: string[]): Promise<void> {
    const titles = await this.cardTitles.allTextContents();
    expect(titles).toEqual(expectedTitles);
  }

  async expectEachCardHasImageTitleAndText(): Promise<void> {
    const cards = await this.cards.elementHandles();
    for (const card of cards) {
      const image = await card.$('[data-testid="card-image"]');
      const title = await card.$('[data-testid="card-title"]');
      const description = await card.$('[data-testid="card-description"]');
      expect(image).not.toBeNull();
      expect(title).not.toBeNull();
      expect(description).not.toBeNull();
    }
  }
}