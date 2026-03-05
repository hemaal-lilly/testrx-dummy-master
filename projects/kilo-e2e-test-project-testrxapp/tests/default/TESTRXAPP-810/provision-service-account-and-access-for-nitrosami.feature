# Test: Provision service account and access for Nitrosamine automation
# Project: proj_4f91ce9f
# Generated: 2026-03-05T11:39:13.802Z
# @generated

@automated @regression
Feature: Provision service account and access for Nitrosamine automation
  As a service account user
  I want to provision the Nitrosamine service account and validate its access
  So that I can ensure the account is correctly configured and functional

  Scenario: Provision service account and validate email functionality
    Given I am signed in as "svc_nitrosamine_bot"
    When I compose and send an email to "nitroso-ops@corp.example" with a unique subject and body
    Then I should see the email in the recipient's inbox
    And I should receive a reply back in the sender's inbox

  Scenario: Validate HPC environment job submission
    Given I am authenticated to the HPC environment as "svc_nitrosamine_bot"
    When I submit a minimal test computational job
    Then I should see the job status complete successfully

  Scenario: Validate file operations in LRLHPS directory
    Given I am authenticated as "svc_nitrosamine_bot"
    When I create and write to a test file in "/lrlhps/data/NirtosamineCalculation /Prod"
    Then I should be able to reopen and read the contents of the test file

  Scenario: Validate file operations in Guava share
    Given I am authenticated as "svc_nitrosamine_bot"
    When I create and write to a test file in "\\guava\guava.grp\MDPRDAUTOMATION\PRD\Nitrosamine_Calculation"
    Then I should be able to reopen and read the contents of the test file

  Scenario: Provision Nitrosamine service account with default configuration
    Given I start a provisioning request for the Nitrosamine service account
    When I leave the Service Account field empty and populate other fields
    Then the provisioning request should be submitted successfully

  Scenario: Provision Nitrosamine service account with specific configuration
    Given I start a provisioning request for the Nitrosamine service account
    When I enter "svc_nitrosamine_bot" as the Service Account and set unix_groups to ["brainiac-compute"]
    Then the provisioning request should be submitted successfully

  Scenario: Validate connectivity tests for Nitrosamine service account
    Given I execute the connectivity test procedure for "svc_nitrosamine_bot"
    Then I should see the test results summary
