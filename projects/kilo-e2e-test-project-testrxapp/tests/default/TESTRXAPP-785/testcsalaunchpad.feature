# Test: Test_csa_launchpad
# Project: proj_4f91ce9f
# Generated: 2026-03-05T11:39:23.314Z
# @generated

@automated @regression
Feature: Test_csa_launchpad
  As a user
  I want to visit the Playwright website
  So that I can verify the page loads successfully

  Scenario: Test_csa_launchpad
    Given I navigate to the "https://playwright.dev" page
    When I verify the page title
    Then the page title should be "Fast and reliable end-to-end testing for modern web apps | Playwright"
