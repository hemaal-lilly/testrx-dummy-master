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
  get automationTechSectionTitle() { return this.page.locator('[data-testid="automation-tech-title"]'); }
  get cards() { return this.page.locator('[data-testid="automation-tech-card"]'); }
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

  async hardReloadPage(): Promise<void> {
    await this.page.evaluate(() => location.reload(true));
    await this.page.waitForLoadState('networkidle');
  }

  async resizeBrowser(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
  }

  async scrollToCardsSection(): Promise<void> {
    await this.automationTechSectionTitle.scrollIntoViewIfNeeded();
  }

  // Assertions
  async expectHeroSectionVisible(): Promise<void> {
    await expect(this.heroSection).toBeVisible({ timeout: 5000 });
  }

  async expectHeroContent(): Promise<void> {
    await expect(this.heroHeading).toHaveText('Enterprise Automation');
    await expect(this.heroDescription).toBeVisible();
    await expect(this.getStartedButton).toBeVisible();
    await expect(this.heroImage).toBeVisible();
  }

  async expectAutomationTechTitleVisible(): Promise<void> {
    await expect(this.automationTechSectionTitle).toHaveText('Automation Tech for Tech');
  }

  async expectThreeCardsVisible(): Promise<void> {
    await expect(this.cards).toHaveCount(3);
    const expectedTitles = ['CSA Launch Pad', 'Test Automation', 'Become An Automation Autonaut'];
    const actualTitles = await this.cardTitles.allTextContents();
    expect(actualTitles).toEqual(expectedTitles);
  }

  async expectCardElements(): Promise<void> {
    await expect(this.cardImages).toHaveCount(3);
    await expect(this.cardTitles).toHaveCount(3);
    await expect(this.cardDescriptions).toHaveCount(3);
  }

  async expectGetStartedButtonAbsent(): Promise<void> {
    await expect(this.getStartedButton).not.toBeVisible();
  }

  async expectResponsiveSectionsVisible(): Promise<void> {
    await this.expectHeroSectionVisible();
    await this.expectAutomationTechTitleVisible();
  }
}