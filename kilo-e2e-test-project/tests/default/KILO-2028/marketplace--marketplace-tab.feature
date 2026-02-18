/**
 * Auto-generated Playwright test
 * Test: Marketplace- Marketplace Tab
 * Project: proj_471641bd
 * Generated: 2026-02-18T12:19:39.771Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: Marketplace- Marketplace Tab
  As a user
  I want to access the Marketplace tab
  So that I can view its content and validate its functionality

  Scenario: Marketplace- Marketplace Tab
    Given I set the viewport size to 1000x800
    And I navigate to the application URL
    When I enter the username into the email input field
    And I click the "Next" button
    And I enter the password into the password input field
    And I click the "Sign in" button
    And I click the "Marketplace" tab
    Then I should see the URL pathname as "/marketPlace"
    And I should see the message "This page is currently under construction..."
    And the "Contact Us" link should have href "mailto:aso_brm@lists.lilly.com"
    And the "here" link should have href "https://collab.lilly.com/sites/Automa..."
    And I should see the heading "Success Stories"
    And I should see the "Success Stories" section content
