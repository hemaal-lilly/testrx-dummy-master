/**
 * Auto-generated Playwright test
 * Test: Provision service account and access for Nitrosamine automation
 * Project: proj_85874ca7
 * Generated: 2026-03-02T14:14:23.711Z
 * 
 * @generated
 */

import { test, expect } from '@playwright/test';

@automated @regression
Feature: Provision service account and access for Nitrosamine automation
  As a user
  I want to provision and verify access for the Nitrosamine service account
  So that I can ensure proper functionality and connectivity

  Scenario: Provision service account and verify access
    Given I am signed in as "svc_nitrosamine_bot"
    When I compose and send an email to "nitroso-ops@corp.example"
    Then I should see the email in the recipient's inbox

    Given I authenticate to the HPC environment
    When I submit a test computational job
    Then I should see the job complete successfully

    Given I navigate to "/lrlhps/data/NirtosamineCalculation/Prod"
    When I create and read a test file
    Then I should see the file contents match the written text

    Given I access "\\guava\guava.grp\MDPRDAUTOMATION\PRD\Nitrosamine_Calculation"
    When I create and read a test file
    Then I should see the file contents match the written text

    Given I start a provisioning request for the Nitrosamine service account
    When I populate the required fields and submit the request
    Then I should see the provisioning request succeed
