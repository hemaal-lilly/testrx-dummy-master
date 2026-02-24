// Page Object: TestCsaLaunchpadPage
import { Page, expect } from '@playwright/test';

export class TestCsaLaunchpadPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get pageTitle() { return this.page.title(); }

  // Actions
  /**
   * Navigates to the Playwright homepage.
   * @returns {Promise<void>}
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Verifies the page title matches the expected value.
   * @returns {Promise<void>}
   */
  async verifyPageTitle(): Promise<void> {
    const expectedTitle = 'Fast and reliable end-to-end testing for modern web apps | Playwright';
    await expect(await this.pageTitle).toBe(expectedTitle);
  }
}