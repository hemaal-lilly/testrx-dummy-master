/**
 * Auto-generated Playwright test
 * Test: Mabl-Xray integration testing.
 * Project: proj_8bc51585
 * Generated: 2026-02-09T10:05:55.358Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

test.describe('Mabl-Xray integration testing', () => {
  test('should navigate through the application and verify logo alt text', async ({ page }) => {
    // Set viewport size
    await page.setViewportSize({ width: 1080, height: 1440 });

    // Navigate to the application URL
    const appUrl = 'https://playwright.dev/';
    await page.goto(appUrl);

    // Enter email in the login field
    const emailFieldSelector = 'input[type="email"]';
    await page.fill(emailFieldSelector, 'aso_marketplace@elililly.onmicrosoft.com');

    // Click the next button after entering email
    const nextButtonSelector = '#idSIButton9';
    await page.click(nextButtonSelector);

    // Wait for the password field to appear and enter password
    const passwordFieldSelector = 'input[type="password"]';
    await page.waitForSelector(passwordFieldSelector);
    await page.fill(passwordFieldSelector, 'your_password_here'); // Replace with actual password

    // Click the next button after entering password
    await page.click(nextButtonSelector);

    // Navigate through dropdowns and sections
    const caretDownSelector = 'svg:has-text("CaretDown")';
    const intelligentAutomationSelector = 'span:has-text("Intelligent Automation")';
    const testAutomationSelector = 'span:has-text("Test Automation")';
    const documentProcessingSelector = 'span:has-text("Document Processing")';
    const contentAutomationSelector = 'span:has-text("Content Automation")';
    const processOptimizationSelector = 'span:has-text("Process Optimization")';
    const marketplaceSelector = 'span:has-text("Marketplace")';
    const techZoneSelector = 'span:has-text("TechZone")';
    const homeSelector = 'span:has-text("Home")';

    await page.click(caretDownSelector);
    await page.click(intelligentAutomationSelector);
    await page.click(caretDownSelector);
    await page.click(testAutomationSelector);
    await page.click(caretDownSelector);
    await page.click(documentProcessingSelector);
    await page.click(caretDownSelector);
    await page.click(contentAutomationSelector);

    // Click on a <path> element (assuming a reliable selector is available);
    const pathElementSelector = 'path'; // Replace with a more specific selector if possible
    await page.click(pathElementSelector);

    await page.click(processOptimizationSelector);
    await page.click(marketplaceSelector);
    await page.click(techZoneSelector);
    await page.click(homeSelector);

    // Verify the alt text of the logo
    const logoSelector = 'img.logo-responsive';
    const logoAltText = await page.getAttribute(logoSelector, 'alt');
    expect(logoAltText).toBe('Brand Logo');
  });
});
