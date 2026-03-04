# Test: HCP Meal Expense_4
# Project: proj_ad3a22d4
# Generated: 2026-03-04T13:27:41.307Z
# @generated

@automated @regression
Feature: HCP Meal Expense_4
  As a user
  I want to manage the product list and observe the ODM processing behavior
  So that I can ensure the system behaves correctly in different scenarios

  Scenario: Confirm empty product list and process
    Given I am on the ODM page
    And the product list is empty
    When I initiate processing of the product list
    Then I should observe the UI after processing completes

  Scenario: Confirm non-empty product list and process
    Given I am on the ODM page
    And the product list contains one or more products
    When I initiate processing of the product list
    Then I should observe the UI after processing completes

  Scenario: Add a product to the product list
    Given I am on the ODM page
    When I add a product to the product list
    Then I should observe the UI immediately after adding the product

  Scenario: Confirm empty product list without processing
    Given I am on the ODM page
    And the product list is empty
    When I remain on the screen without initiating processing
    Then I should observe the UI in the pre-processing state

  Scenario: Add another product to a non-empty product list
    Given I am on the ODM page
    And the product list contains one or more products
    When I add another product to the product list
    Then I should observe the UI after adding the product

  Scenario: Process a product list with exactly one product
    Given I am on the ODM page
    And the product list contains exactly one product
    When I initiate processing of the product list
    Then I should observe the UI after processing completes

  Scenario: Verify warning message for empty product list
    Given I have opened the ODM Business Rules and UI Messages.xlsx
    And the product list is empty
    When I initiate processing of the empty product list
    Then I should capture the warning message displayed in the UI
    And the warning message should match the text from the Excel file
