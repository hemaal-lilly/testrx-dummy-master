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
   * Navigate to the Marketplace page.
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
   * @param width - Width of the viewport.
   * @param height - Height of the viewport.
   */
  async resizeWindow(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
  }

  // Assertions
  /**
   * Assert that the hero section is visible.
   */
  async expectHeroSectionVisible(): Promise<void> {
    await expect(this.heroSection).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that the hero heading matches the expected text.
   * @param expectedText - The expected heading text.
   */
  async expectHeroHeadingText(expectedText: string): Promise<void> {
    await expect(this.heroHeading).toHaveText(expectedText, { timeout: 5000 });
  }

  /**
   * Assert that the hero description is visible.
   */
  async expectHeroDescriptionVisible(): Promise<void> {
    await expect(this.heroDescription).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that the "Get Started" button is visible.
   */
  async expectGetStartedButtonVisible(): Promise<void> {
    await expect(this.getStartedButton).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that the "Get Started" button is not visible.
   */
  async expectGetStartedButtonNotVisible(): Promise<void> {
    await expect(this.getStartedButton).not.toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that the hero image is visible.
   */
  async expectHeroImageVisible(): Promise<void> {
    await expect(this.heroImage).toBeVisible({ timeout: 5000 });
  }

  /**
   * Assert that the cards section title matches the expected text.
   * @param expectedText - The expected section title text.
   */
  async expectCardsSectionTitleVisible(expectedText: string): Promise<void> {
    await expect(this.cardsSectionTitle).toHaveText(expectedText, { timeout: 5000 });
  }

  /**
   * Assert that exactly three cards are visible.
   */
  async expectThreeCardsVisible(): Promise<void> {
    await expect(this.cards).toHaveCount(3, { timeout: 5000 });
  }

  /**
   * Assert that the card titles match the expected titles.
   * @param expectedTitles - Array of expected card titles.
   */
  async expectCardTitles(expectedTitles: string[]): Promise<void> {
    const titles = await this.cardTitles.allTextContents();
    expect(titles).toEqual(expectedTitles);
  }

  /**
   * Assert that each card shows an image, a title, and descriptive text.
   */
  async expectCardsHaveContent(): Promise<void> {
    await this.cards.evaluateAll(cards => {
      cards.forEach(card => {
        const image = card.querySelector('[data-testid="card-image"]');
        const title = card.querySelector('[data-testid="card-title"]');
        const description = card.querySelector('[data-testid="card-description"]');
        if (!image || !title || !description) {
          throw new Error('Card content is missing.');
        }
      });
    });
  }
}