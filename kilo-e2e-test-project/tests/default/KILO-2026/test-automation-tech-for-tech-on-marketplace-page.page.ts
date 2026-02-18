// Page Object: PlaywrightHomePage
import { Page, expect } from '@playwright/test';

export class PlaywrightHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to the Playwright homepage
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Get the page title
   * @returns {Promise<string>} The page title
   */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Assert the page title matches the expected value
   * @param expectedTitle {string} The expected title
   */
  async assertTitle(expectedTitle: string): Promise<void> {
    const actualTitle = await this.getTitle();
    await expect(actualTitle).toBe(expectedTitle);
  }
}