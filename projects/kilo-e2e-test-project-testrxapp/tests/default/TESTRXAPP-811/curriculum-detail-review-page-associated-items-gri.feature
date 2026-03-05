# Test: Curriculum Detail Review page -- Associated Items grid -- Associate an Item dialog window and grid
# Project: proj_4f91ce9f
# Generated: 2026-03-05T11:35:36.451Z
# @generated

@automated @regression
Feature: Curriculum Detail Review page -- Associated Items grid -- Associate an Item dialog window and grid
  As a user
  I want to associate items to a curriculum
  So that I can manage curriculum details effectively

  Scenario: Open the Associate an Item dialog window
    Given I am on the Curriculum Detail Review page
    When I click the "Associate an Item" button
    Then I should see the Associate an Item dialog window

  Scenario: Search for a valid Item ID in the dialog window
    Given I have opened the Associate an Item dialog window
    When I enter a valid Item ID into the "Item ID" search field
    And I click the Search button
    Then I should see the search results grid populated with matching items

  Scenario: Search for a non-matching Item ID in the dialog window
    Given I have opened the Associate an Item dialog window
    When I enter a non-matching Item ID into the "Item ID" search field
    And I click the Search button
    Then I should see no results in the search results grid

  Scenario: Validate search results grid column headers and row controls
    Given I have searched for a valid Item ID
    Then I should see correct column headers and row controls in the search results grid

  Scenario: Verify restricted access to Associate an Item functionality
    Given I am a user without proper access
    When I navigate to the Curriculum Detail Review page
    Then I should not see the "Associate an Item" button

  Scenario: Validate empty search field behavior
    Given I have opened the Associate an Item dialog window
    When I leave the "Item ID" search field empty
    And I click the Search button
    Then I should see an appropriate error message

  Scenario: Validate invalid date input in the Item Revision Date cell
    Given I have populated the search results grid with a valid Item ID
    When I attempt to type a non-date string into the Item Revision Date cell
    Then I should see a validation error for the date input
