/**
 * Auto-generated Playwright test
 * Test: User login with valid credentials [KILO-1870]
 * Project: proj_172871d2
 * Generated: 2026-02-18T13:24:37.056Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: User login with valid credentials [KILO-1870]
  As a user
  I want to log in with valid credentials
  So that I can access my account

  Scenario: User login with valid credentials [KILO-1870]
    Given I am on the Playwright homepage
    When I log in with valid credentials
    Then I should see the dashboard page
