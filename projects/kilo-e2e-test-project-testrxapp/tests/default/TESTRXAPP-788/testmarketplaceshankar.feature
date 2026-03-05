/**
 * Auto-generated Playwright test
 * Test: Test_MarketPlace_Shankar
 * Project: proj_e8e80b6c
 * Generated: 2026-02-26T07:39:37.689Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

Feature: Enterprise Automation homepage UI visibility and state
  In order to verify the homepage renders key user-visible elements
  As a site visitor
  I want to see branding, navigation, and CTA elements as described

Background:
  Given I open https://qa.automate.lilly.com

Scenario: [Positive] Homepage branding displays Lilly logo and "Enterprise Automation" title
  Given I am on the page
  When the page loads
  Then the Lilly logo is visible
  And the header title "Enterprise Automation" is visible

Scenario: [Positive] Homepage layout sections are visible
  Given I am on the page
  When the page loads
  Then the header section is visible
  And the hero banner is visible
  And the cards section is visible

Scenario: [Positive] Top header shows required navigation items
  Given I am on the page
  When the page loads
  Then the top header shows "Home"
  And the top header shows "Automation Platform"
  And the top header shows "Marketplace"
  And the top header shows "TechZone"
  And the top header shows "Admin Console"

Scenario: [Positive] CTA button "Submit an Idea" is visible
  Given I am on the page
  When the page loads
  Then the CTA button "Submit an Idea" is visible

Scenario: [Positive] "Home" tab is active on the home page
  Given I am on the home page
  When the page loads
  Then "Home" tab is active/selected

Scenario: [Negative] Lilly logo is not visible on page load
  Given I am on the page
  When the page loads
  Then the Lilly logo is not visible

Scenario: [Negative] "Automation Platform" navigation item is not visible in the top header
  Given I am on the page
  When the page loads
  Then the top header does not show "Automation Platform"

Scenario: [Negative] "Home" tab is not active on the home page
  Given I am on the home page
  When the page loads
  Then "Home" tab is not active/selected
