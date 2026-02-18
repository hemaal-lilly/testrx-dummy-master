// Page Object: MarketplaceMarketplaceTabPage
import { Page, Locator, expect } from '@playwright/test';

export class MarketplaceMarketplaceTabPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get emailInput() { return this.page.locator('input[placeholder="someone@example.com"]'); }
  get nextButton() { return this.page.locator('button:has-text("Next")'); }
  get passwordInput() { return this.page.locator('input[placeholder="Enter the password"]'); }
  get signInButton() { return this.page.locator('button:has-text("Sign in")'); }
  get marketplaceTab() { return this.page.locator('span:has-text("Marketplace")'); }
  get constructionMessage() { return this.page.locator('p:has-text("This page is currently under construction.")'); }
  get contactUsLink() { return this.page.locator('a:has-text("Contact Us")'); }
  get hereLink() { return this.page.locator('a:has-text("here")'); }
  get successStoriesHeading() { return this.page.locator('h2:has-text("Success Stories")'); }
  get successStoriesSection() { return this.page.locator('div:has-text("Success Stories RPA Automation Anywhere")'); }

  // Actions
  async setViewportSize(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
  }

  async navigateToApp(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async clickNext(): Promise<void> {
    await this.nextButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async clickSignIn(): Promise<void> {
    await this.signInButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickMarketplaceTab(): Promise<void> {
    await this.marketplaceTab.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async assertURLPathname(expectedPathname: string): Promise<void> {
    const url = new URL(await this.page.url());
    expect(url.pathname).toBe(expectedPathname);
  }

  async assertConstructionMessage(expectedMessage: string): Promise<void> {
    await expect(this.constructionMessage).toHaveText(expectedMessage);
  }

  async assertContactUsLink(expectedHref: string): Promise<void> {
    await expect(this.contactUsLink).toHaveAttribute('href', expectedHref);
  }

  async assertHereLink(expectedHref: string): Promise<void> {
    await expect(this.hereLink).toHaveAttribute('href', expectedHref);
  }

  async assertSuccessStoriesHeading(expectedText: string): Promise<void> {
    await expect(this.successStoriesHeading).toHaveText(expectedText);
  }

  async assertSuccessStoriesSectionPresence(): Promise<void> {
    await expect(this.successStoriesSection).toBeVisible();
  }
}