# Test: One India HCP
# Project: proj_89e94c34
# Generated: 2026-03-05T08:13:43.125Z
# @generated

@automated @regression
Feature: One India HCP
  As a CMS team user
  I want to process VEM CSV files and manage Work Orders
  So that I can ensure proper handling and validation of Work Orders

  Scenario: Process VEM CSV with missing required fields
    Given I trigger ingestion of the prepared VEM CSV with missing required fields
    When I open the Work Order Solution Portal
    Then I should be able to search for the Work Order corresponding to the meeting in the processed file

  Scenario: Process VEM CSV with missing PAN field and manually enter PAN
    Given I trigger ingestion of the VEM CSV with PAN missing
    And I log into the Work Order Solution Portal as a CMS team user
    When I open the Work Order associated with the meeting
    And I enter the PAN details in the appropriate PAN field
    And I save the PAN entry
    Then I should be able to initiate the next steps of Work Order generation via the portal

  Scenario: Process VEM CSV with preparation time over 3 hours
    Given I trigger ingestion of the VEM CSV with preparation time over 3 hours
    And I log into the Work Order Solution Portal as a CMS team user
    When I open the Work Order associated with the meeting
    And I manually confirm the required approvals and preparation time
    Then I should be able to proceed with Work Order creation after confirmation
