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
  get toastMessage() { return this.page.locator('[role="alert"]'); }

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
  async expectVerificationSpinnerVisible(): Promise<void> {
    await expect(this.verificationSpinner).toBeVisible({ timeout: 3000 });
  }

  async expectVerificationSpinnerHidden(): Promise<void> {
    await expect(this.verificationSpinner).toBeHidden({ timeout: 3000 });
  }

  async expectVerificationStatusBadge(status: string): Promise<void> {
    await expect(this.verificationStatusBadge).toHaveText(status);
  }

  async expectErrorMessage(message: string): Promise<void> {
    await expect(this.errorMessageContainer).toHaveText(message);
  }

  async expectToastMessage(message: string): Promise<void> {
    await expect(this.toastMessage).toHaveText(message);
  }

  async expectVerifyButtonDisabled(): Promise<void> {
    await expect(this.verifyButton).toBeDisabled();
  }

  async expectVerifyButtonEnabled(): Promise<void> {
    await expect(this.verifyButton).toBeEnabled();
  }
}