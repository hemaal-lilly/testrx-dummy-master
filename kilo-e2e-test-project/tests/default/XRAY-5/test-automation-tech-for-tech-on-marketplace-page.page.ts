// Page Object: MarketPlacePage
import { Page, Locator, expect } from '@playwright/test';

export class MarketPlacePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get emailInputField(): Locator {
    return this.page.locator('input[type="email"]');
  }

  get passwordInputField(): Locator {
    return this.page.locator('input[type="password"]');
  }

  get loginButton(): Locator {
    return this.page.locator('#idSIButton9');
  }

  get brandLogo(): Locator {
    return this.page.locator('img.logo-responsive');
  }

  get heading(): Locator {
    return this.page.locator('h2:has-text("Automation Tech for Tech")');
  }

  get description(): Locator {
    return this.page.locator('div:has-text("Test Automation All Tech@Lilly teams ...")');
  }

  get platformImages(): Locator {
    return this.page.locator('img[alt="platform"]');
  }

  get getStartedButton(): Locator {
    return this.page.locator('button:has-text("Get Started")');
  }

  // Actions
  async setViewport(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
  }

  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  async enterEmail(email: string): Promise<void> {
    await this.emailInputField.click();
    await this.emailInputField.fill(email);
  }

  async enterPassword(password: string): Promise<void> {
    await this.passwordInputField.fill(password);
  }

  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickGetStartedButton(): Promise<void> {
    await this.getStartedButton.click();
  }

  async switchToTab(tabTitle: string): Promise<void> {
    const tabs = await this.page.context().pages();
    const targetTab = tabs.find((tab) => tab.title() === tabTitle);
    if (targetTab) {
      await targetTab.bringToFront();
    } else {
      throw new Error(`Tab with title "${tabTitle}" not found`);
    }
  }

  // Assertions
  async assertBrandLogoAltText(expectedAltText: string): Promise<void> {
    await expect(this.brandLogo).toHaveAttribute('alt', expectedAltText);
  }

  async assertHeadingText(expectedText: string): Promise<void> {
    await expect(this.heading).toHaveText(expectedText);
  }

  async assertDescriptionText(expectedText: string): Promise<void> {
    await expect(this.description).toHaveText(expectedText);
  }

  async assertPlatformImagesCount(expectedCount: number): Promise<void> {
    await expect(this.platformImages).toHaveCount(expectedCount);
  }
}