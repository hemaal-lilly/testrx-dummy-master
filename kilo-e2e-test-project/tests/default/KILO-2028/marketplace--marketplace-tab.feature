/**
 * Auto-generated Playwright test
 * Test: Marketplace- Marketplace Tab
 * Project: proj_172871d2
 * Generated: 2026-02-18T13:24:35.909Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: Marketplace- Marketplace Tab
  As a user
  I want to access the Marketplace tab
  So that I can view marketplace-related content

  Scenario: Marketplace- Marketplace Tab
    Given I am on the Playwright homepage
    When I navigate to the Marketplace tab
    Then I should see the Marketplace tab content
