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
   * Navigates to the Playwright homepage and waits for the page to load completely.
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Checks if the "Node.js" button is visible on the page.
   */
  async isNodeJsButtonVisible(): Promise<boolean> {
    return await this.nodeJsButton.isVisible();
  }

  // Assertions
  /**
   * Asserts that the "Node.js" button is visible on the page.
   */
  async expectNodeJsButtonVisible(): Promise<void> {
    await expect(this.nodeJsButton).toBeVisible();
  }
}