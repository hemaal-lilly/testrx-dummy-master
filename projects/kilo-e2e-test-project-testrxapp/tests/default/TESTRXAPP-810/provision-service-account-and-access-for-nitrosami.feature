# Test: Provision service account and access for Nitrosamine automation
# Project: proj_4f91ce9f
# Generated: 2026-03-05T11:35:42.416Z
# @generated

@automated @regression
Feature: Provision service account and access for Nitrosamine automation
  As a user
  I want to provision a service account and verify its access
  So that I can ensure the account is configured correctly for automation tasks

  Scenario: Provision service account and validate access
    Given I sign in as "svc_nitrosamine_bot"
    When I compose and send an email to "nitroso-ops@corp.example" with a unique subject and body
    Then I should receive a reply and verify its contents

    Given I authenticate to the HPC environment using "svc_nitrosamine_bot"
    When I submit a minimal test computational job
    Then I should monitor the job status until it completes

    Given I navigate to "/lrlhps/data/NirtosamineCalculation /Prod" as "svc_nitrosamine_bot"
    When I create a new test file with a unique name and write a short text string into it
    Then I should reopen the test file and verify its contents

    Given I access "\\guava\guava.grp\MDPRDAUTOMATION\PRD\Nitrosamine_Calculation" as "svc_nitrosamine_bot"
    When I create a new test file with a unique name and write a short text string into it
    Then I should reopen the test file and verify its contents

    Given I start a provisioning request for the Nitrosamine service account
    When I populate the required fields and submit the request
    Then I should verify the provisioning request is successful
