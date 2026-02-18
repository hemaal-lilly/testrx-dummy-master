/**
 * Auto-generated Playwright test
 * Test: Checkout process - Complete order
 * Project: proj_aa18f7ea
 * Generated: 2026-02-18T12:40:44.688Z
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
    Given I am on the checkout page
    When I fill in the required details and submit the order
    Then I should see the order confirmation page
