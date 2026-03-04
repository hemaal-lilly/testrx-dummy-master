# Test: Set Up User Authentication API
# Project: proj_1eb5049a
# Generated: 2026-03-04T05:01:26.298Z
# @generated

@api @authentication
Feature: Set Up User Authentication API
  As a developer
  I want to test the authentication API
  So that I can ensure it functions as expected

  Scenario: Register a new user
    Given I send a POST request to "/api/auth/register" with JSON body:
      | name           | email                        | password       |
      | Alice Example  | alice.unique@example.com    | P@ssw0rd123    |
    Then I should receive a 201 status code and a success response

  Scenario: Login with valid credentials
    Given I send a POST request to "/api/auth/login" with JSON body:
      | email                    | password        |
      | carol.login@example.com  | ValidPass!234   |
    Then I should receive a 200 status code and a valid JWT token

  Scenario: Access secured endpoint with valid token
    Given I send a GET request to "/api/secured-endpoint" with Authorization header:
      | Bearer {validToken} |
    Then I should receive a 200 status code and the expected response

  Scenario: Login with incorrect password
    Given I send a POST request to "/api/auth/login" with JSON body:
      | email                 | password       |
      | dave.user@example.com | WrongPass123   |
    Then I should receive a 401 status code and an error message

  Scenario: Register with duplicate email
    Given I send a POST request to "/api/auth/register" with JSON body:
      | name          | email                 | password       |
      | Ellen Dup     | ellen.dup@example.com | AnyPass123     |
    Then I should receive a 409 status code and an error message

  Scenario: Register without email
    Given I send a POST request to "/api/auth/register" with JSON body:
      | name          | password       |
      | Missing Email | AnyPass123     |
    Then I should receive a 400 status code and an error message

  Scenario: Register with invalid email
    Given I send a POST request to "/api/auth/register" with JSON body:
      | name          | email        | password       |
      | Invalid Email | not-an-email | AnyPass123     |
    Then I should receive a 400 status code and an error message

  Scenario: Login without password
    Given I send a POST request to "/api/auth/login" with JSON body:
      | email                   |
      | frank.login@example.com |
    Then I should receive a 400 status code and an error message

  Scenario: Access secured endpoint without token
    Given I send a GET request to "/api/secured-endpoint" without Authorization header
    Then I should receive a 401 status code and an error message

  Scenario: Access secured endpoint with invalid token
    Given I send a GET request to "/api/secured-endpoint" with Authorization header:
      | Bearer {invalidToken} |
    Then I should receive a 401 status code and an error message
