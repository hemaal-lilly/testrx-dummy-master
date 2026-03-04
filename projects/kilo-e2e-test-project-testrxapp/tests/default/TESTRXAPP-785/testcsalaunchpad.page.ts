// Page Object: TestCsaLaunchpadPage
import { Page, expect } from '@playwright/test';

export class TestCsaLaunchpadPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to the Playwright launchpad page.
   * @param url - The URL of the Playwright launchpad page.
   */
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Assert the page title matches the expected title.
   * @param expectedTitle - The expected title of the page.
   */
  async assertPageTitle(expectedTitle: string): Promise<void> {
    await expect(this.page).toHaveTitle(expectedTitle);
  }
}