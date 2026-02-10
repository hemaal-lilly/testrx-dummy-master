/**
 * Auto-generated Playwright test
 * Test: Mabl-Xray integration testing.
 * Project: proj_b6fd7216
 * Generated: 2026-02-10T06:29:33.456Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

test.describe('Mabl-Xray integration testing', () => {
  test('should navigate through the application and verify the logo alt text', async ({ page }) => {
    const appUrl = 'https://playwright.dev/'; // Replace with the actual app URL if different

    // Step 1: Set viewport size
    await page.setViewportSize({ width: 1080, height: 1440 });

    // Step 2: Visit the application URL
    await page.goto(appUrl);

    // Step 3: Enter email in the login field
    await page.fill('input[type="email"]', 'aso_marketplace@elililly.onmicrosoft.com');

    // Step 4: Click the "Next" button
    await page.click('#idSIButton9');

    // Step 5: Click on the password field
    await page.click('input[type="password"]');

    // Step 6: Enter the password (replace with a secure method for handling passwords);
    await page.fill('input[type="password"]', 'your-secure-password'); // Replace with actual password

    // Step 7: Click the "Sign in" button
    await page.click('#idSIButton9');

    // Step 8-20: Navigate through dropdowns and menu items
    await page.click('svg:has-text("CaretDown")'); // Open dropdown
    await page.click('span:has-text("Intelligent Automation")');

    await page.click('svg:has-text("CaretDown")'); // Open dropdown
    await page.click('span:has-text("Test Automation")');

    await page.click('svg:has-text("CaretDown")'); // Open dropdown
    await page.click('span:has-text("Document Processing")');

    await page.click('svg:has-text("CaretDown")'); // Open dropdown
    await page.click('span:has-text("Content Automation")');

    await page.click('path'); // Click on a path element (ensure this is the correct selector)
;
    await page.click('span:has-text("Process Optimization")');
    await page.click('span:has-text("Marketplace")');
    await page.click('span:has-text("TechZone")');
    await page.click('span:has-text("Home")');

    // Step 21: Assert the alt attribute of the logo image
    const logo = await page.locator('img.logo-responsive');
    await expect(logo).toHaveAttribute('alt', 'Brand Logo');
  });
});
