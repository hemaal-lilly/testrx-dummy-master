// Page Object: TestCsaLaunchpadPage
import { Page, expect } from '@playwright/test';

export class TestCsaLaunchpadPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to the specified URL and wait for the page to load.
   * @param url - The URL to navigate to.
   */
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Assert that the page title matches the expected value.
   * @param expectedTitle - The expected title of the page.
   */
  async assertPageTitle(expectedTitle: string): Promise<void> {
    await expect(this.page).toHaveTitle(expectedTitle, { timeout: 5000 });
  }
}