// Page Object: PlaywrightHomePage
import { Page, Locator, expect } from '@playwright/test';

export class PlaywrightHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Locator for the "Node.js" button
   * @returns {Locator} Locator for the button
   */
  get nodeJsButton(): Locator {
    return this.page.locator('a.navbar__link', { hasText: 'Node.js' });
  }

  /**
   * Navigate to the Playwright homepage
   * @returns {Promise<void>}
   */
  async navigateToHomePage(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Assert that the "Node.js" button is visible
   * @returns {Promise<void>}
   */
  async assertNodeJsButtonVisible(): Promise<void> {
    await expect(this.nodeJsButton).toBeVisible({
      timeout: 5000, // Soft timeout for better error handling
    });
  }
}