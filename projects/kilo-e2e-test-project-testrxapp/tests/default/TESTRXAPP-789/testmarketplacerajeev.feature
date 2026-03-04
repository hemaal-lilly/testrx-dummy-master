# Test: Test_MarketPlace_rajeev
# Project: proj_ad3a22d4
# Generated: 2026-03-04T05:22:44.894Z
# @generated

@automated @regression
Feature: Test_MarketPlace_rajeev
  As a user
  I want to log in and verify the navigation bar
  So that I can confirm the functionality of the login and homepage

  Scenario: Successful login with valid credentials
    Given I navigate to the URL "https://qa.automate.lilly.com"
    When I enter valid username and password from the attached Excel sheet
    And I click the Login button
    Then I should see the top header navigation bar

  Scenario: Login with missing credentials
    Given I navigate to the URL "https://qa.automate.lilly.com"
    When I leave the username field empty
    And I enter a valid password from the attached Excel sheet
    And I click the Login button
    Then I should see an error message indicating missing credentials

  Scenario: Login with invalid credentials
    Given I navigate to the URL "https://qa.automate.lilly.com"
    When I enter an invalid username or password
    And I click the Login button
    Then I should see an error message indicating invalid credentials

  Scenario: Observe page header without logging in
    Given I navigate to the URL "https://qa.automate.lilly.com"
    Then I should see the page header/navigation
