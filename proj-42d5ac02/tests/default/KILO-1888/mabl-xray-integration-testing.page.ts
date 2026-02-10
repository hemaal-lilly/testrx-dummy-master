// Page Object: MablXrayIntegrationTestingPage
import { Page, Locator, expect } from '@playwright/test';

export class MablXrayIntegrationTestingPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  get emailInput() { return this.page.locator('[aria-label="someone@example.com"]'); }
  get passwordInput() { return this.page.locator('[aria-label="Enter the password for aso_marketplace@elililly.onmicrosoft.com"]'); }
  get loginButton() { return this.page.locator('#idSIButton9'); }
  get caretDownIcon() { return this.page.locator('svg:has-text("CaretDown")'); }
  get intelligentAutomationMenu() { return this.page.locator('span:has-text("Intelligent Automation")'); }
  get testAutomationMenu() { return this.page.locator('span:has-text("Test Automation")'); }
  get documentProcessingMenu() { return this.page.locator('span:has-text("Document Processing")'); }
  get contentAutomationMenu() { return this.page.locator('span:has-text("Content Automation")'); }
  get processOptimizationMenu() { return this.page.locator('span:has-text("Process Optimization")'); }
  get marketplaceMenu() { return this.page.locator('span:has-text("Marketplace")'); }
  get techZoneMenu() { return this.page.locator('span:has-text("TechZone")'); }
  get homeMenu() { return this.page.locator('span:has-text("Home")'); }
  get brandLogo() { return this.page.locator('img.logo-responsive'); }

  // Actions
  async setViewportSize(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
  }

  async navigateToApp(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async navigateMenu(menuLocator: Locator): Promise<void> {
    await menuLocator.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async assertBrandLogoAltText(expectedAltText: string): Promise<void> {
    await expect(this.brandLogo).toHaveAttribute('alt', expectedAltText);
  }
}