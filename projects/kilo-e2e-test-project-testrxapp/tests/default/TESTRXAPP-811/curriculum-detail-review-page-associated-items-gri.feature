# Test: Curriculum Detail Review page -- Associated Items grid -- Associate an Item dialog window and grid
# Project: proj_ad3a22d4
# Generated: 2026-03-05T05:14:04.167Z
# @generated

@automated @regression
Feature: Curriculum Detail Review page -- Associated Items grid -- Associate an Item dialog window and grid
  As a user
  I want to associate items with the curriculum
  So that I can manage associated items effectively

  Scenario: Open the Associate an Item dialog window
    Given I am on the Curriculum Detail Review page
    When I click the "Associate an Item" button
    Then I should see the Associate an Item dialog window

  Scenario: Verify action buttons in the dialog window
    Given I am on the Curriculum Detail Review page
    When I click the "Associate an Item" button
    Then I should see action buttons displayed within the dialog

  Scenario: Search for a valid Item ID
    Given I am on the Curriculum Detail Review page
    When I click the "Associate an Item" button
      And I enter a valid Item ID into the search field
      And I click the Search button
    Then I should see the search results grid populated

  Scenario: Search for a non-matching Item ID
    Given I am on the Curriculum Detail Review page
    When I click the "Associate an Item" button
      And I enter a non-matching Item ID into the search field
      And I click the Search button
    Then I should see no results in the search grid

  Scenario: Verify search results grid structure
    Given I am on the Curriculum Detail Review page
    When I click the "Associate an Item" button
      And I enter a valid Item ID into the search field
      And I click the Search button
    Then I should see the grid with correct column headers and controls

  Scenario: Verify access restrictions
    Given I am a user without proper access
    When I navigate to the Curriculum Detail Review page
    Then I should not see the "Associate an Item" button

  Scenario: Search with an empty Item ID field
    Given I am on the Curriculum Detail Review page
    When I click the "Associate an Item" button
      And I leave the Item ID field empty
      And I click the Search button
    Then I should see an error message indicating the field is required

  Scenario: Validate date picker input
    Given I am on the Curriculum Detail Review page
    When I click the "Associate an Item" button
      And I enter a valid Item ID into the search field
      And I click the Search button
      And I click into the Item Revision Date cell
      And I attempt to type a non-date string into the date input
    Then I should see an error message indicating invalid date format
