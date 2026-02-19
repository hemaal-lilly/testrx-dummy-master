/**
 * Auto-generated Playwright test
 * Test: Test swagger integration in for API documentation in TestRx Automator
 * Project: proj_6ea48087
 * Generated: 2026-02-19T07:47:40.300Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: Test swagger integration in for API documentation in TestRx Automator
  As a user
  I want to verify swagger integration for API documentation
  So that I can ensure the API documentation is accessible and functional

  Scenario: Verify swagger integration for API documentation
    Given I navigate to the Playwright homepage
    When I check the page title
    Then I should see the correct title displayed
