# Test: Test_MarketPlace_rajeev
# Project: proj_4f91ce9f
# Generated: 2026-03-05T11:38:40.980Z
# @generated

@automated @regression
Feature: Test_MarketPlace_rajeev
  As a user
  I want to log in to the marketplace
  So that I can access the home page and validate login scenarios

  Scenario: Successful login with valid credentials
    Given I navigate to the page {string}
    When I enter valid credentials
    Then I should see the top header navigation bar

  Scenario: Login with one missing credential field
    Given I navigate to the page {string}
    When I leave the username field empty and enter a valid password
    Then I should see an error message indicating missing credentials

  Scenario: Login with invalid credentials
    Given I navigate to the page {string}
    When I enter invalid username or password
    Then I should see an error message indicating invalid credentials

  Scenario: Observe the page header without logging in
    Given I navigate to the page {string}
    Then I should see the page header and navigation options
