import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object: GeneratedPage
 * Auto-generated - please customize locators and actions
 */
export class GeneratedPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get mainContent() { return this.page.locator('main'); }

  // Actions
  async navigate(path = '/'): Promise<void> {
    await this.page.goto(path);
    await this.page.waitForLoadState('networkidle');
  }

  async waitForReady(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }
}