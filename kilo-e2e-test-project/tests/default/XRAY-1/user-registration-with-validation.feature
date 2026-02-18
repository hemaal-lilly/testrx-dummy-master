/**
 * Auto-generated Playwright test
 * Test: User registration with validation
 * Project: proj_471641bd
 * Generated: 2026-02-18T11:50:39.120Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @high_priority
Feature: User registration with validation
  As a user
  I want to register on the website
  So that I can access its features

  Scenario: Successful user registration
    Given I am on the registration page
    When I fill in the registration form with valid data
    And I submit the registration form
    Then I should see a success message
