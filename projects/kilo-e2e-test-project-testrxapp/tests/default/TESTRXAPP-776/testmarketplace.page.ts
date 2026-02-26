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
  /**
   * Navigates to the marketplace page and waits for the page to load completely.
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Refreshes the browser and waits for the page to load.
   */
  async refreshPage(): Promise<void> {
    await this.page.reload({ waitUntil: 'networkidle' });
  }

  /**
   * Performs a hard reload bypassing cache and waits for the page to load.
   */
  async hardReload(): Promise<void> {
    await this.page.reload({ waitUntil: 'networkidle', bypassCache: true });
  }

  /**
   * Resizes the browser window to the specified width and height.
   * @param width - The width of the browser window.
   * @param height - The height of the browser window.
   */
  async resizeWindow(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
  }

  // Assertions
  /**
   * Asserts that the hero section is visible.
   */
  async assertHeroSectionVisible(): Promise<void> {
    await expect(this.heroSection).toBeVisible({ timeout: 5000 });
  }

  /**
   * Asserts that the hero heading matches the expected text.
   * @param expectedText - The expected heading text.
   */
  async assertHeroHeading(expectedText: string): Promise<void> {
    await expect(this.heroHeading).toHaveText(expectedText, { timeout: 5000 });
  }

  /**
   * Asserts that the "Get Started" button is visible or not visible.
   * @param visible - Whether the button should be visible.
   */
  async assertGetStartedButtonVisibility(visible: boolean): Promise<void> {
    if (visible) {
      await expect(this.getStartedButton).toBeVisible({ timeout: 5000 });
    } else {
      await expect(this.getStartedButton).not.toBeVisible({ timeout: 5000 });
    }
  }

  /**
   * Asserts that the cards section title matches the expected text.
   * @param expectedTitle - The expected section title.
   */
  async assertCardsSectionTitle(expectedTitle: string): Promise<void> {
    await expect(this.cardsSectionTitle).toHaveText(expectedTitle, { timeout: 5000 });
  }

  /**
   * Asserts that the specified number of cards are visible.
   * @param expectedCount - The expected number of cards.
   */
  async assertCardCount(expectedCount: number): Promise<void> {
    await expect(this.cards).toHaveCount(expectedCount, { timeout: 5000 });
  }

  /**
   * Asserts that the card titles match the expected titles.
   * @param expectedTitles - Array of expected card titles.
   */
  async assertCardTitles(expectedTitles: string[]): Promise<void> {
    const titles = await this.cardTitles.allTextContents();
    expect(titles).toEqual(expectedTitles);
  }

  /**
   * Asserts that each card contains an image, title, and description.
   */
  async assertCardsHaveContent(): Promise<void> {
    const cardsCount = await this.cards.count();
    for (let i = 0; i < cardsCount; i++) {
      const card = this.cards.nth(i);
      await expect(card.locator('[data-testid="card-image"]')).toBeVisible();
      await expect(card.locator('[data-testid="card-title"]')).toBeVisible();
      await expect(card.locator('[data-testid="card-description"]')).toBeVisible();
    }
  }
}