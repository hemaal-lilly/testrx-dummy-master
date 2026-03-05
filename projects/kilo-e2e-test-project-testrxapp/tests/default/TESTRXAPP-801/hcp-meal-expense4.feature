# Test: HCP Meal Expense_4
# Project: proj_4f91ce9f
# Generated: 2026-03-05T11:35:44.189Z
# @generated

@automated @regression
Feature: HCP Meal Expense_4
  As a user
  I want to manage the product list and observe the ODM processing behavior
  So that I can verify the expected UI outcomes and warnings

  Scenario: Confirm empty product list and process
    Given I am on the ODM page
    And the product list is empty
    When I initiate processing
    Then I should see the UI updated after processing completes

  Scenario: Confirm non-empty product list and process
    Given I am on the ODM page
    And the product list contains one or more products
    When I initiate processing
    Then I should see the UI updated after processing completes

  Scenario: Add a product to the product list
    Given I am on the ODM page
    And the product list is empty
    When I add a product using the UI
    Then I should see the UI updated immediately after adding the product

  Scenario: Confirm empty product list without processing
    Given I am on the ODM page
    And the product list is empty
    When I do not initiate processing
    Then I should see the UI in the pre-processing state

  Scenario: Add another product to a non-empty product list
    Given I am on the ODM page
    And the product list contains one or more products
    When I add another product using the UI
    Then I should see the UI updated after adding the product

  Scenario: Confirm single product list and process
    Given I am on the ODM page
    And the product list contains exactly one product
    When I initiate processing
    Then I should see the UI updated after processing completes

  Scenario: Verify warning for empty product list processing
    Given I have opened the ODM Business Rules and UI Messages.xlsx
    And I noted the warning text for empty product lists
    And the product list is empty
    When I initiate processing of the empty product list
    Then I should see the warning message displayed in the UI
    And the warning message should match the text from the Excel file
