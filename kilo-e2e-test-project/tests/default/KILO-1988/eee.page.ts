// Page Object: PlaywrightHomePage
import { Page, expect } from '@playwright/test';

export class PlaywrightHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get pageTitle() { return this.page.title(); }

  // Actions
  /**
   * Navigates to the Playwright homepage and waits for the page to load.
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Verifies the page title matches the expected title.
   */
  async expectCorrectTitle(): Promise<void> {
    const title = await this.pageTitle;
    await expect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
  }
}