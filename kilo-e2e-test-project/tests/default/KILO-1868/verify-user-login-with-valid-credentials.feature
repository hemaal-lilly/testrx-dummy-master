/**
 * Auto-generated Playwright test
 * Test: Verify user login with valid credentials
 * Project: proj_95bb03a1
 * Generated: 2026-02-19T04:17:13.463Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: Verify user login with valid credentials
  As a user
  I want to log in using valid credentials
  So that I can access my account

  Scenario: Verify user login with valid credentials
    Given I am on the login page
    When I enter valid credentials and submit
    Then I should be logged in successfully
