// Page Object: PlaywrightHomePage
import { Page, expect } from '@playwright/test';

export class PlaywrightHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to the Playwright homepage.
   * @returns {Promise<void>}
   */
  async navigateToHomepage(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Get the current page title.
   * @returns {Promise<string>}
   */
  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Assert the page title matches the expected title.
   * @param expectedTitle {string} The expected title of the page.
   * @returns {Promise<void>}
   */
  async assertPageTitle(expectedTitle: string): Promise<void> {
    const actualTitle = await this.getPageTitle();
    await expect(actualTitle).toBe(expectedTitle);
  }
}