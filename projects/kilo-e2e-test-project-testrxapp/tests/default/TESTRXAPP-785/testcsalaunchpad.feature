# Test: Test_csa_launchpad
# Project: proj_ad3a22d4
# Generated: 2026-03-05T05:14:45.368Z
# @generated

@automated @regression
Feature: Test_csa_launchpad
  As a user
  I want to verify the Playwright homepage
  So that I can ensure the page loads correctly

  Scenario: Verify Playwright homepage
    Given I navigate to the Playwright homepage at {string}
    When I wait for the page to load
    Then I should see the page title as {string}
