# Test: Provision service account and access for Nitrosamine automation
# Project: proj_ad3a22d4
# Generated: 2026-03-04T05:22:50.005Z
# @generated

@automated @regression
Feature: Provision service account and access for Nitrosamine automation
  As a user
  I want to provision the Nitrosamine service account and validate its access
  So that the automation can function correctly

  Scenario: Provision service account and validate access
    Given I am signed in as "svc_nitrosamine_bot"
    When I compose and send an email to "nitroso-ops@corp.example" with a unique subject and body
    Then I should see the email in the recipient's inbox and send a reply back

    Given I authenticate to the HPC environment using "svc_nitrosamine_bot"
    When I submit a minimal test computational job
    Then I should monitor the job status until it completes

    Given I navigate to "/lrlhps/data/NirtosamineCalculation /Prod" using "svc_nitrosamine_bot"
    When I create a new test file with a unique name and write a short text string into it
    Then I should reopen the test file and verify the contents

    Given I connect to "\\guava\guava.grp\MDPRDAUTOMATION\PRD\Nitrosamine_Calculation" using "svc_nitrosamine_bot"
    When I create a new test file with a unique name and write a short text string into it
    Then I should reopen the test file and verify the contents

    Given I start a new provisioning request for the Nitrosamine service account
    When I populate the required fields and submit the request
    Then I should verify the provisioning request is successful
