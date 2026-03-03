/**
 * Auto-generated Playwright test
 * Test: HCP Meal Expense_4
 * Project: proj_c65ae569
 * Generated: 2026-03-03T17:23:54.699Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: HCP Meal Expense_4
  As a user
  I want to manage the product list and observe the UI behavior
  So that I can ensure proper functionality of the ODM system

  Scenario: Confirm empty product list and process it
    Given the product list received by the ODM is empty
    When I initiate processing of the current product list
    Then I should observe the UI after processing completes

  Scenario: Confirm non-empty product list and process it
    Given the product list received by the ODM contains one or more products
    When I initiate processing of the current product list
    Then I should observe the UI after processing completes

  Scenario: Add a product to the product list
    Given I am on the product list page
    When I add a product to the product list
    Then I should observe the UI immediately after adding the product

  Scenario: Confirm empty product list and remain on the screen
    Given the product list is empty
    When I do not initiate processing
    Then I should observe the UI in the pre-processing state

  Scenario: Add another product to a non-empty product list
    Given the product list contains products
    When I add another product to the product list
    Then I should observe the UI after adding the product

  Scenario: Process a single-product list
    Given the product list contains exactly one product
    When I initiate processing of the current product list
    Then I should observe the UI after processing completes

  Scenario: Validate warning message for empty product list
    Given I open ODM Business Rules and UI Messages.xlsx
    And the product list received by the ODM is empty
    When I initiate processing of the empty product list
    Then I should capture and compare the warning message text
