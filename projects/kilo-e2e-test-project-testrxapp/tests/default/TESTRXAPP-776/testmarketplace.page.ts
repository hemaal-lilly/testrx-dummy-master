// Page Object: TestMarketplacePage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for the Marketplace landing page.
 */
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
  /**
   * Navigate to the marketplace page.
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Refresh the browser.
   */
  async refresh(): Promise<void> {
    await this.page.reload();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Perform a hard reload bypassing the cache.
   */
  async hardReload(): Promise<void> {
    await this.page.reload({ waitUntil: 'load' });
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Resize the browser window.
   * @param width - The width of the browser window.
   * @param height - The height of the browser window.
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
   * Assert that the hero heading text matches the expected value.
   * @param expectedHeading - The expected heading text.
   */
  async assertHeroHeadingText(expectedHeading: string): Promise<void> {
    await expect(this.heroHeading).toHaveText(expectedHeading);
  }

  /**
   * Assert that the hero description is displayed.
   */
  async assertHeroDescriptionVisible(): Promise<void> {
    await expect(this.heroDescription).toBeVisible();
  }

  /**
   * Assert that the "Get Started" button is visible.
   */
  async assertGetStartedButtonVisible(): Promise<void> {
    await expect(this.getStartedButton).toBeVisible();
  }

  /**
   * Assert that the "Get Started" button is not visible.
   */
  async assertGetStartedButtonNotVisible(): Promise<void> {
    await expect(this.getStartedButton).not.toBeVisible();
  }

  /**
   * Assert that the hero image is visible.
   */
  async assertHeroImageVisible(): Promise<void> {
    await expect(this.heroImage).toBeVisible();
  }

  /**
   * Assert that the cards section title matches the expected value.
   * @param expectedTitle - The expected section title.
   */
  async assertCardsSectionTitle(expectedTitle: string): Promise<void> {
    await expect(this.cardsSectionTitle).toHaveText(expectedTitle);
  }

  /**
   * Assert that the number of cards matches the expected count.
   * @param expectedCount - The expected number of cards.
   */
  async assertCardCount(expectedCount: number): Promise<void> {
    await expect(this.cards).toHaveCount(expectedCount);
  }

  /**
   * Assert that the card titles match the expected values.
   * @param expectedTitles - The expected card titles.
   */
  async assertCardTitles(expectedTitles: string[]): Promise<void> {
    const titles = await this.cardTitles.allTextContents();
    expect(titles).toEqual(expectedTitles);
  }

  /**
   * Assert that each card displays an image, title, and description.
   */
  async assertCardsHaveImageTitleDescription(): Promise<void> {
    await expect(this.cardImages).toHaveCount(await this.cards.count());
    await expect(this.cardTitles).toHaveCount(await this.cards.count());
    await expect(this.cardDescriptions).toHaveCount(await this.cards.count());
  }
}