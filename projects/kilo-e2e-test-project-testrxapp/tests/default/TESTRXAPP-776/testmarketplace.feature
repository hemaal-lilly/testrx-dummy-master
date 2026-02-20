/**
 * Auto-generated Playwright test
 * Test: Test_marketPlace
 * Project: proj_f535d7d3
 * Generated: 2026-02-20T06:12:09.516Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

Feature: Marketplace landing page hero and cards display
  In order to quickly understand the automation offerings
  As a site visitor
  I want to see the hero and cards rendered correctly on page load

Background:
  Given the marketplace page is loaded

Scenario: [Positive] Hero section is visible on initial page load
  When the page renders
  Then the hero section is visible

Scenario: [Positive] Hero section displays required content elements
  When the hero section is viewed
  Then the heading text equals "Enterprise Automation"
  And a short descriptive text is displayed directly under the heading
  And a "Get Started" button is visible
  And a hero image is displayed on the right side of the hero section

Scenario: [Positive] "Automation Tech for Tech" section title is visible
  When the user scrolls to the cards section
  Then the section title "Automation Tech for Tech" is visible

Scenario: [Positive] Three specific cards are displayed under "Automation Tech for Tech"
  When the cards under the "Automation Tech for Tech" section are viewed
  Then exactly three cards are visible
  And the card titles are "CSA Launch Pad", "Test Automation", and "Become An Automation Autonaut"

Scenario: [Positive] Each card shows an image, a title, and supporting text
  When each displayed card under the "Automation Tech for Tech" section is inspected
  Then each card shows an image
  And each card shows a title
  And each card shows supporting descriptive text

Scenario: [Negative] "Get Started" button is absent in the hero section
  When the hero section is viewed
  Then the "Get Started" button is not visible

Scenario: [Robustness] Browser refresh retains hero section visibility
  When the browser is refreshed
  Then the hero section is visible

Scenario: [Robustness] Hard reload maintains visibility of hero and cards section
  When the page is hard reloaded bypassing cache
  Then the hero section is visible
  And the section title "Automation Tech for Tech" is visible

Scenario: [Robustness] Responsive resize preserves visibility of key sections
  When the browser window is resized between common mobile and desktop widths
  Then the hero section remains visible
  And the "Automation Tech for Tech" section remains visible
