// Page Object: TestCsaLaunchpadPage
import { Page, Locator, expect } from '@playwright/test';

export class TestCsaLaunchpadPage {
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
   * Navigates to the Playwright homepage.
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Checks if the "Node.js" button is visible.
   */
  async isNodeJsButtonVisible(): Promise<boolean> {
    return await this.nodeJsButton.isVisible();
  }

  // Assertions
  /**
   * Asserts that the "Node.js" button is visible.
   */
  async assertNodeJsButtonVisible(): Promise<void> {
    await expect(this.nodeJsButton).toBeVisible({ timeout: 5000 });
  }
}