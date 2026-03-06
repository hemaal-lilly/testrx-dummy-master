// Page Object: VerifyIndianHcpRegistrationNumberPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for Indian HCP Medical Registration Number Verification
 */
export class VerifyIndianHcpRegistrationNumberPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get stateCouncilSelect(): Locator {
    return this.page.locator('[data-testid="state-council-select"]');
  }

  get mrnInput(): Locator {
    return this.page.locator('[data-testid="mrn-input"]');
  }

  get verifyButton(): Locator {
    return this.page.locator('[data-testid="verify-mrn-btn"]');
  }

  get errorMessageContainer(): Locator {
    return this.page.locator('[data-testid="mrn-error-msg"]');
  }

  get verificationStatusBadge(): Locator {
    return this.page.locator('[data-testid="verification-status-badge"]');
  }

  get verificationSpinner(): Locator {
    return this.page.locator('[data-testid="verify-spinner"]');
  }

  // Actions
  async navigateToVerificationForm(): Promise<void> {
    await this.page.goto('/hcp-verification-form');
    await this.page.waitForLoadState('networkidle');
  }

  async selectStateCouncil(stateCouncil: string): Promise<void> {
    await this.stateCouncilSelect.selectOption({ label: stateCouncil });
  }

  async fillMrnInput(mrn: string): Promise<void> {
    await this.mrnInput.fill(mrn);
  }

  async clickVerifyButton(): Promise<void> {
    await this.verifyButton.click();
  }

  async blurMrnInput(): Promise<void> {
    await this.mrnInput.blur();
  }

  // Assertions
  async expectErrorMessage(expectedMessage: string): Promise<void> {
    await expect(this.errorMessageContainer).toHaveText(expectedMessage, { timeout: 5000 });
  }

  async expectVerificationStatus(expectedStatus: string): Promise<void> {
    await expect(this.verificationStatusBadge).toHaveText(expectedStatus, { timeout: 5000 });
  }

  async expectSpinnerVisibility(isVisible: boolean): Promise<void> {
    if (isVisible) {
      await expect(this.verificationSpinner).toBeVisible({ timeout: 5000 });
    } else {
      await expect(this.verificationSpinner).not.toBeVisible({ timeout: 5000 });
    }
  }

  async expectVerifyButtonDisabled(isDisabled: boolean): Promise<void> {
    await expect(this.verifyButton).toBeDisabled({ timeout: 5000 });
  }
}