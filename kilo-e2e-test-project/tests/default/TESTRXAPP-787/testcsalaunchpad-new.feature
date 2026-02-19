/**
 * Auto-generated Playwright test
 * Test: Test_csa_launchpad-New
 * Project: proj_88e990f4
 * Generated: 2026-02-19T08:41:23.838Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: Test_csa_launchpad-New
  As a user
  I want to navigate to the Playwright homepage
  So that I can verify the page title

  Scenario: Verify Playwright homepage title
    Given I am on the Playwright homepage
    When I check the page title
    Then I should see the correct page title
