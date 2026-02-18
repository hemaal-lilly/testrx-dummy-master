/**
 * Auto-generated Playwright test
 * Test: User login with valid credentials [KILO-1870]
 * Project: proj_471641bd
 * Generated: 2026-02-18T12:19:50.751Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @medium
Feature: User login with valid credentials [KILO-1870]
  As a user
  I want to log in with valid credentials
  So that I can access my account successfully

  Scenario: User login with valid credentials [KILO-1870]
    Given I am on the Playwright homepage
    When I enter valid credentials and submit
    Then I should be redirected to the success page
