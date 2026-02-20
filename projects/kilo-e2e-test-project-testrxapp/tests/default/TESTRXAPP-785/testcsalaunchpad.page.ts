// Page Object: PlaywrightHomePage
import { Page, Locator, expect } from '@playwright/test';

export class PlaywrightHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get nodeJsButton(): Locator {
    return this.page.locator('a.navbar__link', { hasText: 'Node.js' });
  }

  // Actions
  /**
   * Navigate to the Playwright homepage.
   * @returns {Promise<void>}
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Check if the Node.js button is visible.
   * @returns {Promise<void>}
   */
  async verifyNodeJsButton(): Promise<void> {
    await expect(this.nodeJsButton).toBeVisible({ timeout: 5000 });
  }
}