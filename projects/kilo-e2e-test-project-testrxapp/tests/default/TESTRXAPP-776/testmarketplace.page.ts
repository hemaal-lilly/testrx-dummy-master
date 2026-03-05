// Page Object: TestMarketplacePage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for the Marketplace page.
 * Contains locators and methods for interacting with the page elements.
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
  async navigateToMarketplace(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  async refreshPage(): Promise<void> {
    await this.page.reload({ waitUntil: 'networkidle' });
  }

  async hardReload(): Promise<void> {
    await this.page.reload({ timeout: 30000, waitUntil: 'networkidle' });
  }

  async resizeWindow(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
  }

  async scrollToCardsSection(): Promise<void> {
    await this.cardsSectionTitle.scrollIntoViewIfNeeded();
  }

  // Assertions
  async assertHeroSectionVisible(): Promise<void> {
    await expect(this.heroSection).toBeVisible({ timeout: 5000 });
  }

  async assertHeroHeadingText(expectedText: string): Promise<void> {
    await expect(this.heroHeading).toHaveText(expectedText, { timeout: 5000 });
  }

  async assertHeroDescriptionVisible(): Promise<void> {
    await expect(this.heroDescription).toBeVisible({ timeout: 5000 });
  }

  async assertGetStartedButtonVisible(): Promise<void> {
    await expect(this.getStartedButton).toBeVisible({ timeout: 5000 });
  }

  async assertGetStartedButtonNotVisible(): Promise<void> {
    await expect(this.getStartedButton).toBeHidden({ timeout: 5000 });
  }

  async assertHeroImageVisible(): Promise<void> {
    await expect(this.heroImage).toBeVisible({ timeout: 5000 });
  }

  async assertCardsSectionTitleVisible(expectedText: string): Promise<void> {
    await expect(this.cardsSectionTitle).toHaveText(expectedText, { timeout: 5000 });
  }

  async assertCardsCount(expectedCount: number): Promise<void> {
    await expect(this.cards).toHaveCount(expectedCount, { timeout: 5000 });
  }

  async assertCardTitles(expectedTitles: string[]): Promise<void> {
    const titles = await this.cardTitles.allTextContents();
    expect(titles).toEqual(expectedTitles);
  }

  async assertCardElementsVisible(): Promise<void> {
    await expect(this.cardImages).toBeVisible({ timeout: 5000 });
    await expect(this.cardTitles).toBeVisible({ timeout: 5000 });
    await expect(this.cardDescriptions).toBeVisible({ timeout: 5000 });
  }
}