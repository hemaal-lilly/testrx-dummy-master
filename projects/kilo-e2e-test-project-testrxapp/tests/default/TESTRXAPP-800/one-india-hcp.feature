# Test: One India HCP
# Project: proj_ad3a22d4
# Generated: 2026-03-05T05:13:48.332Z
# @generated

@automated @regression
Feature: One India HCP
  As a user
  I want to process VEM CSV files and manage Work Orders
  So that I can ensure proper Work Order generation and notifications

  Scenario: Process VEM CSV with missing required fields
    Given I have triggered ingestion of the prepared VEM CSV with missing required fields
    When I open the Work Order Solution Portal
    Then I should be able to search for the Work Order corresponding to the meeting in the processed file

  Scenario: Process VEM CSV with missing PAN field
    Given I have triggered ingestion of the VEM CSV with PAN missing
    When I log into the Work Order Solution Portal as a CMS team user
    And I open the Work Order associated with the meeting
    Then I should be able to enter the PAN details and save the entry

  Scenario: Process VEM CSV with preparation time over 3 hours
    Given I have triggered ingestion of the VEM CSV with preparation time over 3 hours
    When I log into the Work Order Solution Portal as a CMS team user
    And I open the Work Order associated with the meeting
    Then I should manually confirm the required approvals and proceed with Work Order creation
