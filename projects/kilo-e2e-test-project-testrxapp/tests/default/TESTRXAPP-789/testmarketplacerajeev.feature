# Test: Test_MarketPlace_rajeev
# Project: proj_ad3a22d4
# Generated: 2026-03-05T05:14:06.851Z
# @generated

@automated @regression
Feature: Test_MarketPlace_rajeev
  As a user
  I want to log in and validate the behavior of the application
  So that I can ensure the login functionality works as expected

  Scenario: Successful login with valid credentials
    Given I navigate to the login page at "{string}"
    When I enter valid credentials from environment variables
    And I click the login button
    Then I should see the home page with the top header navigation bar

  Scenario: Login attempt with missing username
    Given I navigate to the login page at "{string}"
    When I leave the username field empty
    And I enter a valid password from environment variables
    And I click the login button
    Then I should see an error message indicating missing credentials

  Scenario: Login attempt with invalid credentials
    Given I navigate to the login page at "{string}"
    When I enter an invalid username or password
    And I click the login button
    Then I should see an error message indicating invalid credentials

  Scenario: Observe page header without logging in
    Given I navigate to the login page at "{string}"
    Then I should see the page header/navigation without logging in
