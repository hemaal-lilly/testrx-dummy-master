// Page Object: CsaLaunchpadPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for CSA Launchpad
 */
export class CsaLaunchpadPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get navigationItemHome() { return this.page.locator('[data-testid="nav-home"]'); }
  get navigationItemAutomationPlatform() { return this.page.locator('[data-testid="nav-automation-platform"]'); }
  get navigationItemMarketplace() { return this.page.locator('[data-testid="nav-marketplace"]'); }
  get navigationItemTechZone() { return this.page.locator('[data-testid="nav-techzone"]'); }
  get navigationItemAdminConsole() { return this.page.locator('[data-testid="nav-admin-console"]'); }
  get submitIdeaButton() { return this.page.locator('[data-testid="cta-submit-idea"]'); }
  get cardRiskEvaluations() { return this.page.locator('[data-testid="card-risk-evaluations"]'); }
  get cardITAssets() { return this.page.locator('[data-testid="card-it-assets"]'); }

  // Actions
  async navigateToHomePage(): Promise<void> {
    await this.page.goto('https://qa.csalaunchpad.lilly.com');
    await this.page.waitForLoadState('networkidle');
  }

  async clickRiskEvaluationsCard(): Promise<void> {
    await this.cardRiskEvaluations.click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickITAssetsCard(): Promise<void> {
    await this.cardITAssets.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  async expectNavigationItemVisible(item: Locator): Promise<void> {
    await expect(item).toBeVisible({ timeout: 5000 });
  }

  async expectNavigationItemActive(item: Locator): Promise<void> {
    await expect(item).toHaveClass(/active/, { timeout: 5000 });
  }

  async expectCardVisible(card: Locator): Promise<void> {
    await expect(card).toBeVisible({ timeout: 5000 });
  }

  async expectCardNotVisible(card: Locator): Promise<void> {
    await expect(card).not.toBeVisible({ timeout: 5000 });
  }

  async expectButtonVisible(button: Locator): Promise<void> {
    await expect(button).toBeVisible({ timeout: 5000 });
  }

  async expectButtonNotVisible(button: Locator): Promise<void> {
    await expect(button).not.toBeVisible({ timeout: 5000 });
  }
}