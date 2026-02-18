/**
 * Auto-generated Playwright test
 * Test: Login Test with Cucumber Format [AUTO]
 * Project: proj_471641bd
 * Generated: 2026-02-18T11:47:40.545Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @high
Feature: Login Test with Cucumber Format [AUTO]
  As a user
  I want to log in to the application
  So that I can access the protected areas of the site

  Scenario: Login Test with Cucumber Format [AUTO]
    Given I am on the Playwright homepage
    When I navigate to the login page and enter valid credentials
    Then I should be successfully logged in
