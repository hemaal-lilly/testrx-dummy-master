# Test: One India HCP
# Project: proj_ad3a22d4
# Generated: 2026-03-04T13:26:37.747Z
# @generated

@automated @regression
Feature: One India HCP
  As a CMS team user
  I want to process and validate VEM CSV files
  So that I can manage Work Orders effectively

  Scenario: Process VEM CSV with missing required fields
    Given I have triggered ingestion of the VEM CSV with missing required fields
    When I open the Work Order Solution Portal
    Then I should be able to search for the Work Order corresponding to the meeting

  Scenario: Process VEM CSV with missing PAN field
    Given I have triggered ingestion of the VEM CSV with missing PAN field
    When I log into the Work Order Solution Portal as a CMS team user
    And I open the Work Order associated with the meeting
    Then I should be able to enter the PAN details and save them
    And I should be able to initiate the next steps of Work Order generation

  Scenario: Process VEM CSV with preparation time over 3 hours
    Given I have triggered ingestion of the VEM CSV with preparation time over 3 hours
    When I log into the Work Order Solution Portal as a CMS team user
    And I open the Work Order associated with the meeting
    Then I should confirm the preparation time and required approvals
    And I should proceed with Work Order creation after confirmation
