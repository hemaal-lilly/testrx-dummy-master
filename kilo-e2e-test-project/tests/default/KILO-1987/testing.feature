/**
 * Auto-generated Playwright test
 * Test: Testing
 * Project: proj_172871d2
 * Generated: 2026-02-18T12:59:44.150Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: Testing
  As a user
  I want to test the Playwright website
  So that I can verify its functionality

  Scenario: Navigate to Playwright homepage
    Given I am on the Playwright homepage
    When I check the page title
    Then I should see the correct page title
