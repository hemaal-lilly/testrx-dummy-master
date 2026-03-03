/**
 * Auto-generated Playwright test
 * Test: HCP Meal Expense_4
 * Project: proj_53d6aeb3
 * Generated: 2026-03-03T11:09:31.302Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: HCP Meal Expense_4
  As a user
  I want to manage product lists and observe UI changes
  So that I can ensure proper behavior of the ODM system

  Scenario: Confirm empty product list and process
    Given the product list received by the ODM is empty
    When I initiate processing of the current product list
    Then I should observe the UI after processing completes

  Scenario: Confirm non-empty product list and process
    Given the product list received by the ODM contains one or more products
    When I initiate processing of the current product list
    Then I should observe the UI after processing completes

  Scenario: Add a product to the product list
    Given I am on the product list screen
    When I add at least one product to the product list
    Then I should observe the UI immediately after adding the product

  Scenario: Confirm empty product list without processing
    Given the product list is empty
    When I remain on the screen without triggering processing
    Then I should observe the UI in the pre-processing state

  Scenario: Add another product to a non-empty product list
    Given the product list contains one or more products
    When I add another product to the product list
    Then I should observe the UI after adding the product

  Scenario: Confirm single product list and process
    Given the product list contains exactly one product
    When I initiate processing of the current product list
    Then I should observe the UI after processing completes

  Scenario: Validate warning message for empty product list
    Given I open ODM Business Rules and UI Messages.xlsx
    And the product list received by the ODM is empty
    When I initiate processing of the empty product list
    Then I should capture and compare the warning message text displayed in the UI
