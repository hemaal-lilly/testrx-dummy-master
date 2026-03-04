# Test: Curriculum Detail Review page -- Associated Items grid -- Associate an Item dialog window and grid
# Project: proj_1eb5049a
# Generated: 2026-03-04T05:01:41.517Z
# @generated

@automated @regression
Feature: Curriculum Detail Review page -- Associated Items grid -- Associate an Item dialog window and grid
  As a user
  I want to associate items to the curriculum
  So that I can manage associated items effectively

  Scenario: Open the Associate an Item dialog window
    Given I am on the Curriculum Detail Review page
    When I click the "Associate an Item" button
    Then I should see the Associate an Item dialog window

  Scenario: Search for an item using a valid Item ID
    Given I am on the Curriculum Detail Review page
    When I click the "Associate an Item" button
    And I enter a valid Item ID into the search field
    And I click the Search button
    Then I should see the search results grid populated with matching items

  Scenario: Search for an item using a non-matching Item ID
    Given I am on the Curriculum Detail Review page
    When I click the "Associate an Item" button
    And I enter a non-matching Item ID into the search field
    And I click the Search button
    Then I should see an empty search results grid

  Scenario: Verify grid column headers and controls
    Given I am on the Curriculum Detail Review page
    When I click the "Associate an Item" button
    And I enter a valid Item ID into the search field
    And I click the Search button
    Then I should see the correct column headers and cell controls in the search results grid

  Scenario: Attempt to type invalid data into the date picker
    Given I am on the Curriculum Detail Review page
    When I click the "Associate an Item" button
    And I enter a valid Item ID into the search field
    And I click the Search button
    And I click into the Item Revision Date cell
    And I type invalid data into the date picker
    Then I should see an error or validation preventing invalid input
