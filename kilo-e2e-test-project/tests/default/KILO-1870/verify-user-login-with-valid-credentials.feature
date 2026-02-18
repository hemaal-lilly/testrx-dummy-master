/**
 * Auto-generated Playwright test
 * Test: Verify user login with valid credentials
 * Project: proj_aa18f7ea
 * Generated: 2026-02-18T12:40:20.594Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @high_priority
Feature: Verify user login with valid credentials
  As a user
  I want to log in with valid credentials
  So that I can access my account securely

  Scenario: Verify user login with valid credentials
    Given I am on the login page
    When I enter valid credentials and submit
    Then I should be redirected to the dashboard
