/**
 * Auto-generated Playwright test
 * Test: User registration with validation
 * Project: proj_172871d2
 * Generated: 2026-02-19T03:23:59.236Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @high_priority
Feature: User registration with validation
  As a user
  I want to register on the website
  So that I can access personalized features

  Scenario: Successful user registration
    Given I am on the registration page
    When I fill in valid registration details
    And I submit the registration form
    Then I should see a confirmation message
