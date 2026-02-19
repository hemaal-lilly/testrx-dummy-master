/**
 * Auto-generated Playwright test
 * Test: Test_csa_launchpad-New
 * Project: proj_8ff6549e
 * Generated: 2026-02-19T09:09:04.086Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

Feature: CSA Launchpad home page header and navigation cards
  In order to quickly access key tools and areas
  As a CSA Launchpad user
  I want to see required header navigation and home page cards and navigate via them

Background:
  Given the user opens https://qa.csalaunchpad.lilly.com

Scenario: [Positive] Top header displays required navigation items
  Given the user is on the home page
  When the home page finishes loading
  Then the top header shows navigation item "Home"
  And the top header shows navigation item "Automation Platform" as a dropdown
  And the top header shows navigation item "Marketplace"
  And the top header shows navigation item "TechZone"
  And the top header shows navigation item "Admin Console"

Scenario: [Positive] Top header displays "Submit an Idea" CTA button
  Given the user is on the home page
  When the home page finishes loading
  Then the "Submit an Idea" CTA button is visible in the top header

Scenario: [Positive] Home is highlighted as the active tab on the home page
  Given the user is on the home page
  When the home page finishes loading
  Then the "Home" navigation item is shown in an active/selected state

Scenario: [Positive] Home page displays required navigation cards with icon and right-arrow
  Given the user is on the home page
  When the home page finishes loading
  Then the "My LQS302 Risk Evaluations (LEval)" card is visible with an icon and a right-arrow indicator
  And the "My IT Assets" card is visible with an icon and a right-arrow indicator

Scenario: [Positive] Clicking "My LQS302 Risk Evaluations (LEval)" card navigates to LQS302 Risk Evaluations page
  Given the user is on the home page
  When the user clicks the "My LQS302 Risk Evaluations (LEval)" card
  Then the LQS302 Risk Evaluations page is displayed

Scenario: [Positive] Clicking "My IT Assets" card navigates to My IT Assets page
  Given the user is on the home page
  When the user clicks the "My IT Assets" card
  Then the My IT Assets page is displayed

Scenario: [Negative] "My LQS302 Risk Evaluations (LEval)" card absent — navigation not available
  Given the user is on the home page
  And the "My LQS302 Risk Evaluations (LEval)" card is not displayed
  When the user looks for the "My LQS302 Risk Evaluations (LEval)" card to click
  Then no click target for "My LQS302 Risk Evaluations (LEval)" is available

Scenario: [Negative] "Submit an Idea" CTA absent — action not available
  Given the user is on the home page
  And the "Submit an Idea" CTA button is not displayed
  When the user looks for the "Submit an Idea" CTA to click
  Then no click target for "Submit an Idea" is available

Scenario: [Negative] "Automation Platform" dropdown absent — action not available
  Given the user is on the home page
  And the "Automation Platform" dropdown is not displayed
  When the user looks for the "Automation Platform" dropdown in the header
  Then no dropdown control for "Automation Platform" is available
