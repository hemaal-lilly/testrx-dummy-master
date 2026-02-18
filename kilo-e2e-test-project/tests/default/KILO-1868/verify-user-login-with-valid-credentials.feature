/**
 * Auto-generated Playwright test
 * Test: Verify user login with valid credentials
 * Project: proj_25bb8a96
 * Generated: 2026-02-18T09:24:42.076Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @high_priority
Feature: Verify user login with valid credentials
  As a user
  I want to log in using valid credentials
  So that I can access my account

  Scenario: Verify user login with valid credentials
    Given I am on the login page
    When I enter valid credentials and submit
    Then I should be redirected to the dashboard
