// Page Object: PlaywrightHomePage
import { Page, Locator, expect } from '@playwright/test';

export class PlaywrightHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get nodeJsButton(): Locator {
    return this.page.locator('a.navbar__link', { hasText: 'Node.js' });
  }

  // Actions
  /**
   * Navigates to the Playwright homepage and waits for the page to load.
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Verifies that the "Node.js" button is visible and enabled.
   */
  async verifyNodeJsButton(): Promise<void> {
    await expect(this.nodeJsButton).toBeVisible();
    await expect(this.nodeJsButton).toBeEnabled();
  }
}