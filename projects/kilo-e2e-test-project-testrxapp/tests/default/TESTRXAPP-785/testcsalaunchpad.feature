# Test: Test_csa_launchpad
# Project: proj_4f91ce9f
# Generated: 2026-03-05T11:35:44.601Z
# @generated

@automated @regression
Feature: Test_csa_launchpad
  As a user
  I want to visit the Playwright homepage
  So that I can verify the page loads correctly

  Scenario: Verify Playwright homepage loads successfully
    Given I navigate to the "Playwright" homepage
    When the page is fully loaded
    Then I should see the title "Fast and reliable end-to-end testing for modern web apps | Playwright"
