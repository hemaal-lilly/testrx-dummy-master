# Test: HCP Meal Expense_4
# Project: proj_1eb5049a
# Generated: 2026-03-04T05:02:27.832Z
# @generated

@automated @regression
Feature: HCP Meal Expense_4
  As a user
  I want to manage the product list and observe the ODM processing behavior
  So that I can ensure the UI reflects the correct state after each action

  Scenario: Confirm empty product list and initiate processing
    Given I am on the ODM page
    And the product list is empty
    When I initiate processing of the current product list
    Then I should observe the UI after processing completes

  Scenario: Confirm non-empty product list and initiate processing
    Given I am on the ODM page
    And the product list contains one or more products
    When I initiate processing of the current product list
    Then I should observe the UI after processing completes

  Scenario: Add a product to the list
    Given I am on the ODM page
    When I add a product to the product list
    Then I should observe the UI immediately after adding the product

  Scenario: Confirm empty product list without processing
    Given I am on the ODM page
    And the product list is empty
    When I remain on the screen without initiating processing
    Then I should observe the UI in the pre-processing state

  Scenario: Add another product to the non-empty list
    Given I am on the ODM page
    And the product list contains one or more products
    When I add another product to the product list
    Then I should observe the UI after adding the product

  Scenario: Confirm single product and initiate processing
    Given I am on the ODM page
    And the product list contains exactly one product
    When I initiate processing of the current product list
    Then I should observe the UI after processing completes

  Scenario: Validate warning message for empty product list
    Given I have opened the ODM Business Rules and UI Messages file
    And the product list is empty
    When I initiate processing of the empty product list
    Then I should capture the warning message displayed in the UI
    And the warning message should match the text from the file
