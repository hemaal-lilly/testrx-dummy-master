// Page Object: MarketplacePage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for the Marketplace landing page.
 */
export class MarketplacePage {
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
  async navigate(): Promise<void> {
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

  async resizeWindow(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
  }

  // Assertions
  async expectHeroSectionVisible(): Promise<void> {
    await expect(this.heroSection).toBeVisible({ timeout: 5000 });
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
    await expect(this.getStartedButton).not.toBeVisible();
  }

  async expectHeroImageVisible(): Promise<void> {
    await expect(this.heroImage).toBeVisible();
  }

  async expectCardsSectionTitleVisible(expectedText: string): Promise<void> {
    await expect(this.cardsSectionTitle).toHaveText(expectedText);
  }

  async expectCardCount(expectedCount: number): Promise<void> {
    await expect(this.cards).toHaveCount(expectedCount);
  }

  async expectCardTitles(expectedTitles: string[]): Promise<void> {
    const titles = await this.cardTitles.allTextContents();
    expect(titles).toEqual(expectedTitles);
  }

  async expectCardElementsVisible(): Promise<void> {
    for (const card of await this.cards.elementHandles()) {
      const image = card.locator('[data-testid="card-image"]');
      const title = card.locator('[data-testid="card-title"]');
      const description = card.locator('[data-testid="card-description"]');
      await expect(image).toBeVisible();
      await expect(title).toBeVisible();
      await expect(description).toBeVisible();
    }
  }
}