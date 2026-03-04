# Test: Test_csa_launchpad
# Project: proj_1eb5049a
# Generated: 2026-03-04T05:02:22.809Z
# @generated

@automated @regression
Feature: Test_csa_launchpad
  As a user
  I want to verify the Playwright launchpad page
  So that I can ensure it loads successfully

  Scenario: Verify Playwright launchpad page loads correctly
    Given I navigate to the Playwright launchpad page at {string}
    When I wait for the page to load
    Then I should see the page title as {string}
