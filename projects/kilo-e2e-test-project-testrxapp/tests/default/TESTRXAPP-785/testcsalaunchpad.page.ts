// Page Object: TestCsaLaunchpadPage
import { Page, expect } from '@playwright/test';

export class TestCsaLaunchpadPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigates to the Playwright homepage.
   */
  async navigateToHomepage(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Verifies the page title matches the expected title.
   * @param expectedTitle The expected title of the page.
   */
  async verifyPageTitle(expectedTitle: string): Promise<void> {
    await expect(this.page).toHaveTitle(expectedTitle, { timeout: 5000 });
  }
}