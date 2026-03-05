# Test: Test_MarketPlace_rajeev
# Project: proj_89e94c34
# Generated: 2026-03-05T08:13:03.491Z
# @generated

@automated @regression
Feature: Test_MarketPlace_rajeev
  As a user
  I want to log in and validate the marketplace functionality
  So that I can ensure proper behavior for valid and invalid credentials

  Scenario: Login with valid credentials
    Given I navigate to the "https://qa.automate.lilly.com" page
    When I enter valid username and password
    And I click the Login button
    Then I should see the top header navigation bar on the home page

  Scenario: Login with one missing credential
    Given I navigate to the "https://qa.automate.lilly.com" page
    When I leave the username field empty
    And I enter a valid password
    And I click the Login button
    Then I should see an error message indicating missing credentials

  Scenario: Login with invalid credentials
    Given I navigate to the "https://qa.automate.lilly.com" page
    When I enter an invalid username or password
    And I click the Login button
    Then I should see an error message indicating invalid credentials

  Scenario: Observe page header without logging in
    Given I navigate to the "https://qa.automate.lilly.com" page
    Then I should see the page header/navigation without logging in
