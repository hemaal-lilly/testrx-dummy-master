/**
 * Auto-generated Playwright test
 * Test: Checkout process - Complete order
 * Project: proj_6ea48087
 * Generated: 2026-02-19T07:47:35.388Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @high
Feature: Checkout process - Complete order
  As a user
  I want to complete the checkout process
  So that I can place an order successfully

  Scenario: Checkout process - Complete order
    Given I am on the Playwright homepage
    When I navigate to the checkout page and complete the order
    Then I should see the order confirmation page
