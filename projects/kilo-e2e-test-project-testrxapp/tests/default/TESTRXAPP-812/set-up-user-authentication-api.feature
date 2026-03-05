# Test: Set Up User Authentication API
# Project: proj_ad3a22d4
# Generated: 2026-03-05T05:14:38.582Z
# @generated

@automated @api @regression
Feature: Set Up User Authentication API
  As a developer
  I want to test the user authentication API
  So that I can ensure it behaves as expected

  Scenario: Register a new user
    Given I send a POST request to "/api/auth/register" with JSON body:
      | name  | email                     | password       |
      | Alice Example | alice.unique@example.com | P@ssw0rd123   |
    Then I should receive a 201 status code
    And the response should contain a success message

  Scenario: Login with valid credentials
    Given I send a POST request to "/api/auth/login" with JSON body:
      | email                     | password       |
      | carol.login@example.com   | ValidPass!234  |
    Then I should receive a 200 status code
    And the response should contain a valid JWT token

  Scenario: Login with invalid credentials
    Given I send a POST request to "/api/auth/login" with JSON body:
      | email                     | password       |
      | dave.user@example.com     | WrongPassword  |
    Then I should receive a 401 status code
    And the response should contain an error message

  Scenario: Access secured endpoint without authorization
    Given I send a GET request to the secured endpoint without an Authorization header
    Then I should receive a 403 status code
    And the response should indicate missing authorization
