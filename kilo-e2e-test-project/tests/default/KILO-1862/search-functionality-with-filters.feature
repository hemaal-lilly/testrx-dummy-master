/**
 * Auto-generated Playwright test
 * Test: Search functionality with filters
 * Project: proj_172871d2
 * Generated: 2026-02-18T13:25:28.055Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @medium
Feature: Search functionality with filters
  As a user
  I want to search for items with specific filters
  So that I can find relevant results efficiently

  Scenario: Search functionality with filters
    Given I am on the Playwright homepage
    When I search for "end-to-end testing"
    And I apply the "Documentation" filter
    Then I should see relevant search results
