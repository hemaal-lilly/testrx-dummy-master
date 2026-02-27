/**
 * Auto-generated Playwright test
 * Test: Mabl-Xray integration testing.
 * Project: proj_471641bd
 * Generated: 2026-02-18T12:19:39.552Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @medium
Feature: Mabl-Xray integration testing.
  As a user
  I want to navigate through the application and verify the logo
  So that I can ensure the application functions correctly

  Scenario: Mabl-Xray integration testing.
    Given I set the viewport size to 1080x1440
    And I navigate to the application URL
    When I log in with valid credentials
    And I navigate through the application sections
    Then I should see the brand logo with alt text "Brand Logo"
