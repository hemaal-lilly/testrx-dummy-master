// Page Object: TestCsaLaunchpadPage
import { Page, expect } from '@playwright/test';

export class TestCsaLaunchpadPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to the Playwright homepage and wait for the page to load.
   */
  async navigateToHomepage(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Validate the page title matches the expected value.
   */
  async validatePageTitle(): Promise<void> {
    const expectedTitle = 'Fast and reliable end-to-end testing for modern web apps | Playwright';
    await expect(this.page).toHaveTitle(expectedTitle);
  }
}