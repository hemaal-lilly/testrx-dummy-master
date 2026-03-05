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

  get toastMessage(): Locator {
    return this.page.locator('[data-testid="toast-message"]');
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

  async blurMrnInput(): Promise<void> {
    await this.mrnInput.blur();
  }

  async clickVerifyButton(): Promise<void> {
    await this.verifyButton.click();
  }

  // Assertions
  async expectSpinnerVisible(): Promise<void> {
    await expect(this.verificationSpinner).toBeVisible({ timeout: 3000 });
  }

  async expectSpinnerHidden(): Promise<void> {
    await expect(this.verificationSpinner).toBeHidden({ timeout: 3000 });
  }

  async expectVerificationStatus(status: string): Promise<void> {
    await expect(this.verificationStatusBadge).toHaveText(status, { timeout: 3000 });
  }

  async expectErrorMessage(message: string): Promise<void> {
    await expect(this.errorMessageContainer).toHaveText(message, { timeout: 3000 });
  }

  async expectToastMessage(message: string): Promise<void> {
    await expect(this.toastMessage).toHaveText(message, { timeout: 3000 });
  }

  async expectVerifyButtonDisabled(): Promise<void> {
    await expect(this.verifyButton).toBeDisabled();
  }

  async expectVerifyButtonEnabled(): Promise<void> {
    await expect(this.verifyButton).toBeEnabled();
  }
}