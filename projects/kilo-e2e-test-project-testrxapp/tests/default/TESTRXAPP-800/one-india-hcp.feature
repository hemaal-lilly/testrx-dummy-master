/**
 * Auto-generated Playwright test
 * Test: One India HCP
 * Project: proj_e8e80b6c
 * Generated: 2026-03-02T10:21:09.150Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: One India HCP
  As a CMS team user
  I want to process VEM CSV files and manage Work Orders
  So that I can ensure accurate and timely Work Order generation

  Scenario: Process VEM CSV with missing required fields
    Given I trigger ingestion of the prepared VEM CSV with missing required fields
    When I open the Work Order Solution Portal
    Then I should see the Work Order corresponding to the processed file

  Scenario: Process VEM CSV with PAN missing and update PAN
    Given I trigger ingestion of the VEM CSV with PAN missing
    When I log into the Work Order Solution Portal as a CMS team user
    And I open the Work Order associated with the meeting
    And I enter the PAN details in the appropriate field
    And I save the PAN entry
    Then I should be able to initiate the next steps of Work Order generation

  Scenario: Process VEM CSV with preparation time over 3 hours
    Given I trigger ingestion of the VEM CSV with preparation time over 3 hours
    When I log into the Work Order Solution Portal as a CMS team user
    And I open the Work Order associated with the meeting
    And I manually confirm required approvals and preparation time
    Then I should be able to proceed with Work Order creation
