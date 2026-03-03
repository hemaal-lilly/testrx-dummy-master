// Page Object: PlaywrightHomePage
import { Page, expect } from '@playwright/test';

export class PlaywrightHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get pageTitle() { return this.page.title(); }

  /**
   * Navigate to the Playwright homepage
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Get the title of the page
   * @returns {Promise<string>} The page title
   */
  async getPageTitle(): Promise<string> {
    return await this.pageTitle;
  }

  /**
   * Assert the page title matches the expected value
   * @param expectedTitle The expected title of the page
   */
  async assertPageTitle(expectedTitle: string): Promise<void> {
    const actualTitle = await this.getPageTitle();
    await expect(actualTitle).toBe(expectedTitle);
  }
}