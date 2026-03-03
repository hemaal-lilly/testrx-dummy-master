/**
 * Auto-generated Playwright test
 * Test: One India HCP
 * Project: proj_3b0856d5
 * Generated: 2026-03-03T23:25:19.368Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: One India HCP
  As a CMS team user
  I want to process VEM CSV files and manage Work Orders
  So that I can ensure proper handling of meetings and approvals

  Scenario: Process VEM CSV with missing required fields
    Given I have triggered ingestion of a VEM CSV with missing required fields
    When I open the Work Order Solution Portal
    Then I should see an error indicating missing fields

  Scenario: Process VEM CSV with all required fields
    Given I have triggered ingestion of a corrected VEM CSV with all required fields
    When I open the Work Order Solution Portal
    Then I should find the Work Order corresponding to the meeting

  Scenario: Enter PAN details for a Work Order
    Given I have triggered ingestion of a VEM CSV with PAN missing
    And I log into the Work Order Solution Portal as a CMS team user
    When I open the Work Order associated with the meeting
    And I enter the PAN details
    And I save the PAN entry
    Then I should be able to proceed with the next steps of Work Order generation
