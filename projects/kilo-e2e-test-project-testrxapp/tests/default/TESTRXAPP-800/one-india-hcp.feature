# Test: One India HCP
# Project: proj_1eb5049a
# Generated: 2026-03-04T05:02:12.929Z
# @generated

@automated @regression
Feature: One India HCP
  As a CMS team user
  I want to process VEM CSV files and manage Work Orders
  So that I can ensure proper handling of meetings and approvals

  Scenario: Process VEM CSV with missing required fields
    Given I trigger ingestion of the VEM CSV with missing required fields
    When I open the Work Order Solution Portal
    Then I search for the Work Order corresponding to the meeting

  Scenario: Process corrected VEM CSV with all required fields
    Given I trigger ingestion of the corrected VEM CSV
    When I open the Work Order Solution Portal
    Then I search for the Work Order corresponding to the meeting

  Scenario: Process VEM CSV with missing PAN field
    Given I trigger ingestion of the VEM CSV with missing PAN field
    When I log into the Work Order Solution Portal as a CMS team user
    Then I open the Work Order associated with the meeting
    And I enter the PAN details
    And I save the PAN entry
    And I initiate the next steps of Work Order generation

  Scenario: Process VEM CSV with preparation time over 3 hours
    Given I trigger ingestion of the VEM CSV with preparation time over 3 hours
    When I log into the Work Order Solution Portal as a CMS team user
    Then I open the Work Order associated with the meeting
    And I manually confirm approvals and preparation time
    And I proceed with Work Order creation
