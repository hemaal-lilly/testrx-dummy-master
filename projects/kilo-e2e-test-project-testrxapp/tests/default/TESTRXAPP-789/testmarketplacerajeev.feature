# Test: Test_MarketPlace_rajeev
# Project: proj_ad3a22d4
# Generated: 2026-03-04T13:26:47.324Z
# @generated

@automated @regression
Feature: Test_MarketPlace_rajeev
  As a user
  I want to log in to the marketplace
  So that I can access the application features

  Scenario: Successful login with valid credentials
    Given I navigate to the marketplace at "{string}"
    When I enter valid username from the Excel sheet
    And I enter valid password from the Excel sheet
    And I click the Login button
    Then I should see the top header navigation bar

  Scenario: Login with one empty credential field
    Given I navigate to the marketplace at "{string}"
    When I leave the username field empty
    And I enter valid password from the Excel sheet
    And I click the Login button
    Then I should see an error message for missing credentials

  Scenario: Login with invalid credentials
    Given I navigate to the marketplace at "{string}"
    When I enter an invalid username or password
    And I click the Login button
    Then I should see an error message for invalid credentials

  Scenario: Observe navigation without login
    Given I navigate to the marketplace at "{string}"
    Then I should see the page header/navigation
