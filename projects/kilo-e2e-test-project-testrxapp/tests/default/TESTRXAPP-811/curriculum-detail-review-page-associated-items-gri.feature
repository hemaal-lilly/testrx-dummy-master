# Test: Curriculum Detail Review page -- Associated Items grid -- Associate an Item dialog window and grid
# Project: proj_4f91ce9f
# Generated: 2026-03-05T11:38:35.127Z
# @generated

@automated @regression
Feature: Curriculum Detail Review page -- Associated Items grid -- Associate an Item dialog window and grid
  As a user
  I want to associate items to the curriculum
  So that I can manage curriculum dependencies effectively

  Scenario: Open the Associate an Item dialog window
    Given I am on the Curriculum Detail Review page
    When I click the "Associate an Item" button
    Then I should see the Associate an Item dialog window

  Scenario: Search for a valid Item ID
    Given I am on the Associate an Item dialog window
    When I enter a valid Item ID {string} into the search field
    And I click the Search button
    Then I should see the search results grid populated with matching items

  Scenario: Search for a non-matching Item ID
    Given I am on the Associate an Item dialog window
    When I enter a non-matching Item ID {string} into the search field
    And I click the Search button
    Then I should see no results in the search results grid

  Scenario: Validate search results grid structure
    Given I have searched for a valid Item ID {string}
    Then I should see the search results grid with correct column headers and cell controls

  Scenario: Attempt to associate an item without proper access
    Given I am on the Curriculum Detail Review page as a user without proper access
    Then I should not see the "Associate an Item" button

  Scenario: Search with an empty Item ID field
    Given I am on the Associate an Item dialog window
    When I leave the Item ID field empty
    And I click the Search button
    Then I should see an error message indicating the field is required

  Scenario: Enter invalid data into the Item Revision Date field
    Given I have searched for a valid Item ID {string}
    When I attempt to enter invalid data {string} into the Item Revision Date field
    Then I should see an error message indicating invalid date format
