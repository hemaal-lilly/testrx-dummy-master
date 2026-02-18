// Page Object: MablXrayIntegrationTestingPage
import { Page, Locator, expect } from '@playwright/test';

export class MablXrayIntegrationTestingPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get emailInput() { return this.page.locator('input[type="email"]'); }
  get nextButton() { return this.page.locator('#idSIButton9'); }
  get passwordInput() { return this.page.locator('input[type="password"]'); }
  get caretDownSvg() { return this.page.locator('svg:text("CaretDown")'); }
  get intelligentAutomationSpan() { return this.page.locator('span:text("Intelligent Automation")'); }
  get testAutomationSpan() { return this.page.locator('span:text("Test Automation")'); }
  get documentProcessingSpan() { return this.page.locator('span:text("Document Processing")'); }
  get contentAutomationSpan() { return this.page.locator('span:text("Content Automation")'); }
  get processOptimizationSpan() { return this.page.locator('span:text("Process Optimization")'); }
  get marketplaceSpan() { return this.page.locator('span:text("Marketplace")'); }
  get techZoneSpan() { return this.page.locator('span:text("TechZone")'); }
  get homeSpan() { return this.page.locator('span:text("Home")'); }
  get brandLogo() { return this.page.locator('img.logo-responsive'); }

  // Actions
  async setViewportSize(): Promise<void> {
    await this.page.setViewportSize({ width: 1080, height: 1440 });
  }

  async navigateToApp(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.nextButton.click();
    await this.passwordInput.click();
    await this.passwordInput.fill(password);
    await this.nextButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async navigateSections(): Promise<void> {
    await this.caretDownSvg.click();
    await this.intelligentAutomationSpan.click();
    await this.caretDownSvg.click();
    await this.testAutomationSpan.click();
    await this.caretDownSvg.click();
    await this.documentProcessingSpan.click();
    await this.caretDownSvg.click();
    await this.contentAutomationSpan.click();
    await this.processOptimizationSpan.click();
    await this.marketplaceSpan.click();
    await this.techZoneSpan.click();
    await this.homeSpan.click();
  }

  // Assertions
  async verifyBrandLogo(): Promise<void> {
    await expect(this.brandLogo).toHaveAttribute('alt', 'Brand Logo');
  }
}