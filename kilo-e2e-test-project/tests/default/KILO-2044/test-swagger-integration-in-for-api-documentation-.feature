/**
 * Auto-generated Playwright test
 * Test: Test swagger integration in for API documentation in TestRx Automator
 * Project: proj_471641bd
 * Generated: 2026-02-18T12:19:43.227Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @medium
Feature: Test swagger integration in for API documentation in TestRx Automator
  As a user
  I want to verify the swagger integration for API documentation
  So that I can ensure the API documentation is accessible and functional

  Scenario: Test swagger integration in for API documentation in TestRx Automator
    Given I am on the Playwright homepage
    When I verify the page title
    Then I should see the correct page title
