// Page Object: MarketplaceTestAutomationPage
import { Page, Locator, expect } from '@playwright/test';

export class MarketplaceTestAutomationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get emailInput() { return this.page.locator('input[type="email"]'); }
  get nextButton() { return this.page.locator('button:has-text("Next")'); }
  get passwordInput() { return this.page.locator('input[type="password"]'); }
  get signInButton() { return this.page.locator('button:has-text("Sign in")'); }
  get caretDownIcon() { return this.page.locator('svg:has-text("CaretDown")'); }
  get testAutomationOption() { return this.page.locator('span:has-text("Test Automation")'); }
  get testAutomationDescription() { return this.page.locator('div:has-text("Test Automation Test Automation is the use of software to perform tests on other software")'); }
  get testAutomationLink() { return this.page.locator('a:has-text("Test Automation")'); }
  get communityOfPracticeLink() { return this.page.locator('a:has-text("community of practice")'); }
  get blockquoteText() { return this.page.locator('blockquote:has-text("\"Creating a cycle of automation innovation learning and delivery to accelerate your productivity.\" Enterprise Platform"'); }
  get contactUsLink() { return this.page.locator('a:has-text("Contact Us")'); }
  get ldsImage() { return this.page.locator('img.lds-image'); }

  // Actions
  async setViewportSize(): Promise<void> {
    await this.page.setViewportSize({ width: 1000, height: 800 });
  }

  async navigateToApp(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async clickNext(): Promise<void> {
    await this.nextButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async clickSignIn(): Promise<void> {
    await this.signInButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async selectTestAutomation(): Promise<void> {
    await this.caretDownIcon.click();
    await this.testAutomationOption.click();
  }

  // Assertions
  async assertTestAutomationDescription(): Promise<void> {
    await expect(this.testAutomationDescription).toHaveText(/^Test Automation Test Automation is th/);
  }

  async assertTestAutomationLinkHref(expectedHref: string): Promise<void> {
    await expect(this.testAutomationLink).toHaveAttribute('href', expectedHref);
  }

  async assertCommunityOfPracticeLinkHref(expectedHref: string): Promise<void> {
    await expect(this.communityOfPracticeLink).toHaveAttribute('href', expectedHref);
  }

  async assertBlockquoteText(expectedText: string): Promise<void> {
    await expect(this.blockquoteText).toHaveText(expectedText);
  }

  async assertContactUsLinkHref(expectedHref: string): Promise<void> {
    await expect(this.contactUsLink).toHaveAttribute('href', expectedHref);
  }

  async assertImagePresence(): Promise<void> {
    await expect(this.ldsImage).toBeVisible();
  }
}