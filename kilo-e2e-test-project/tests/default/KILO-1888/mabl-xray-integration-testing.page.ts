// Page Object: PlaywrightHomePage
import { Page, expect } from '@playwright/test';

export class PlaywrightHomePage {
  readonly page: Page;
  readonly baseUrl: string = 'https://playwright.dev';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to the Playwright homepage.
   */
  async navigate(): Promise<void> {
    await this.page.goto(this.baseUrl);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Get the current page title.
   * @returns {Promise<string>} The page title.
   */
  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Assert that the page title matches the expected title.
   * @param expectedTitle The expected page title.
   */
  async assertPageTitle(expectedTitle: string): Promise<void> {
    const actualTitle = await this.getPageTitle();
    await expect(actualTitle).toBe(expectedTitle);
  }
}