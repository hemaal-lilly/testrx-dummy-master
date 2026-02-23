// Page Object: MarketplacePage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for the Marketplace page.
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
  /**
   * Navigate to the marketplace page.
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Scroll to the cards section.
   */
  async scrollToCardsSection(): Promise<void> {
    await this.cardsSectionTitle.scrollIntoViewIfNeeded();
  }

  /**
   * Refresh the browser.
   */
  async refreshPage(): Promise<void> {
    await this.page.reload({ waitUntil: 'networkidle' });
  }

  /**
   * Perform a hard reload bypassing cache.
   */
  async hardReload(): Promise<void> {
    await this.page.reload({ waitUntil: 'networkidle', bypassCache: true });
  }

  /**
   * Resize the browser window.
   * @param width - The width to resize to.
   * @param height - The height to resize to.
   */
  async resizeWindow(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
  }

  // Assertions
  /**
   * Assert that the hero section is visible.
   */
  async assertHeroSectionVisible(): Promise<void> {
    await expect(this.heroSection).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert the hero heading text matches the expected value.
   * @param expectedText - The expected heading text.
   */
  async assertHeroHeadingText(expectedText: string): Promise<void> {
    await expect(this.heroHeading).toHaveText(expectedText, { timeout: 5000 });
  }

  /**
   * Assert the hero description is visible.
   */
  async assertHeroDescriptionVisible(): Promise<void> {
    await expect(this.heroDescription).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert the "Get Started" button is visible.
   */
  async assertGetStartedButtonVisible(): Promise<void> {
    await expect(this.getStartedButton).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert the "Get Started" button is not visible.
   */
  async assertGetStartedButtonNotVisible(): Promise<void> {
    await expect(this.getStartedButton).not.toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert the hero image is visible.
   */
  async assertHeroImageVisible(): Promise<void> {
    await expect(this.heroImage).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert the cards section title matches the expected text.
   * @param expectedText - The expected section title text.
   */
  async assertCardsSectionTitle(expectedText: string): Promise<void> {
    await expect(this.cardsSectionTitle).toHaveText(expectedText, { timeout: 5000 });
  }

  /**
   * Assert the number of cards matches the expected count.
   * @param expectedCount - The expected number of cards.
   */
  async assertCardCount(expectedCount: number): Promise<void> {
    await expect(this.cards).toHaveCount(expectedCount, { timeout: 5000 });
  }

  /**
   * Assert the card titles match the expected values.
   * @param expectedTitles - The array of expected card titles.
   */
  async assertCardTitles(expectedTitles: string[]): Promise<void> {
    const actualTitles = await this.cardTitles.allTextContents();
    expect(actualTitles).toEqual(expectedTitles);
  }

  /**
   * Assert each card displays an image, title, and descriptive text.
   */
  async assertEachCardHasContent(): Promise<void> {
    const cardCount = await this.cards.count();
    for (let i = 0; i < cardCount; i++) {
      const card = this.cards.nth(i);
      await expect(card.locator('[data-testid="card-image"]')).toBeVisible();
      await expect(card.locator('[data-testid="card-title"]')).toBeVisible();
      await expect(card.locator('[data-testid="card-description"]')).toBeVisible();
    }
  }
}