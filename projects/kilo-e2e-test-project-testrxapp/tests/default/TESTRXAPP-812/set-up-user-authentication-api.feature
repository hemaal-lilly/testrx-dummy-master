# Test: Set Up User Authentication API
# Project: proj_4f91ce9f
# Generated: 2026-03-05T11:38:15.837Z
# @generated

@automated @api @authentication
Feature: Set Up User Authentication API
  As a developer
  I want to test the user authentication API endpoints
  So that I can verify their functionality and security

  Scenario: Register a new user successfully
    Given I send a POST request to "/api/auth/register" with JSON body:
      | name  | email                     | password       |
      | Alice | alice.unique@example.com  | P@ssw0rd123   |
    Then I should see a successful response with status code 201

  Scenario: Attempt to register with an existing email
    Given I send a POST request to "/api/auth/register" with JSON body:
      | name  | email                     | password       |
      | Ellen | ellen.dup@example.com     | P@ssw0rd123   |
    Then I should see an error response with status code 409

  Scenario: Login with valid credentials
    Given I send a POST request to "/api/auth/login" with JSON body:
      | email                  | password       |
      | carol.login@example.com | ValidPass!234 |
    Then I should see a successful response with status code 200

  Scenario: Access secured endpoint with valid JWT
    Given I send a GET request to "/api/secured-endpoint" with Authorization header containing a valid JWT
    Then I should see a successful response with status code 200

  Scenario: Access secured endpoint without Authorization header
    Given I send a GET request to "/api/secured-endpoint" without Authorization header
    Then I should see an error response with status code 401

  Scenario: Access secured endpoint with invalid JWT
    Given I send a GET request to "/api/secured-endpoint" with Authorization header containing an invalid JWT
    Then I should see an error response with status code 403
