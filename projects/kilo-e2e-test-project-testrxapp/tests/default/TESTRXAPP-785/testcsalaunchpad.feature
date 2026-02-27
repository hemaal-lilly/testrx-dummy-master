/**
 * Auto-generated Playwright test
 * Test: Test_csa_launchpad
 * Project: proj_e8e80b6c
 * Generated: 2026-02-27T08:48:32.274Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: Test_csa_launchpad
  As a user
  I want to navigate to the Playwright homepage
  So that I can verify the "Node.js" button is visible

  Scenario: Verify the Playwright homepage and "Node.js" button
    Given I am on the Playwright homepage
    When I check for the "Node.js" button
    Then I should see the "Node.js" button is visible
