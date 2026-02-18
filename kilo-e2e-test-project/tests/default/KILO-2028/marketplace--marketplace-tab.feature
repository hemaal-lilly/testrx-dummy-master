/**
 * Auto-generated Playwright test
 * Test: Marketplace- Marketplace Tab
 * Project: proj_aa18f7ea
 * Generated: 2026-02-18T12:40:06.612Z
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
