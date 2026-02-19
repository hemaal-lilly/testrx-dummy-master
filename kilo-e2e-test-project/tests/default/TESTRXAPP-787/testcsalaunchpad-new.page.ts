// Page Object: TestCsaLaunchpadNewPage
import { Page, expect } from '@playwright/test';

export class TestCsaLaunchpadNewPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigates to the Playwright homepage.
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Gets the current page title.
   * @returns {Promise<string>} The page title.
   */
  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Asserts that the page title matches the expected value.
   * @param expectedTitle The expected page title.
   */
  async assertPageTitle(expectedTitle: string): Promise<void> {
    const actualTitle = await this.getPageTitle();
    await expect(actualTitle).toBe(expectedTitle);
  }
}