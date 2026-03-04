/**
 * Auto-generated Playwright test
 * Test: Set Up User Authentication API
 * Project: proj_9ad1ce68
 * Generated: 2026-03-04T04:33:37.329Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @api
Feature: Set Up User Authentication API
  As a developer
  I want to test the user authentication API
  So that I can ensure it works as expected

  Scenario: Register a new user
    When I send a POST request to "/api/auth/register" with body:
      | name          | email                       | password       |
      | Alice Example | alice.unique@example.com   | P@ssw0rd123    |
    Then I should receive a 201 status code

  Scenario: Login with valid credentials
    When I send a POST request to "/api/auth/login" with body:
      | email                     | password       |
      | carol.login@example.com   | ValidPass!234  |
    Then I should receive a 200 status code

  Scenario: Login with invalid credentials
    When I send a POST request to "/api/auth/login" with body:
      | email                     | password       |
      | dave.user@example.com     | WrongPassword  |
    Then I should receive a 401 status code

  Scenario: Access secured endpoint with valid JWT
    Given I have a valid JWT
    When I send a GET request to "/api/secure-endpoint" with Authorization header
    Then I should receive a 200 status code

  Scenario: Access secured endpoint without Authorization header
    When I send a GET request to "/api/secure-endpoint" without Authorization header
    Then I should receive a 401 status code
