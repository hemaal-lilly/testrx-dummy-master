/**
 * Auto-generated Playwright test
 * Test: Test_csa_launchpad-New
 * Project: proj_e8e80b6c
 * Generated: 2026-02-28T19:17:45.404Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

Feature: CSA Launchpad Home Page navigation and cards
  In order to navigate CSA Launchpad and access key tools
  As a user
  I want to see required header navigation, CTA, and home page cards and use them to navigate

Background:
  Given the user navigates to https://qa.csalaunchpad.lilly.com
  And the user is on the home page

Scenario: [Positive] Top header displays required navigation items
  Given the user is on the home page
  When the user views the top header
  Then "Home" is visible in the top header
  And "Automation Platform" dropdown is visible in the top header
  And "Marketplace" is visible in the top header
  And "TechZone" is visible in the top header
  And "Admin Console" is visible in the top header

Scenario: [Positive] "Submit an Idea" CTA is visible in the header
  Given the user is on the home page
  When the user views the top header
  Then the "Submit an Idea" button is visible

Scenario: [Positive] Home tab is highlighted as active on the home page
  Given the user is on the home page
  When the home page is loaded
  Then the "Home" tab is highlighted as active/selected

Scenario: [Positive] Home page displays required navigation cards with icon and right-arrow
  Given the user is on the home page
  When the home page is loaded
  Then "My LQS302 Risk Evaluations (LEval)" card is visible
  And the "My LQS302 Risk Evaluations (LEval)" card shows a relevant icon
  And the "My LQS302 Risk Evaluations (LEval)" card shows a right-arrow navigation indicator
  And "My IT Assets" card is visible
  And the "My IT Assets" card shows a relevant icon
  And the "My IT Assets" card shows a right-arrow navigation indicator

Scenario: [Positive] Clicking "My LQS302 Risk Evaluations (LEval)" redirects to the LQS302 Risk Evaluations page
  Given the user is on the home page
  When the user clicks the "My LQS302 Risk Evaluations (LEval)" card
  Then the user is redirected to the LQS302 Risk Evaluations page

Scenario: [Positive] Clicking "My IT Assets" redirects to the My IT Assets page
  Given the user is on the home page
  When the user clicks the "My IT Assets" card
  Then the user is redirected to the My IT Assets page

Scenario: [Negative] Home tab not marked active on the home page
  Given the user is on the home page
  When the home page is loaded
  Then the "Home" tab is not highlighted as active/selected

Scenario: [Negative] "Automation Platform" dropdown not visible in the top header
  Given the user is on the home page
  When the user views the top header
  Then the "Automation Platform" dropdown is not visible

Scenario: [Negative] "My IT Assets" card absent — click action not available
  Given the user is on the home page
  When the user tries to click the "My IT Assets" card
  Then the "My IT Assets" card is not visible
  And the click action on "My IT Assets" is not available
