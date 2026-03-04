// Page Object: VerifyIndianHcpRegistrationNumberPage
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for the Indian HCP Medical Registration Number Verification Form
 */
export class VerifyIndianHcpRegistrationNumberPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get stateCouncilSelect(): Locator { return this.page.locator('#state-council-select'); }
  get mrnInput(): Locator { return this.page.locator('#mrn-input'); }
  get verifyButton(): Locator { return this.page.locator('#verify-mrn-btn'); }
  get errorMessage(): Locator { return this.page.locator('#mrn-error-msg'); }
  get verificationStatusBadge(): Locator { return this.page.locator('#verification-status-badge'); }
  get verificationSpinner(): Locator { return this.page.locator('#verify-spinner'); }
  get toastMessage(): Locator { return this.page.locator('[role="alert"]'); }

  // Actions
  /**
   * Navigate to the verification form
   */
  async navigateToVerificationForm(): Promise<void> {
    await this.page.goto('/hcp-verification-form');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Select a state medical council from the dropdown
   * @param councilName - Name of the state medical council
   */
  async selectStateCouncil(councilName: string): Promise<void> {
    await this.stateCouncilSelect.selectOption({ label: councilName });
  }

  /**
   * Fill the Medical Registration Number (MRN) input field
   * @param mrn - The MRN value to input
   */
  async fillMrnInput(mrn: string): Promise<void> {
    await this.mrnInput.fill(mrn);
  }

  /**
   * Click the Verify button
   */
  async clickVerifyButton(): Promise<void> {
    await this.verifyButton.click();
  }

  /**
   * Blur the MRN input field
   */
  async blurMrnInput(): Promise<void> {
    await this.mrnInput.blur();
  }

  // Assertions
  /**
   * Assert that the verification spinner is visible
   */
  async expectSpinnerVisible(): Promise<void> {
    await expect(this.verificationSpinner).toBeVisible();
  }

  /**
   * Assert that the verification spinner is hidden
   */
  async expectSpinnerHidden(): Promise<void> {
    await expect(this.verificationSpinner).toBeHidden();
  }

  /**
   * Assert that the verification status badge has the expected text
   * @param status - Expected status text
   */
  async expectVerificationStatus(status: string): Promise<void> {
    await expect(this.verificationStatusBadge).toHaveText(status);
  }

  /**
   * Assert that the error message contains the expected text
   * @param errorMessage - Expected error message text
   */
  async expectErrorMessage(errorMessage: string): Promise<void> {
    await expect(this.errorMessage).toHaveText(errorMessage);
  }

  /**
   * Assert that the Verify button is disabled
   */
  async expectVerifyButtonDisabled(): Promise<void> {
    await expect(this.verifyButton).toBeDisabled();
  }

  /**
   * Assert that the Verify button is enabled
   */
  async expectVerifyButtonEnabled(): Promise<void> {
    await expect(this.verifyButton).toBeEnabled();
  }

  /**
   * Assert that a toast message with the expected text is visible
   * @param message - Expected toast message text
   */
  async expectToastMessage(message: string): Promise<void> {
    await expect(this.toastMessage).toHaveText(message);
  }
}