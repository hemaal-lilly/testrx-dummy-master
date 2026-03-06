/**
 * Auto-generated Playwright test
 * Test: Set Up User Authentication API
 * Project: proj_e8e80b6c
 * Generated: 2026-03-06T11:32:19.626Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@api @authentication
Feature: Set Up User Authentication API
  As a developer
  I want to test the user authentication API
  So that I can ensure it behaves as expected

  Scenario: Register a new user successfully
    Given I send a POST request to "/api/auth/register" with JSON body:
      | name           | email                       | password       |
      | Alice Example  | alice.unique@example.com   | P@ssw0rd123    |
    Then I should receive a 201 status code
    And the response should contain the user ID and email

  Scenario: Login with valid credentials
    Given I send a POST request to "/api/auth/login" with JSON body:
      | email                  | password       |
      | carol.login@example.com | ValidPass!234 |
    Then I should receive a 200 status code
    And the response should contain a valid JWT token

  Scenario: Access secured endpoint with valid token
    Given I send a GET request to "/api/secure-endpoint" with Authorization header set to a valid JWT
    Then I should receive a 200 status code
    And the response should contain the secured data

  Scenario: Login with incorrect password
    Given I send a POST request to "/api/auth/login" with JSON body:
      | email               | password       |
      | dave.user@example.com | WrongPassword |
    Then I should receive a 401 status code
    And the response should contain an error message

  Scenario: Register with duplicate email
    Given I send a POST request to "/api/auth/register" with JSON body:
      | name          | email                  | password       |
      | Ellen Dup     | ellen.dup@example.com | AnyPassword123 |
    Then I should receive a 409 status code
    And the response should contain an error message
