/**
 * Auto-generated Playwright test
 * Test: Marketplace-Test Automation
 * Project: proj_471641bd
 * Generated: 2026-02-18T11:57:32.224Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @medium
Feature: Marketplace-Test Automation
  As a user
  I want to test the Marketplace application
  So that I can validate its functionality and ensure software quality

  Scenario: Marketplace-Test Automation
    Given I set the viewport size to 1000x800
    And I navigate to the application URL
    When I enter the username into the email field
    And I click the Next button
    And I enter the password into the password field
    And I click the Sign in button
    And I select the "Test Automation" option from the dropdown
    Then I should see the correct "Test Automation" description
    And I should see the correct links and their href values
    And I should see the correct blockquote text
    And I should see the "Contact Us" link with the correct mailto href
    And I should see the image with the class "lds-image"
