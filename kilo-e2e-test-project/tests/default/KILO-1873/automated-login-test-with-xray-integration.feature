/**
 * Auto-generated Playwright test
 * Test: Automated Login Test with Xray Integration
 * Project: proj_471641bd
 * Generated: 2026-02-18T12:13:33.829Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @high_priority
Feature: Automated Login Test with Xray Integration
  As a user
  I want to log in to the application
  So that I can access my account securely

  Scenario: Successful login
    Given I am on the Playwright homepage
    When I navigate to the login page and enter valid credentials
    Then I should be successfully logged in
