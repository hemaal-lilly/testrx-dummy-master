// Page Object: TestMarketplaceRajeevPage
import { Page, Locator, expect } from '@playwright/test';

export class TestMarketplaceRajeevPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get usernameInput(): Locator {
    return this.page.locator('[data-testid="username"]');
  }

  get passwordInput(): Locator {
    return this.page.locator('[data-testid="password"]');
  }

  get loginButton(): Locator {
    return this.page.locator('[data-testid="login-button"]');
  }

  get headerNavigation(): Locator {
    return this.page.locator('[data-testid="header-navigation"]');
  }

  get errorMessage(): Locator {
    return this.page.locator('[data-testid="error-message"]');
  }

  // Actions
  async navigateToLoginPage(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  async enterUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectHeaderNavigationVisible(): Promise<void> {
    await expect(this.headerNavigation).toBeVisible();
  }

  async expectErrorMessageVisible(): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
  }
}