/**
 * Auto-generated Playwright test
 * Test: Test Automation Tech for Tech on MarketPlace page
 * Project: proj_471641bd
 * Generated: 2026-02-18T12:13:35.101Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @marketplace
Feature: Test Automation Tech for Tech on MarketPlace page
  As a user
  I want to interact with the MarketPlace page
  So that I can verify its functionality and content

  Scenario: Test Automation Tech for Tech on MarketPlace page
    Given I set the viewport size to 980x750
    And I navigate to the application URL
    When I enter the username in the email field
    And I click the login button
    And I enter the password in the password field
    And I click the login button again
    Then I should see the Brand Logo with alt text "Brand Logo"
    And I should see the heading "Automation Tech for Tech"
    And I should see the description "Test Automation All Tech@Lilly teams ..."
    And I should see the platform images with alt text "platform"
    When I click the "Get Started" button
    And I switch to the Microsoft Forms tab
    And I switch back to the initial tab
    Then I should see the heading "Automation Tech for Tech" again
