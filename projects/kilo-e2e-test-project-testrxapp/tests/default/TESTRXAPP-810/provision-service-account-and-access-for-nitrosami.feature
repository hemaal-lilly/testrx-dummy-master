/**
 * Auto-generated Playwright test
 * Test: Provision service account and access for Nitrosamine automation
 * Project: proj_e8e80b6c
 * Generated: 2026-03-02T09:40:12.254Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: Provision service account and access for Nitrosamine automation
  As a user
  I want to provision and validate the Nitrosamine service account
  So that the automation process can be verified

  Scenario: Provision service account and validate access
    Given I am signed in as "svc_nitrosamine_bot"
    When I compose and send an email to "nitroso-ops@corp.example"
    Then I should receive a reply and verify the email content

    Given I authenticate to the HPC environment
    When I submit a test computational job
    Then I should monitor the job status until completion

    Given I navigate to /lrlhps/data/NirtosamineCalculation/Prod
    When I create and read a test file
    Then I should verify the file content

    Given I access \\guava\guava.grp\MDPRDAUTOMATION\PRD\Nitrosamine_Calculation
    When I create and read a test file
    Then I should verify the file content

    Given I start a provisioning request for the Nitrosamine service account
    When I populate the required fields and submit the request
    Then I should verify the provisioning request status
