/**
 * Auto-generated Playwright test
 * Test: Mabl-Xray integration testing.
 * Project: proj_aa18f7ea
 * Generated: 2026-02-18T12:40:25.995Z
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
    Then I should see the correct title displayed
