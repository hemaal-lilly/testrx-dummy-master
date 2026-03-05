# Test: Provision service account and access for Nitrosamine automation
# Project: proj_ad3a22d4
# Generated: 2026-03-05T05:14:32.525Z
# @generated

@automated @regression
Feature: Provision service account and access for Nitrosamine automation
  As a user
  I want to provision a service account and validate its access
  So that I can ensure proper functionality for Nitrosamine automation

  Scenario: Provision service account and validate email, HPC, and file system access
    Given I sign in to the email client as "svc_nitrosamine_bot"
    When I compose and send an email to "nitroso-ops@corp.example" with a unique subject and body
    Then I should receive a reply from "nitroso-ops@corp.example"

    Given I authenticate to the HPC environment using the "svc_nitrosamine_bot" service account
    When I submit a minimal test computational job
    Then I should monitor the job status until it completes

    Given I navigate to "/lrlhps/data/NirtosamineCalculation/Prod" using "svc_nitrosamine_bot"
    When I create and write to a new test file
    Then I should reopen the file and verify its contents

    Given I access "\\guava\guava.grp\MDPRDAUTOMATION\PRD\Nitrosamine_Calculation" using "svc_nitrosamine_bot"
    When I create and write to a new test file
    Then I should reopen the file and verify its contents

    Given I start a provisioning request for the Nitrosamine service account
    When I populate the fields and submit the request
    Then I should see the provisioning request succeed
