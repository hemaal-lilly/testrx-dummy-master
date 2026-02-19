/**
 * Auto-generated Playwright test
 * Test: Marketplace-Test Automation
 * Project: proj_caefc71e
 * Generated: 2026-02-19T06:03:14.863Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: Marketplace-Test Automation
  As a user
  I want to navigate to the Playwright homepage
  So that I can verify the page title

  Scenario: Verify Playwright homepage title
    Given I am on the Playwright homepage
    When I check the page title
    Then the title should be "Fast and reliable end-to-end testing for modern web apps | Playwright"
