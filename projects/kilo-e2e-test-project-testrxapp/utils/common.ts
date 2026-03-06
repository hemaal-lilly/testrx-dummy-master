/**
 * Common Utilities for Test Automation
 * 
 * This file is managed by TestRx Automator.
 * Contains reusable helper functions for Playwright tests.
 * 
 * @generated
 */

import { Page, Locator, expect, APIRequestContext, Response } from '@playwright/test';

// ==================== Wait Helpers ====================
/**
 * Wait for an element to be visible
 */
export async function waitForElement(
  page: Page,
  selector: string,
  options?: { timeout?: number; state?: 'visible' | 'attached' | 'hidden' }
): Promise<Locator> {
  const locator = page.locator(selector);
  await locator.waitFor({ 
    state: options?.state || 'visible', 
    timeout: options?.timeout || 30000 
  });
  return locator;
}

/**
 * Wait for page navigation to complete
 */
export async function waitForNavigation(
  page: Page,
  options?: { timeout?: number; waitUntil?: 'load' | 'domcontentloaded' | 'networkidle' }
): Promise<void> {
  await page.waitForLoadState(options?.waitUntil || 'networkidle', {
    timeout: options?.timeout || 30000
  });
}

/**
 * Wait for network to be idle
 */
export async function waitForNetworkIdle(page: Page, timeout = 30000): Promise<void> {
  await page.waitForLoadState('networkidle', { timeout });
}

// ==================== Data Generators ====================
/**
 * Generate a random email address
 */
export function generateRandomEmail(domain = 'test.com'): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `test_${timestamp}_${random}@${domain}`;
}

/**
 * Generate a random alphanumeric string
 */
export function generateRandomString(length = 10): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Generate a random number within a range
 */
export function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a UUID v4
 */
export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// ==================== Format Helpers ====================
/**
 * Format a date to a specific format
 */
export function formatDate(date: Date, format: 'iso' | 'short' | 'long' = 'iso'): string {
  switch (format) {
    case 'iso':
      return date.toISOString();
    case 'short':
      return date.toLocaleDateString('en-US');
    case 'long':
      return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    default:
      return date.toISOString();
  }
}

/**
 * Format a number as currency
 */
export function formatCurrency(amount: number, currency = 'USD', locale = 'en-US'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

// ==================== API Helpers ====================
/**
 * Make an API request using Playwright request context
 */
export async function apiRequest<T>(
  request: APIRequestContext,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  url: string,
  options?: {
    data?: Record<string, unknown>;
    headers?: Record<string, string>;
  }
): Promise<{ status: number; data: T }> {
  const response = await request[method.toLowerCase() as 'get' | 'post' | 'put' | 'delete' | 'patch'](url, {
    data: options?.data,
    headers: options?.headers,
  });
  
  const data = await response.json();
  return { status: response.status(), data: data as T };
}

/**
 * Wait for a specific API response
 */
export async function waitForApiResponse(
  page: Page,
  urlPattern: string | RegExp,
  options?: { timeout?: number }
): Promise<Response> {
  return page.waitForResponse(urlPattern, { timeout: options?.timeout || 30000 });
}

// ==================== Assertion Helpers ====================
/**
 * Assert that an element contains specific text
 */
export async function assertElementText(
  page: Page,
  selector: string,
  expectedText: string,
  options?: { exact?: boolean }
): Promise<void> {
  const locator = page.locator(selector);
  if (options?.exact) {
    await expect(locator).toHaveText(expectedText);
  } else {
    await expect(locator).toContainText(expectedText);
  }
}

/**
 * Assert that the current URL contains a string
 */
export async function assertUrlContains(page: Page, expectedPath: string): Promise<void> {
  await expect(page).toHaveURL(new RegExp(expectedPath));
}

/**
 * Assert that an element is visible
 */
export async function assertElementVisible(page: Page, selector: string): Promise<void> {
  await expect(page.locator(selector)).toBeVisible();
}

/**
 * Assert that an element is not visible
 */
export async function assertElementNotVisible(page: Page, selector: string): Promise<void> {
  await expect(page.locator(selector)).not.toBeVisible();
}

// ==================== Other Utilities ====================
/**
 * Take a screenshot with a descriptive name
 */
export async function takeScreenshot(
  page: Page,
  name: string,
  options?: { fullPage?: boolean }
): Promise<Buffer> {
  const timestamp = Date.now();
  const filename = `${name}_${timestamp}.png`;
  return page.screenshot({ 
    path: `screenshots/${filename}`,
    fullPage: options?.fullPage || false 
  });
}

/**
 * Log a test step with context
 */
export function logStep(step: string, context?: Record<string, unknown>): void {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] STEP: ${step}`, context ? JSON.stringify(context) : '');
}

// ==================== End of Utilities ====================
