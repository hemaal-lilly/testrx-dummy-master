// Page Object: PlaywrightHomePage
import { Page, Locator, expect } from '@playwright/test';

export class PlaywrightHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Locator for the "Node.js" button in the navigation bar.
   */
  get nodeJsButton(): Locator {
    return this.page.locator('a.navbar__link:has-text("Node.js")');
  }

  /**
   * Navigate to the Playwright homepage.
   * @returns {Promise<void>}
   */
  async navigateToHomePage(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Verify that the "Node.js" button is visible on the page.
   * @returns {Promise<void>}
   */
  async verifyNodeJsButtonVisible(): Promise<void> {
    await expect(this.nodeJsButton).toBeVisible({ timeout: 5000 });
  }
}