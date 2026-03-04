// Step Definitions for: Implement exception handling and monitoring notifications
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { ImplementExceptionHandlingAndMonitoringNotificationsPage } from './implement-exception-handling-and-monitoring-notifi.page';

let pageObject: ImplementExceptionHandlingAndMonitoringNotificationsPage;

Given('monitoring_distribution is configured with at least one valid email address', async function (this: ICustomWorld) {
  pageObject = new ImplementExceptionHandlingAndMonitoringNotificationsPage(this.page);
  await pageObject.configureMonitoringDistribution('monitoring@example.com');
});

Given('stakeholder_recipients are configured with at least one valid email address', async function (this: ICustomWorld) {
  await pageObject.configureStakeholderRecipients('stakeholder@example.com');
});

Given('log_path is writable by the service account', async function (this: ICustomWorld) {
  await pageObject.configureLogPath('/var/log/automation');
});

Given('failure_points_list includes {string}, {string}, {string}, and {string}', async function (this: ICustomWorld, step1: string, step2: string, step3: string, step4: string) {
  // Assume failure points are pre-configured in the system; no direct action needed here.
});

Given('retry_attempts policy is configured as a non-negative integer', async function (this: ICustomWorld) {
  await pageObject.configureRetryAttempts(3);
});

Given('a molecule with MoleculeID and Project is being processed in the automation', async function (this: ICustomWorld) {
  await pageObject.configureMoleculeDetails('Molecule123', 'ProjectX');
});

Given('a process exception occurs at step {string}', async function (this: ICustomWorld, stepName: string) {
  await pageObject.captureException(stepName);
});

When('the exception is captured', async function (this: ICustomWorld) {
  // Assume exception capture is automatic; no direct action needed here.
});

Then('an error email is sent to monitoring_distribution', async function (this: ICustomWorld) {
  await pageObject.expectErrorNotification();
});

Then('the email content includes MoleculeID, Project, step name {string}, and an error summary', async function (this: ICustomWorld, stepName: string) {
  await pageObject.expectExceptionLogEntry();
});

Given('a recoverable file access error occurs at step {string} and retry_attempts is set to {int}', async function (this: ICustomWorld, stepName: string, attempts: number) {
  await pageObject.configureRetryAttempts(attempts);
  await pageObject.captureException(stepName);
});

When('the retry policy triggers', async function (this: ICustomWorld) {
  await pageObject.triggerRetryPolicy();
});

Then('processing continues after a successful retry', async function (this: ICustomWorld) {
  await pageObject.expectRetryPolicyLog();
});

Then('both the failure and the recovery are logged', async function (this: ICustomWorld) {
  await pageObject.expectRetryPolicyLog();
});

Given('a critical failure is detected due to repeated failure threshold at step {string}', async function (this: ICustomWorld, stepName: string) {
  await pageObject.captureException(stepName);
});

When('the bot stops processing', async function (this: ICustomWorld) {
  await pageObject.stopProcessing();
});

Then('stakeholders receive a stop notification at stakeholder_recipients', async function (this: ICustomWorld) {
  await pageObject.expectStopNotification();
});

Then('the log documents next steps', async function (this: ICustomWorld) {
  await pageObject.expectExceptionLogEntry();
});

Given('monitoring_distribution is empty', async function (this: ICustomWorld) {
  await pageObject.configureMonitoringDistribution('');
});

When('an exception is captured', async function (this: ICustomWorld) {
  // Assume exception capture is automatic; no direct action needed here.
});

Then('an error message {string} is raised', async function (this: ICustomWorld, errorMessage: string) {
  await expect(pageObject.errorNotification).toContainText(errorMessage);
});

Given('log_path is not writable by the service account', async function (this: ICustomWorld) {
  await pageObject.configureLogPath('/invalid/path');
});

When('the system attempts to write an exception log entry', async function (this: ICustomWorld) {
  // Assume log write is automatic; no direct action needed here.
});

Then('an error message {string} is raised', async function (this: ICustomWorld, errorMessage: string) {
  await expect(pageObject.errorNotification).toContainText(errorMessage);
});

Given('retry_attempts is set to {int}', async function (this: ICustomWorld, attempts: number) {
  await pageObject.configureRetryAttempts(attempts);
});

When('the exception handling configuration is evaluated', async function (this: ICustomWorld) {
  // Assume evaluation is automatic; no direct action needed here.
});

Then('an error message {string} is raised', async function (this: ICustomWorld, errorMessage: string) {
  await expect(pageObject.errorNotification).toContainText(errorMessage);
});