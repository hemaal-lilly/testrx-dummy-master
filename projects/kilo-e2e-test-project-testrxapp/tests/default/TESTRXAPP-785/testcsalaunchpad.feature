/**
 * Auto-generated Playwright test
 * Test: Test_csa_launchpad
 * Project: proj_e8e80b6c
 * Generated: 2026-02-28T19:06:16.015Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: Test_csa_launchpad
  As a user
  I want to navigate to the Playwright homepage
  So that I can verify the presence of the "Node.js" button

  Scenario: Verify Node.js button presence
    Given I am on the Playwright homepage
    When I check for the "Node.js" button
    Then I should see the "Node.js" button displayed
