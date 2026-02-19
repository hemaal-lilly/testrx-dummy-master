/**
 * Auto-generated Playwright test
 * Test: Search functionality with filters
 * Project: proj_95bb03a1
 * Generated: 2026-02-19T04:17:09.525Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @medium
Feature: Search functionality with filters
  As a user
  I want to search for content using filters
  So that I can find relevant results efficiently

  Scenario: Search functionality with filters
    Given I am on the Playwright homepage
    When I search for "testing" using filters
    Then I should see relevant search results
