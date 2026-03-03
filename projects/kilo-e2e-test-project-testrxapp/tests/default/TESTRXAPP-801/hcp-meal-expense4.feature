/**
 * Auto-generated Playwright test
 * Test: HCP Meal Expense_4
 * Project: proj_3b0856d5
 * Generated: 2026-03-03T23:25:30.586Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: HCP Meal Expense_4
  As a user
  I want to manage the product list and observe the ODM processing
  So that I can verify the UI behavior and warning messages

  Scenario: Empty product list received by ODM
    Given the product list received by the ODM is empty
    When I initiate processing of the current product list
    Then I should observe the UI after processing completes

  Scenario: Non-empty product list received by ODM
    Given the product list received by the ODM contains one or more products
    When I initiate processing of the current product list
    Then I should observe the UI after processing completes

  Scenario: Add a product to the product list
    Given I am on the product list screen
    When I add at least one product to the product list
    Then I should observe the UI immediately after adding the product

  Scenario: Empty product list without processing
    Given the product list is empty
    When I remain on the screen without triggering processing
    Then I should observe the UI in the pre-processing state

  Scenario: Add another product to the non-empty product list
    Given the product list contains one or more products
    When I add another product to the product list
    Then I should observe the UI after adding the product

  Scenario: Process a single-product list
    Given the product list contains exactly one product
    When I initiate processing of the current product list
    Then I should observe the UI after processing completes

  Scenario: Verify warning message for empty product list
    Given the product list received by the ODM is empty
    And I open ODM Business Rules and UI Messages.xlsx
    When I initiate processing of the empty product list
    Then I should capture the warning message text displayed in the UI
    And compare it to the text from the Excel file
