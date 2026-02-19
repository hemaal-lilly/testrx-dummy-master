/**
 * Auto-generated Playwright test
 * Test: Checkout process - Complete order
 * Project: proj_96009214
 * Generated: 2026-02-19T04:33:53.134Z
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
