/**
 * Auto-generated Playwright test
 * Test: Set Up User Authentication API
 * Project: proj_e8e80b6c
 * Generated: 2026-03-02T10:21:15.464Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @api @authentication
Feature: Set Up User Authentication API
  As a developer
  I want to test the user authentication API endpoints
  So that I can ensure the API behaves as expected

  Scenario: Register a new user successfully
    Given I send a POST request to "/api/auth/register" with JSON body containing name, email, and password
    Then I should see a successful response with status code 201

  Scenario: Login with valid credentials
    Given I send a POST request to "/api/auth/login" with JSON body containing email and password
    Then I should see a successful response with a valid JWT token

  Scenario: Access secured endpoint with valid token
    Given I send a GET request to a secured endpoint with a valid Authorization header
    Then I should see a successful response

  Scenario: Register a user with duplicate email
    Given I send a POST request to "/api/auth/register" with JSON body containing name, duplicate email, and password
    Then I should see an error response with status code 409

  Scenario: Login with incorrect password
    Given I send a POST request to "/api/auth/login" with JSON body containing correct email and incorrect password
    Then I should see an error response with status code 401
