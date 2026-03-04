# Test: Set Up User Authentication API
# Project: proj_ad3a22d4
# Generated: 2026-03-04T13:27:22.349Z
# @generated

@automated @regression
Feature: Set Up User Authentication API
  As a developer
  I want to test the user authentication API
  So that I can verify its functionality and security

  Scenario: Register a new user with valid details
    Given I send a POST request to "/api/auth/register" with JSON body:
      | name           | email                     | password      |
      | Alice Example  | alice.unique@example.com | P@ssw0rd123   |
    Then the API response should have a status code of 201

  Scenario: Register a user and verify password storage
    Given I send a POST request to "/api/auth/register" with JSON body:
      | name         | email                  | password        |
      | Bob Example  | bob.hashcheck@example.com | PlainPass123! |
    Then the user record for "bob.hashcheck@example.com" should exist in the database
    And the stored password should be hashed

  Scenario: Login with valid credentials
    Given I send a POST request to "/api/auth/login" with JSON body:
      | email                  | password       |
      | carol.login@example.com | ValidPass!234 |
    Then the API response should have a status code of 200
    And the response should include a valid JWT token

  Scenario: Access secured endpoint with valid token
    Given I send a request to the secured endpoint with a valid Authorization header
    Then the API response should have a status code of 200

  Scenario: Login with incorrect password
    Given I send a POST request to "/api/auth/login" with JSON body:
      | email                  | password       |
      | dave.user@example.com  | WrongPassword  |
    Then the API response should have a status code of 401

  Scenario: Register a user with duplicate email
    Given I send a POST request to "/api/auth/register" with JSON body:
      | name           | email                  | password      |
      | Ellen Dup      | ellen.dup@example.com  | SomePassword  |
    Then the API response should have a status code of 409

  Scenario: Register a user without an email field
    Given I send a POST request to "/api/auth/register" with JSON body:
      | name           | password      |
      | Missing Email  | SomePassword  |
    Then the API response should have a status code of 400

  Scenario: Register a user with an invalid email format
    Given I send a POST request to "/api/auth/register" with JSON body:
      | name           | email         | password      |
      | Invalid Email  | not-an-email  | SomePassword  |
    Then the API response should have a status code of 400

  Scenario: Login with missing password field
    Given I send a POST request to "/api/auth/login" with JSON body:
      | email                  |
      | frank.login@example.com |
    Then the API response should have a status code of 400

  Scenario: Access secured endpoint without Authorization header
    Given I send a request to the secured endpoint without an Authorization header
    Then the API response should have a status code of 401

  Scenario: Access secured endpoint with invalid token
    Given I send a request to the secured endpoint with an invalid Authorization header
    Then the API response should have a status code of 401
