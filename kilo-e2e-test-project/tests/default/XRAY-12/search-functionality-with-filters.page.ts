// Page Object: SearchFunctionalityWithFiltersPage
import { Page, Locator, expect } from '@playwright/test';

export class SearchFunctionalityWithFiltersPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators (getter-based for lazy evaluation)
  get searchInput() { return this.page.locator('[data-testid="search-input"]'); }
  get searchButton() { return this.page.locator('[data-testid="search-button"]'); }
  get filterDropdown() { return this.page.locator('[data-testid="filter-dropdown"]'); }
  get filterOptionDocumentation() { return this.page.locator('[data-testid="filter-option-documentation"]'); }
  get searchResults() { return this.page.locator('[data-testid="search-results"]'); }

  // Actions
  /**
   * Navigate to the Playwright homepage
   */
  async navigate(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Perform a search query
   * @param query - The search term to input
   */
  async performSearch(query: string): Promise<void> {
    await this.searchInput.fill(query);
    await this.searchButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Apply a filter to the search results
   * @param filter - The filter option to select
   */
  async applyFilter(filter: string): Promise<void> {
    await this.filterDropdown.click();
    if (filter === 'Documentation') {
      await this.filterOptionDocumentation.click();
    }
    await this.page.waitForLoadState('networkidle');
  }

  // Assertions
  /**
   * Verify that search results are displayed
   */
  async expectSearchResults(): Promise<void> {
    await expect(this.searchResults).toBeVisible({ timeout: 5000 });
    await expect(this.searchResults).toContainText('end-to-end testing');
  }
}