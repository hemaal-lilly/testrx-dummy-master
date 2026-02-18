// Page Object: PlaywrightHomePage
import { Page, Locator, expect } from '@playwright/test';

export class PlaywrightHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get apiDocsLink(): Locator {
    return this.page.locator('a:has-text("API documentation")'); // Assuming "API documentation" is the link text
  }

  get swaggerIntegration(): Locator {
    return this.page.locator('[data-testid="swagger-container"]'); // Example data-testid for swagger container
  }

  // Actions
  /**
   * Navigate to the Playwright homepage.
   */
  async navigateToHome(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Click on the API documentation link.
   */
  async navigateToApiDocs(): Promise<void> {
    await this.apiDocsLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Verify that the swagger integration is loaded successfully.
   */
  async verifySwaggerIntegration(): Promise<void> {
    await expect(this.swaggerIntegration).toBeVisible({ timeout: 5000 });
  }
}