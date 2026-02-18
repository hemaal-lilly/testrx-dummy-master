/**
 * Auto-generated Playwright test
 * Test: Login test for KILO-1870
 * Project: proj_25bb8a96
 * Generated: 2026-02-18T11:02:09.719Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @TestKey=KILO-1870
Feature: Login test for KILO-1870
  As a user
  I want to log in to the application
  So that I can access my account

  Scenario: Login test for KILO-1870
    Given I am on the Playwright homepage
    When I navigate to the login page
    And I enter valid credentials
    And I submit the login form
    Then I should be logged in successfully
