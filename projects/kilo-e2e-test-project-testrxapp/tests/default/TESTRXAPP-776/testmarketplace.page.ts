// Page Object: MarketplacePage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Marketplace Page
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
   * Navigates to the marketplace page and waits for it to load.
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Scrolls to the cards section.
   */
  async scrollToCardsSection(): Promise<void> {
    await this.cardsSectionTitle.scrollIntoViewIfNeeded();
  }

  /**
   * Refreshes the browser.
   */
  async refreshPage(): Promise<void> {
    await this.page.reload({ waitUntil: 'networkidle' });
  }

  /**
   * Performs a hard reload bypassing cache.
   */
  async hardReload(): Promise<void> {
    await this.page.reload({ waitUntil: 'load', timeout: 30000 });
  }

  /**
   * Resizes the browser window to a specific width and height.
   * @param width - Width of the browser window.
   * @param height - Height of the browser window.
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
   * Asserts that the hero section contains the required content.
   */
  async assertHeroContent(): Promise<void> {
    await expect(this.heroHeading).toHaveText('Enterprise Automation');
    await expect(this.heroDescription).toBeVisible();
    await expect(this.getStartedButton).toBeVisible();
    await expect(this.heroImage).toBeVisible();
  }

  /**
   * Asserts that the cards section title is visible.
   */
  async assertCardsSectionTitleVisible(): Promise<void> {
    await expect(this.cardsSectionTitle).toHaveText('Automation Tech for Tech');
  }

  /**
   * Asserts that exactly three cards are visible with specific titles.
   */
  async assertThreeCardsVisible(): Promise<void> {
    await expect(this.cards).toHaveCount(3);
    const expectedTitles = ['CSA Launch Pad', 'Test Automation', 'Become An Automation Autonaut'];
    const actualTitles = await this.cardTitles.allInnerTexts();
    expect(actualTitles).toEqual(expectedTitles);
  }

  /**
   * Asserts that each card contains an image, title, and descriptive text.
   */
  async assertCardElements(): Promise<void> {
    for (const card of await this.cards.elementHandles()) {
      await expect(card.locator('[data-testid="card-image"]')).toBeVisible();
      await expect(card.locator('[data-testid="card-title"]')).toBeVisible();
      await expect(card.locator('[data-testid="card-description"]')).toBeVisible();
    }
  }

  /**
   * Asserts that the "Get Started" button is not visible.
   */
  async assertGetStartedButtonAbsent(): Promise<void> {
    await expect(this.getStartedButton).not.toBeVisible();
  }
}