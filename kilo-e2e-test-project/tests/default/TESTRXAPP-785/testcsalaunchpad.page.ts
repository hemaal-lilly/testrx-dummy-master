// Page Object: TestCsaLaunchpadPage
import { Page, expect } from '@playwright/test';

export class TestCsaLaunchpadPage {
  readonly page: Page;
  readonly baseUrl: string = 'https://playwright.dev';
  readonly expectedTitle: string = 'Fast and reliable end-to-end testing for modern web apps | Playwright';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to the Playwright homepage.
   */
  async navigate(): Promise<void> {
    await this.page.goto(this.baseUrl);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Assert that the page title matches the expected title.
   */
  async assertPageTitle(): Promise<void> {
    const actualTitle = await this.page.title();
    await expect(actualTitle).toBe(this.expectedTitle);
  }
}