# Test: Provision service account and access for Nitrosamine automation
# Project: proj_ad3a22d4
# Generated: 2026-03-04T13:27:22.047Z
# @generated

@automated @regression
Feature: Provision service account and access for Nitrosamine automation
  As a user
  I want to provision a service account and validate access
  So that the Nitrosamine automation system functions correctly

  Scenario: Provision service account and validate email functionality
    Given I sign in to the email client as "svc_nitrosamine_bot"
    When I compose a new email to "nitroso-ops@corp.example" with a unique subject and body
    And I send the email
    Then I should see the email in the monitoring recipient mailbox

  Scenario: Submit a test computational job in HPC environment
    Given I authenticate to the HPC environment using "svc_nitrosamine_bot"
    When I submit a minimal test computational job
    And I monitor the job status until it completes
    Then the job should complete successfully

  Scenario: Validate file operations in LRLHPS directory
    Given I navigate to "/lrlhps/data/NirtosamineCalculation/Prod" using "svc_nitrosamine_bot"
    When I create a new test file with a unique name
    And I write a short text string into the test file and save it
    Then I should be able to reopen the test file and read the contents

  Scenario: Validate file operations in Guava share
    Given I connect to "\\guava\guava.grp\MDPRDAUTOMATION\PRD\Nitrosamine_Calculation" using "svc_nitrosamine_bot"
    When I create a new test file with a unique name
    And I write a short text string into the test file and save it
    Then I should be able to reopen the test file and read the contents

  Scenario: Provision Nitrosamine service account with specific parameters
    Given I start a new provisioning request for the Nitrosamine service account
    When I populate the fields with valid data
    And I submit the provisioning request
    Then the provisioning request should be successful
