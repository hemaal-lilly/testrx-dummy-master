// Page Object: VerifyIndianHcpRegistrationNumberPage
import { Page, Locator, expect } from '@playwright/test';

export class VerifyIndianHcpRegistrationNumberPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get stateCouncilSelect(): Locator {
    return this.page.locator('#state-council-select');
  }

  get mrnInput(): Locator {
    return this.page.locator('#mrn-input');
  }

  get verifyButton(): Locator {
    return this.page.locator('#verify-mrn-btn');
  }

  get errorMessageContainer(): Locator {
    return this.page.locator('#mrn-error-msg');
  }

  get verificationStatusBadge(): Locator {
    return this.page.locator('#verification-status-badge');
  }

  get verificationSpinner(): Locator {
    return this.page.locator('#verify-spinner');
  }

  // Actions
  async navigateToVerificationForm(): Promise<void> {
    await this.page.goto('/hcp-profile/verification');
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
      await expect(this.verificationSpinner).toBeHidden({ timeout: 5000 });
    }
  }

  async expectVerifyButtonDisabled(isDisabled: boolean): Promise<void> {
    if (isDisabled) {
      await expect(this.verifyButton).toBeDisabled({ timeout: 5000 });
    } else {
      await expect(this.verifyButton).toBeEnabled({ timeout: 5000 });
    }
  }

  async expectToastMessage(expectedMessage: string): Promise<void> {
    const toastLocator = this.page.locator('[data-testid="toast-message"]');
    await expect(toastLocator).toHaveText(expectedMessage, { timeout: 5000 });
  }
}