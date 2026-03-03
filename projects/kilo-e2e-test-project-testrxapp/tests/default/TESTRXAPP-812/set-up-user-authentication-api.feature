/**
 * Auto-generated Playwright test
 * Test: Set Up User Authentication API
 * Project: proj_53d6aeb3
 * Generated: 2026-03-03T11:09:32.025Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @api
Feature: Set Up User Authentication API
  As a user
  I want to interact with the authentication API
  So that I can register, log in, and access secured endpoints

  Scenario: Register a new user successfully
    Given I send a POST request to "/api/auth/register" with valid JSON body
    Then I should receive a successful response with user details

  Scenario: Log in with valid credentials
    Given I send a POST request to "/api/auth/login" with valid JSON body
    Then I should receive a successful response with a JWT token

  Scenario: Access a secured endpoint with valid token
    Given I send a request to a secured endpoint with a valid Authorization header
    Then I should receive a successful response

  Scenario: Attempt to log in with incorrect password
    Given I send a POST request to "/api/auth/login" with valid email and incorrect password
    Then I should receive an error response

  Scenario: Attempt to register with duplicate email
    Given I send a POST request to "/api/auth/register" with an already registered email
    Then I should receive an error response

  Scenario: Attempt to register without email field
    Given I send a POST request to "/api/auth/register" with missing email field
    Then I should receive an error response

  Scenario: Attempt to register with invalid email format
    Given I send a POST request to "/api/auth/register" with invalid email format
    Then I should receive an error response

  Scenario: Attempt to log in without password field
    Given I send a POST request to "/api/auth/login" with missing password field
    Then I should receive an error response

  Scenario: Access a secured endpoint without Authorization header
    Given I send a request to a secured endpoint without Authorization header
    Then I should receive an error response

  Scenario: Access a secured endpoint with invalid token
    Given I send a request to a secured endpoint with an invalid Authorization header
    Then I should receive an error response
