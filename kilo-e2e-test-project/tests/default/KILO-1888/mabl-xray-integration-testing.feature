/**
 * Auto-generated Playwright test
 * Test: Mabl-Xray integration testing.
 * Project: proj_e65e9522
 * Generated: 2026-02-19T08:22:41.321Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: Mabl-Xray integration testing.
  As a user
  I want to verify the Mabl-Xray integration functionality
  So that I can ensure the integration works as expected

  Scenario: Mabl-Xray integration testing.
    Given I am on the Playwright homepage
    When I verify the page title
    Then I should see the correct page title
