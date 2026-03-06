/**
 * Auto-generated Playwright test
 * Test: One India HCP
 * Project: proj_e8e80b6c
 * Generated: 2026-03-06T11:37:00.587Z
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
    Given I trigger ingestion of the VEM CSV with missing required fields
    When I open the Work Order Solution Portal
    Then I should see the corresponding Work Order for the meeting

  Scenario: Process VEM CSV with PAN missing
    Given I trigger ingestion of the VEM CSV with PAN missing
    When I log into the Work Order Solution Portal as a CMS team user
    Then I should be able to enter PAN details and save the Work Order

  Scenario: Process VEM CSV with preparation time over 3 hours
    Given I trigger ingestion of the VEM CSV with preparation time over 3 hours
    When I log into the Work Order Solution Portal as a CMS team user
    Then I should confirm approvals and proceed with Work Order creation
