/**
 * Auto-generated Playwright test
 * Test: Mabl-Xray integration testing.
 * Project: proj_b4c5e895
 * Generated: 2026-02-10T05:58:34.055Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @high_priority
Feature: Mabl-Xray integration testing.
  As a user
  I want to test Mabl-Xray integration
  So that I can ensure the application behaves as expected

  Scenario: Mabl-Xray integration testing.
    Given I set the viewport size to 1080x1440
    And I navigate to the application URL
    When I enter "aso_marketplace@elililly.onmicrosoft.com" in the email field
    And I click the login button
    And I enter the password in the password field
    And I click the login button again
    And I navigate through the Intelligent Automation menu
    And I navigate through the Test Automation menu
    And I navigate through the Document Processing menu
    And I navigate through the Content Automation menu
    And I navigate through the Process Optimization menu
    And I navigate to the Marketplace section
    And I navigate to the TechZone section
    And I navigate to the Home section
    Then I should see the brand logo with alt text "Brand Logo"
