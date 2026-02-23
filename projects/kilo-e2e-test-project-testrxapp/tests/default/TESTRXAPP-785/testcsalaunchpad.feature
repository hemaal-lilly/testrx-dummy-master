/**
 * Auto-generated Playwright test
 * Test: Test_csa_launchpad
 * Project: proj_16976482
 * Generated: 2026-02-23T05:47:32.631Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: Test_csa_launchpad
  As a user
  I want to access the Playwright homepage
  So that I can verify the "Node.js" button is present and clickable

  Scenario: Verify the "Node.js" button on the Playwright homepage
    Given I am on the Playwright homepage
    When I check for the "Node.js" button
    Then I should see the "Node.js" button and it should be clickable
