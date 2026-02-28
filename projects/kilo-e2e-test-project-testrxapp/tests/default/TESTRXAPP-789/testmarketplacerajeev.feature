/**
 * Auto-generated Playwright test
 * Test: Test_MarketPlace_rajeev
 * Project: proj_e8e80b6c
 * Generated: 2026-02-28T19:09:08.911Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: Test_MarketPlace_rajeev
  As a user
  I want to log in to the marketplace
  So that I can access the application features

  Scenario: Successful login with valid credentials
    Given I navigate to the login page
    When I enter valid credentials
    And I click the login button
    Then I should see the home page header

  Scenario: Login attempt with one missing credential
    Given I navigate to the login page
    When I leave the username field empty
    And I enter a valid password
    And I click the login button
    Then I should see an error message for missing credentials

  Scenario: Login attempt with invalid credentials
    Given I navigate to the login page
    When I enter invalid credentials
    And I click the login button
    Then I should see an error message for invalid credentials

  Scenario: Observing the page header without logging in
    Given I navigate to the login page
    Then I should see the page header
