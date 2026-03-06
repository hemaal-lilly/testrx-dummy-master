/**
 * Auto-generated Playwright test
 * Test: Verify Indian HCP Registration Number
 * Project: proj_e8e80b6c
 * Generated: 2026-03-06T11:31:44.585Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

Feature: Verify Indian HCP Medical Registration Number
  In order to access HCP-only features and content
  As a registered Indian Healthcare Professional
  I want to submit and verify my Medical Registration Number on my profile

Background:
  Given the MRN verification form includes #state-council-select, #mrn-input, #verify-mrn-btn, #mrn-error-msg, #verification-status-badge, and #verify-spinner
  And the Verification Spinner (#verify-spinner) is hidden by default
  And the Error Message Container (#mrn-error-msg) has aria-live "polite"

Scenario: [Positive] Successful verification updates profile and UI (MMC, 6 digits)
  Given a logged-in HCP with profile status "Not Verified" is on the verification form
  And #state-council-select is set to "Maharashtra Medical Council"
  And #mrn-input contains "MMC-123456"
  When the HCP clicks #verify-mrn-btn
  Then the Verification Spinner (#verify-spinner) becomes visible immediately
  And within 3 seconds the Verification Status Badge (#verification-status-badge) updates to "Verified"
  And a toast appears with text "Registration verified"
  And the Verify Button (#verify-mrn-btn) becomes disabled and its label changes to "Verified"
  And the MRN is saved and displayed as uppercase "MMC-123456"

Scenario: [Negative] Invalid MRN format shows inline error and prevents verification
  Given a logged-in HCP is on the verification form
  And #state-council-select is set to "Delhi Medical Council"
  And #mrn-input contains "mmc-1234"
  When the HCP blurs #mrn-input
  Then the Error Message Container (#mrn-error-msg) shows "Enter a valid Registration Number in format XXX-12345 (A-Z prefix, 5–7 digits)."
  And the Verify Button (#verify-mrn-btn) remains disabled
  And the Verification Status Badge (#verification-status-badge) remains "Not Verified"
  And the Verification Spinner (#verify-spinner) is not visible

Scenario: [Negative] MRN prefix does not match selected State Medical Council
  Given a logged-in HCP is on the verification form
  And #state-council-select is set to "Maharashtra Medical Council"
  And #mrn-input contains "DMC-123456"
  When the HCP clicks #verify-mrn-btn
  Then the Error Message Container (#mrn-error-msg) shows "Prefix DMC does not match selected council Maharashtra Medical Council."
  And the Verification Spinner (#verify-spinner) is not visible
  And the Verification Status Badge (#verification-status-badge) remains "Not Verified"

Scenario: [Negative] Duplicate MRN is rejected and allows subsequent attempts
  Given the system has an existing account linked to MRN "KMC-7654321"
  And a logged-in HCP is on the verification form
  And #state-council-select is set to "Karnataka Medical Council"
  And #mrn-input contains "KMC-7654321"
  When the HCP clicks #verify-mrn-btn
  Then the Error Message Container (#mrn-error-msg) shows "This Registration Number is already linked to another account."
  And the Verification Status Badge (#verification-status-badge) remains "Not Verified"
  And the Verify Button (#verify-mrn-btn) remains enabled

Scenario: [Edge] Minimum digits (5) verifies successfully
  Given a logged-in HCP with profile status "Not Verified" is on the verification form
  And #state-council-select is set to "Tamil Nadu Medical Council"
  And #mrn-input contains "TMC-12345"
  When the HCP clicks #verify-mrn-btn
  Then the Verification Status Badge (#verification-status-badge) updates to "Verified"
  And a toast appears with text "Registration verified"

Scenario: [Negative] MRN exceeds maximum length shows error and blocks verification
  Given a logged-in HCP is on the verification form
  And #state-council-select is set to "Maharashtra Medical Council"
  And #mrn-input contains "MMC-12345678"
  When the HCP blurs #mrn-input
  Then the Error Message Container (#mrn-error-msg) shows "Registration Number must not exceed 11 characters."
  And the Verify Button (#verify-mrn-btn) remains disabled
  And the Verification Spinner (#verify-spinner) is not visible

Scenario: [Edge] Verification completes within 3 seconds when service is available
  Given a logged-in HCP with profile status "Not Verified" is on the verification form
  And #state-council-select is set to "Maharashtra Medical Council"
  And #mrn-input contains "MMC-123456"
  When the HCP clicks #verify-mrn-btn
  Then the Verification Spinner (#verify-spinner) becomes visible
  And the Verification Spinner (#verify-spinner) hides within 3 seconds
  And the Verification Status Badge (#verification-status-badge) shows "Verified"

Scenario: [Negative] Backend delay greater than 3 seconds shows temporary unavailable error
  Given a logged-in HCP is on the verification form
  And #state-council-select is set to "Karnataka Medical Council"
  And #mrn-input contains "KMC-1234567"
  And the verification service is delayed beyond 3 seconds
  When the HCP clicks #verify-mrn-btn
  Then after 3 seconds the Verification Spinner (#verify-spinner) hides
  And the Error Message Container (#mrn-error-msg) shows "Verification service is temporarily unavailable. Please try again."
  And the Verification Status Badge (#verification-status-badge) remains "Not Verified"

Scenario: [Negative] Rate limit exceeded after 3 attempts within 60 seconds
  Given a logged-in HCP is on the verification form
  And the HCP has made 3 verification attempts within the last 60 seconds
  And #state-council-select is set to "Delhi Medical Council"
  And #mrn-input contains "DMC-123456"
  When the HCP clicks #verify-mrn-btn to attempt a 4th verification
  Then the Error Message Container (#mrn-error-msg) shows "You have reached the verification attempt limit. Please wait 60 seconds."
  And the Verify Button (#verify-mrn-btn) becomes disabled for 60 seconds

Scenario: [Edge] Keyboard accessibility and error announcement via aria-live
  Given the HCP navigates using keyboard only
  When the HCP tabs through the form
  Then focus order is #state-council-select -> #mrn-input -> #verify-mrn-btn -> #verification-status-badge
  And the Error Message Container (#mrn-error-msg) announces messages via aria-live "polite" when they appear

Scenario: [Negative] MRN field empty shows required error and disables verify
  Given a logged-in HCP is on the verification form
  And #state-council-select is set to "Maharashtra Medical Council"
  And #mrn-input is empty
  When the HCP blurs #mrn-input
  Then the Error Message Container (#mrn-error-msg) shows "Medical Registration Number is required"
  And the Verify Button (#verify-mrn-btn) remains disabled
  And the Verification Spinner (#verify-spinner) is not visible
  And the Verification Status Badge (#verification-status-badge) remains "Not Verified"

Scenario: [Negative] State Medical Council not selected shows required error
  Given a logged-in HCP is on the verification form
  And #state-council-select is not selected
  And #mrn-input contains "MMC-123456"
  When the HCP clicks #verify-mrn-btn
  Then the Error Message Container (#mrn-error-msg) shows "Select your State Medical Council"
  And the Verify Button (#verify-mrn-btn) remains disabled
  And the Verification Spinner (#verify-spinner) is not visible
  And the Verification Status Badge (#verification-status-badge) remains "Not Verified"

Scenario: [Edge] Leading and trailing spaces in MRN input are trimmed before verification
  Given a logged-in HCP with profile status "Not Verified" is on the verification form
  And #state-council-select is set to "Maharashtra Medical Council"
  And #mrn-input contains "  MMC-123456  "
  When the HCP clicks #verify-mrn-btn
  Then the Verification Status Badge (#verification-status-badge) updates to "Verified" within 3 seconds
  And the MRN is saved and displayed as uppercase "MMC-123456"

Scenario: [Negative] Unauthorized user cannot access the MRN verification form
  Given the user is not logged in
  When the user attempts to access the MRN verification form
  Then the verification form controls (#state-council-select, #mrn-input, #verify-mrn-btn) are not visible
