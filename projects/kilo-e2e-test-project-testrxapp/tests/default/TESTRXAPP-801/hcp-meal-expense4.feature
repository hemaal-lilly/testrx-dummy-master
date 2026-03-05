# Test: HCP Meal Expense_4
# Project: proj_4f91ce9f
# Generated: 2026-03-05T11:39:19.204Z
# @generated

@automated @regression
Feature: HCP Meal Expense_4
  As a user
  I want to manage product lists in the ODM
  So that I can validate UI behavior and warnings during processing

  Scenario: Confirm empty product list and process
    Given I am on the ODM page
    And the product list contains zero products
    When I initiate processing of the current product list
    Then I should see the UI updated after processing completes

  Scenario: Confirm non-empty product list and process
    Given I am on the ODM page
    And the product list contains one or more products
    When I initiate processing of the current product list
    Then I should see the UI updated after processing completes

  Scenario: Add a product to the product list
    Given I am on the ODM page
    When I add a product to the product list
    Then I should see the UI updated immediately after adding the product

  Scenario: Confirm empty product list without processing
    Given I am on the ODM page
    And the product list contains zero products
    When I remain on the screen without initiating processing
    Then I should see the UI in the pre-processing state

  Scenario: Add another product to the non-empty product list
    Given I am on the ODM page
    And the product list contains one or more products
    When I add another product to the product list
    Then I should see the UI updated after adding the product

  Scenario: Process product list with exactly one product
    Given I am on the ODM page
    And the product list contains exactly one product
    When I initiate processing of the current product list
    Then I should see the UI updated after processing completes

  Scenario: Validate warning message for empty product list
    Given I have opened the ODM Business Rules and UI Messages.xlsx
    And I have noted the warning text for empty product lists
    And the product list contains zero products
    When I initiate processing of the empty product list
    Then I should see the warning message displayed in the UI
    And the warning message should match the text from the Excel file
