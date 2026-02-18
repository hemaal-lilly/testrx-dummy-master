/**
 * Auto-generated Playwright test
 * Test: Test swagger integration in for API documentation in TestRx Automator
 * Project: proj_172871d2
 * Generated: 2026-02-18T13:24:35.841Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: Test swagger integration in for API documentation in TestRx Automator
  As a user
  I want to verify the swagger integration for API documentation
  So that I can ensure the documentation is accessible and functional

  Scenario: Test swagger integration in for API documentation in TestRx Automator
    Given I am on the Playwright homepage
    When I navigate to the API documentation section
    Then I should see the swagger integration loaded successfully
