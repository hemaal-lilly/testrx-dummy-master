# Test: Set Up User Authentication API
# Project: proj_4f91ce9f
# Generated: 2026-03-05T11:35:34.577Z
# @generated

@api @authentication
Feature: Set Up User Authentication API
  As a user
  I want to register, log in, and access secured endpoints
  So that I can authenticate and use the application securely

  Scenario: Register a new user
    Given I send a POST request to "/api/auth/register" with JSON body containing {string}, {string}, and {string}
    Then I should receive a successful response

  Scenario: Log in with valid credentials
    Given I send a POST request to "/api/auth/login" with JSON body containing {string} and {string}
    Then I should receive a valid JWT in the response

  Scenario: Access secured endpoint with valid JWT
    Given I send a request to the secured endpoint with Authorization header containing {string}
    Then I should receive a successful response

  Scenario: Log in with incorrect credentials
    Given I send a POST request to "/api/auth/login" with JSON body containing {string} and {string}
    Then I should receive an error response

  Scenario: Register with duplicate email
    Given I send a POST request to "/api/auth/register" with JSON body containing {string}, {string}, and {string}
    Then I should receive an error response

  Scenario: Register without email
    Given I send a POST request to "/api/auth/register" with JSON body containing {string} and {string}, omitting the email field
    Then I should receive an error response

  Scenario: Register with invalid email format
    Given I send a POST request to "/api/auth/register" with JSON body containing {string}, {string}, and {string}
    Then I should receive an error response

  Scenario: Log in without password
    Given I send a POST request to "/api/auth/login" with JSON body containing {string}, omitting the password field
    Then I should receive an error response

  Scenario: Access secured endpoint without Authorization header
    Given I send a request to the secured endpoint without Authorization header
    Then I should receive an error response

  Scenario: Access secured endpoint with invalid Authorization token
    Given I send a request to the secured endpoint with Authorization header containing {string}
    Then I should receive an error response
