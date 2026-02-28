/**
 * Auto-generated Playwright test
 * Test: One India HCP
 * Project: proj_e8e80b6c
 * Generated: 2026-02-28T19:09:05.728Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

Feature: One India HCP — Work Order creation, validation, and update processing
  In order to ensure accurate and compliant Work Order processing
  As a CMS team member
  I want to validate VEM-sourced data, handle PAN and preparation time exceptions, and process updates only under approved conditions

Background:
  Given incoming VEM CSV data is available for processing
  And the Work Order Solution Portal is accessible to the CMS team
  And email notifications to the meeting submitter with a copy to the CMS team are enabled
  And a meeting submitter is associated with the VEM event

Scenario: [Positive] Create Work Order when all mandatory VEM fields are present and preparation time is within the 3-hour limit
  Given the incoming VEM CSV contains all mandatory fields required for a Work Order, including PAN
  And the preparation time in the VEM data is 2 hours
  When the system validates VEM data for Work Order creation
  Then a Work Order is created
  And the Work Order details sourced from VEM are stored

Scenario: [Positive] Proceed with Work Order generation after CMS enters missing PAN
  Given the incoming VEM CSV contains all mandatory fields required for a Work Order except PAN
  And the CMS team enters the PAN details in the Work Order Solution Portal and initiates the next steps of Work Order generation
  When the system validates the data after PAN entry
  Then Work Order generation proceeds

Scenario: [Positive] Preparation time exceeds 3 hours; CMS confirms and creation continues
  Given the incoming VEM CSV contains all mandatory fields required for a Work Order, including PAN
  And the preparation time in the VEM data is 3 hours 30 minutes
  And the system has flagged the preparation time because it exceeds the 3-hour limit
  When the CMS team manually confirms the preparation time in the Work Order Solution Portal after verifying approvals
  Then Work Order creation continues

Scenario: [Positive] Apply updates to an existing Work Order only when a new approved VOD entry exists in VEM history
  Given an existing Work Order already exists
  And the VEM history file contains a new approved VOD entry for this Work Order
  And updated data for the Work Order is available in VEM
  When the system processes updates for the existing Work Order
  Then the new or updated data is applied to the Work Order

Scenario: [Negative] Missing mandatory VEM data (excluding PAN) prevents Work Order creation and triggers notification
  Given the incoming VEM CSV is missing at least one mandatory field required for a Work Order other than PAN
  When the system validates VEM data for Work Order creation
  Then no Work Order is created and no related details are stored
  And an email is sent to the meeting submitter with a copy to the CMS team listing the specific missing fields

Scenario: [Negative] PAN missing and not entered by CMS prevents Work Order generation from proceeding
  Given the incoming VEM CSV is missing PAN but includes all other mandatory fields required for a Work Order
  And the CMS team has not entered the PAN details in the Work Order Solution Portal
  When the system validates VEM data for Work Order creation
  Then Work Order generation does not proceed

Scenario: [Negative] Preparation time exceeds 3 hours without CMS confirmation prevents Work Order creation
  Given the incoming VEM CSV contains all mandatory fields required for a Work Order
  And the preparation time in the VEM data is 3 hours 10 minutes
  And the system has flagged the preparation time because it exceeds the 3-hour limit
  And the CMS team has not manually confirmed the preparation time in the Work Order Solution Portal
  When the system evaluates readiness for Work Order creation
  Then Work Order creation does not continue

Scenario: [Negative] No new approved VOD entry prevents updates to an existing Work Order
  Given an existing Work Order already exists
  And updated data for the Work Order is available in VEM
  And the VEM history file does not contain a new approved VOD entry for this Work Order
  When the system processes updates for the existing Work Order
  Then no updates are applied to the Work Order

Scenario: [Edge] Preparation time exactly at the 3-hour limit passes validation and allows creation
  Given the incoming VEM CSV contains all mandatory fields required for a Work Order, including PAN
  And the preparation time in the VEM data is exactly 3 hours
  When the system validates VEM data for Work Order creation
  Then the preparation time passes validation without a flag
  And Work Order creation proceeds
