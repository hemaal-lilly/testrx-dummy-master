/**
 * Auto-generated Playwright test
 * Test: One India HCP
 * Project: proj_c65ae569
 * Generated: 2026-03-03T17:23:42.222Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: One India HCP
  As a CMS team user
  I want to process VEM CSV files and manage Work Orders
  So that I can ensure proper handling and validation of meeting data

  Scenario: Process VEM CSV with missing required fields
    Given I trigger ingestion of a VEM CSV with missing required fields
    When I open the Work Order Solution Portal
    Then I should be able to search for the Work Order corresponding to the meeting

  Scenario: Process VEM CSV with missing PAN field
    Given I trigger ingestion of a VEM CSV with missing PAN field
    When I log into the Work Order Solution Portal as a CMS team user
    Then I should be able to manually enter the PAN and proceed with Work Order generation

  Scenario: Process VEM CSV with preparation time over 3 hours
    Given I trigger ingestion of a VEM CSV with preparation time over 3 hours
    When I log into the Work Order Solution Portal as a CMS team user
    Then I should confirm the preparation time and proceed with Work Order creation
