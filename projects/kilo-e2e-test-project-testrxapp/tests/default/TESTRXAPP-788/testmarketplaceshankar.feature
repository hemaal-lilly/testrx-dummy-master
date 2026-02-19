/**
 * Auto-generated Playwright test
 * Test: Test_MarketPlace_Shankar
 * Project: proj_2e810803
 * Generated: 2026-02-19T09:58:23.565Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

Feature: Enterprise Automation homepage UI baseline
  In order to verify the portal is usable and correctly rendered
  As a site visitor
  I want to see the required homepage elements and stable interactions

Background:
  Given I navigate to "https://qa.automate.lilly.com"

Scenario: [Positive] Homepage shows Lilly logo and header title on initial load
  Given the homepage is open
  When the page finishes loading
  Then the Lilly logo is visible
  And the header title displays "Enterprise Automation"

Scenario: [Positive] Homepage core layout sections render without broken layout
  Given the homepage is open
  When the page finishes loading
  Then the header section is visible
  And the hero banner is visible
  And the cards section is visible

Scenario: [Positive] Top navigation items are visible in the header
  Given the homepage is open
  When I inspect the top navigation bar
  Then the "Home" nav item is visible
  And the "Automation Platform" dropdown toggle is visible
  And the "Marketplace" nav item is visible
  And the "TechZone" nav item is visible
  And the "Admin Console" nav item is visible

Scenario: [Positive] CTA button "Submit an Idea" is visible
  Given the homepage is open
  When the page finishes loading
  Then the "Submit an Idea" button is visible

Scenario: [Positive] Home tab is active when on the home page
  Given the homepage is open
  When the navigation is displayed
  Then the "Home" tab appears active or selected (highlighted)

Scenario: [Robustness] Layout remains visible after browser refresh
  Given the homepage is open
  When I refresh the browser
  Then the header section is visible
  And the hero banner is visible
  And the cards section is visible

Scenario: [Robustness] Page renders correctly under responsive resize
  Given the homepage is open
  When I resize the browser window to a mobile width
  Then the header section is visible
  And the hero banner is visible
  And the cards section is visible

Scenario: [Robustness] Identity elements remain visible at 200% zoom
  Given the homepage is open
  When I set the browser zoom to 200%
  Then the Lilly logo is visible
  And the header title displays "Enterprise Automation"

Scenario: [Robustness] Automation Platform dropdown opens on toggle
  Given the homepage is open
  When I click the "Automation Platform" dropdown toggle
  Then the dropdown menu is visible

Scenario: [Robustness] Automation Platform dropdown closes on toggle
  Given the "Automation Platform" dropdown is open
  When I click the "Automation Platform" dropdown toggle
  Then the dropdown menu is not visible

Scenario: [Robustness] Hard reload does not break layout
  Given the homepage is open
  When I perform a hard reload
  Then the header section is visible
  And the hero banner is visible
  And the cards section is visible

Scenario: [Negative] "Submit an Idea" CTA is absent
  Given the homepage is open
  When the page finishes loading
  Then the "Submit an Idea" button is not visible
  And no click action is available for "Submit an Idea"

Scenario: [Negative] Home tab is not active on the home page
  Given the homepage is open
  When the navigation is displayed
  Then the "Home" tab is not marked as active or selected

Scenario: [Negative] "Admin Console" nav item is absent
  Given the homepage is open
  When the page finishes loading
  Then the "Admin Console" nav item is not visible
