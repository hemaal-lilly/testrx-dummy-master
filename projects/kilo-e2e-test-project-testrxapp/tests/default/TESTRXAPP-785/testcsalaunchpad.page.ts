// Page Object: TestCsaLaunchpadPage
import { Page, expect } from '@playwright/test';

export class TestCsaLaunchpadPage {
  readonly page: Page;
  readonly baseUrl: string = 'https://playwright.dev';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigates to the Playwright homepage.
   * Waits for the page to reach a stable state.
   */
  async navigateToHomepage(): Promise<void> {
    await this.page.goto(this.baseUrl);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Validates the page title matches the expected value.
   */
  async validatePageTitle(): Promise<void> {
    const expectedTitle = 'Fast and reliable end-to-end testing for modern web apps | Playwright';
    await expect(this.page).toHaveTitle(expectedTitle);
  }
}