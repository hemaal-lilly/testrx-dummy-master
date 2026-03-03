/**
 * Auto-generated Playwright test
 * Test: One India HCP
 * Project: proj_53d6aeb3
 * Generated: 2026-03-03T11:09:28.878Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: One India HCP
  As a CMS team user
  I want to process VEM CSV files and manage Work Orders
  So that I can ensure proper Work Order generation and validation

  Scenario: Process VEM CSV with missing required fields
    Given I have triggered ingestion of the VEM CSV with missing required fields
    When I open the Work Order Solution Portal
    Then I should see the Work Order corresponding to the meeting in the processed file

  Scenario: Process VEM CSV with missing PAN field
    Given I have triggered ingestion of the VEM CSV with missing PAN field
    When I log into the Work Order Solution Portal as a CMS team user
    And I open the Work Order associated with the meeting
    Then I should be able to enter the PAN details and save successfully

  Scenario: Process VEM CSV with preparation time over 3 hours
    Given I have triggered ingestion of the VEM CSV with preparation time over 3 hours
    When I log into the Work Order Solution Portal as a CMS team user
    And I open the Work Order associated with the meeting
    Then I should manually confirm approvals and proceed with Work Order creation
