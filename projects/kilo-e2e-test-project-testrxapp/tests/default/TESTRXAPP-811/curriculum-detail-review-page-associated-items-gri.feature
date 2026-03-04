# Test: Curriculum Detail Review page -- Associated Items grid -- Associate an Item dialog window and grid
# Project: proj_ad3a22d4
# Generated: 2026-03-04T13:26:50.115Z
# @generated

@automated @regression
Feature: Curriculum Detail Review page -- Associated Items grid -- Associate an Item dialog window and grid
  As a user
  I want to associate items to the curriculum
  So that I can manage curriculum details effectively

  Scenario: Open the Associate an Item dialog window
    Given I am on the Curriculum Detail Review page
    When I click the "Associate an Item" button
    Then I should see the Associate an Item dialog window

  Scenario: Search for a valid Item ID
    Given I am on the Curriculum Detail Review page
    When I click the "Associate an Item" button
    And I enter a valid Item ID into the search field
    And I click the Search button
    Then I should see the search results grid populated with matching items

  Scenario: Search for a non-matching Item ID
    Given I am on the Curriculum Detail Review page
    When I click the "Associate an Item" button
    And I enter a non-matching Item ID into the search field
    And I click the Search button
    Then I should see no results in the search grid

  Scenario: Validate grid column headers and cell controls
    Given I am on the Curriculum Detail Review page
    When I click the "Associate an Item" button
    And I enter a valid Item ID into the search field
    And I click the Search button
    Then I should see the grid column headers and cell controls displayed correctly

  Scenario: Attempt invalid input in the date picker
    Given I am on the Curriculum Detail Review page
    When I click the "Associate an Item" button
    And I enter a valid Item ID into the search field
    And I click the Search button
    And I attempt to enter invalid text into the date picker cell
    Then I should see an error or validation preventing invalid input
