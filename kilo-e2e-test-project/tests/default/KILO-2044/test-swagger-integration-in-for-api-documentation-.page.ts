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
   * Get the title of the current page
   */
  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Assert the page title matches the expected value
   * @param expectedTitle - The expected title of the page
   */
  async assertPageTitle(expectedTitle: string): Promise<void> {
    const actualTitle = await this.getPageTitle();
    await expect(actualTitle).toBe(expectedTitle);
  }
}