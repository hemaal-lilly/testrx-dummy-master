/**
 * Auto-generated Playwright test
 * Test: Set Up User Authentication API
 * Project: proj_c65ae569
 * Generated: 2026-03-03T17:22:56.758Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@api @authentication
Feature: Set Up User Authentication API
  As a developer
  I want to test the user authentication API
  So that I can ensure it works as expected

  Scenario: Register a new user
    When I send a POST request to "/api/auth/register" with body:
      | name          | email                      | password       |
      | Alice Example | alice.unique@example.com  | P@ssw0rd123    |
    Then I should receive a 201 status code with a success message

  Scenario: Login with valid credentials
    When I send a POST request to "/api/auth/login" with body:
      | email                  | password       |
      | carol.login@example.com | ValidPass!234 |
    Then I should receive a 200 status code with a valid JWT token

  Scenario: Access secured endpoint with valid token
    Given I have a valid JWT token
    When I send a GET request to "/api/secured-endpoint" with the Authorization header
    Then I should receive a 200 status code with the expected response

  Scenario: Login with incorrect password
    When I send a POST request to "/api/auth/login" with body:
      | email               | password       |
      | dave.user@example.com | WrongPass123  |
    Then I should receive a 401 status code with an error message

  Scenario: Register with duplicate email
    When I send a POST request to "/api/auth/register" with body:
      | name          | email               | password       |
      | Ellen Dup     | ellen.dup@example.com | AnotherPass123 |
    Then I should receive a 409 status code with an error message

  Scenario: Register without email
    When I send a POST request to "/api/auth/register" with body:
      | name          | password       |
      | Missing Email | NoEmailPass123 |
    Then I should receive a 400 status code with an error message

  Scenario: Register with invalid email format
    When I send a POST request to "/api/auth/register" with body:
      | name          | email         | password       |
      | Invalid Email | not-an-email  | InvalidPass123 |
    Then I should receive a 400 status code with an error message

  Scenario: Login without password
    When I send a POST request to "/api/auth/login" with body:
      | email                  |
      | frank.login@example.com |
    Then I should receive a 400 status code with an error message

  Scenario: Access secured endpoint without token
    When I send a GET request to "/api/secured-endpoint" without the Authorization header
    Then I should receive a 401 status code with an error message

  Scenario: Access secured endpoint with invalid token
    When I send a GET request to "/api/secured-endpoint" with an invalid Authorization token
    Then I should receive a 401 status code with an error message
