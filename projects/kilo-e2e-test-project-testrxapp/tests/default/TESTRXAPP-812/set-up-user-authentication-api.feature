/**
 * Auto-generated Playwright test
 * Test: Set Up User Authentication API
 * Project: proj_85874ca7
 * Generated: 2026-03-02T14:14:31.585Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @api @regression
Feature: Set Up User Authentication API
  As a developer
  I want to test the user authentication API endpoints
  So that I can ensure they function correctly under various scenarios

  Scenario: Register a new user successfully
    Given I have a valid registration payload
    When I send a POST request to "/api/auth/register"
    Then I should receive a successful response

  Scenario: Login with valid credentials
    Given I have valid login credentials
    When I send a POST request to "/api/auth/login"
    Then I should receive a valid JWT token in the response

  Scenario: Access a secured endpoint with valid token
    Given I have a valid JWT token
    When I send a GET request to the secured endpoint with the Authorization header
    Then I should receive a successful response

  Scenario: Register with duplicate email
    Given I have a registration payload with an already registered email
    When I send a POST request to "/api/auth/register"
    Then I should receive an error response

  Scenario: Login with incorrect password
    Given I have a valid email and incorrect password
    When I send a POST request to "/api/auth/login"
    Then I should receive an error response

  Scenario: Access secured endpoint without token
    Given I do not provide an Authorization header
    When I send a GET request to the secured endpoint
    Then I should receive an unauthorized response
