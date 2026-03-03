/**
 * Auto-generated Playwright test
 * Test: Test_csa_launchpad
 * Project: proj_53d6aeb3
 * Generated: 2026-03-03T11:09:26.657Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: Test_csa_launchpad
  As a user
  I want to navigate to the Playwright homepage
  So that I can verify the presence of the "Node.js" button

  Scenario: Verify the "Node.js" button on the Playwright homepage
    Given I am on the Playwright homepage
    When I check for the "Node.js" button
    Then I should see the "Node.js" button displayed
