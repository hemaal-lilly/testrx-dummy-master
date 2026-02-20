/**
 * Auto-generated Playwright test
 * Test: Test_csa_launchpad
 * Project: proj_16976482
 * Generated: 2026-02-20T12:34:59.071Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: Test_csa_launchpad
  As a user
  I want to navigate to the Playwright homepage
  So that I can verify the presence of the Node.js button

  Scenario: Verify Node.js button on Playwright homepage
    Given I am on the Playwright homepage
    When I check for the Node.js button
    Then I should see the Node.js button displayed
