// Page Object: PlaywrightHomePage
import { Page, expect } from '@playwright/test';

export class PlaywrightHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to the Playwright homepage and wait for the page to load.
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Verify the page title matches the expected title.
   */
  async verifyTitle(): Promise<void> {
    const expectedTitle = 'Fast and reliable end-to-end testing for modern web apps | Playwright';
    await expect(this.page).toHaveTitle(expectedTitle);
  }
}