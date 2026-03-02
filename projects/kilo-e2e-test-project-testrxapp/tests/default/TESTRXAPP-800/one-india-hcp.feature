/**
 * Auto-generated Playwright test
 * Test: One India HCP
 * Project: proj_85874ca7
 * Generated: 2026-03-02T14:14:26.079Z
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
    Then I should see the Work Order corresponding to the meeting in the processed file

  Scenario: Process VEM CSV with missing PAN field and add PAN
    Given I have triggered ingestion of a VEM CSV with missing PAN field
    When I log into the Work Order Solution Portal as a CMS team user
    And I open the Work Order associated with the meeting
    And I enter the PAN details and save
    Then I should be able to proceed with Work Order generation

  Scenario: Process VEM CSV with preparation time over 3 hours
    Given I have triggered ingestion of a VEM CSV with preparation time over 3 hours
    When I log into the Work Order Solution Portal as a CMS team user
    And I open the Work Order associated with the meeting
    And I confirm the preparation time and approvals
    Then I should be able to proceed with Work Order creation
