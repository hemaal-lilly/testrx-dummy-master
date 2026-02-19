/**
 * Auto-generated Playwright test
 * Test: Automated Login Test with Xray Integration
 * Project: proj_e65e9522
 * Generated: 2026-02-19T08:22:40.964Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @high
Feature: Automated Login Test with Xray Integration
  As a user
  I want to test the login functionality
  So that I can verify successful authentication

  Scenario: Automated Login Test with Xray Integration
    Given I navigate to the Playwright homepage
    When I perform the login action
    Then I should see the successful login result
