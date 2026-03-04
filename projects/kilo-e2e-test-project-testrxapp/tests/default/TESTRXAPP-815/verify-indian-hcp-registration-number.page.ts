// Page Object: VerifyIndianHcpRegistrationNumberPage
import { Page, Locator, expect } from '@playwright/test';

export class VerifyIndianHcpRegistrationNumberPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get stateCouncilSelect() { return this.page.locator('#state-council-select'); }
  get mrnInput() { return this.page.locator('#mrn-input'); }
  get verifyButton() { return this.page.locator('#verify-mrn-btn'); }
  get errorMessageContainer() { return this.page.locator('#mrn-error-msg'); }
  get verificationStatusBadge() { return this.page.locator('#verification-status-badge'); }
  get verificationSpinner() { return this.page.locator('#verify-spinner'); }
  get toastMessage() { return this.page.locator('[data-testid="toast-message"]'); }

  // Actions
  async navigateToVerificationForm(): Promise<void> {
    await this.page.goto('/hcp-verification-form');
    await this.page.waitForLoadState('networkidle');
  }

  async selectStateCouncil(stateCouncil: string): Promise<void> {
    await this.stateCouncilSelect.selectOption({ label: stateCouncil });
  }

  async fillMRN(mrn: string): Promise<void> {
    await this.mrnInput.fill(mrn);
  }

  async blurMRNInput(): Promise<void> {
    await this.mrnInput.blur();
  }

  async clickVerifyButton(): Promise<void> {
    await this.verifyButton.click();
  }

  // Assertions
  async expectSpinnerVisible(): Promise<void> {
    await expect(this.verificationSpinner).toBeVisible();
  }

  async expectSpinnerHidden(): Promise<void> {
    await expect(this.verificationSpinner).toBeHidden();
  }

  async expectVerificationStatusBadgeText(expectedText: string): Promise<void> {
    await expect(this.verificationStatusBadge).toHaveText(expectedText);
  }

  async expectErrorMessage(expectedText: string): Promise<void> {
    await expect(this.errorMessageContainer).toHaveText(expectedText);
  }

  async expectToastMessage(expectedText: string): Promise<void> {
    await expect(this.toastMessage).toHaveText(expectedText);
  }

  async expectVerifyButtonDisabled(): Promise<void> {
    await expect(this.verifyButton).toBeDisabled();
  }

  async expectVerifyButtonEnabled(): Promise<void> {
    await expect(this.verifyButton).toBeEnabled();
  }
}