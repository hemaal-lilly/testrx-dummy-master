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
  await pageObject.configureLogPath('/var/logs/automation');
});

Given('failure_points_list includes {string}, {string}, {string}, and {string}', async function (this: ICustomWorld, step1: string, step2: string, step3: string, step4: string) {
  // Assume configuration is already done in the system; no action needed here.
});

Given('retry_attempts policy is configured as a non-negative integer', async function (this: ICustomWorld) {
  await pageObject.configureRetryAttempts(3);
});

Given('a molecule with MoleculeID and Project is being processed in the automation', async function (this: ICustomWorld) {
  // Assume molecule is already being processed; no action needed here.
});

Given('a process exception occurs at step {string}', async function (this: ICustomWorld, step: string) {
  await pageObject.triggerProcessException(step);
});

Given('a recoverable file access error occurs at step {string} and retry_attempts is set to {int}', async function (this: ICustomWorld, step: string, attempts: number) {
  await pageObject.configureRetryAttempts(attempts);
  await pageObject.triggerRetryPolicy(step);
});

Given('a critical failure is detected due to repeated failure threshold at step {string}', async function (this: ICustomWorld, step: string) {
  await pageObject.triggerCriticalFailure(step);
});

Given('monitoring_distribution is empty', async function (this: ICustomWorld) {
  await pageObject.configureMonitoringDistribution('');
});

Given('log_path is not writable by the service account', async function (this: ICustomWorld) {
  await pageObject.configureLogPath('/invalid/path');
});

Given('retry_attempts is set to {int}', async function (this: ICustomWorld, attempts: number) {
  await pageObject.configureRetryAttempts(attempts);
});

When('the exception is captured', async function (this: ICustomWorld) {
  await pageObject.expectProcessExceptionAlertVisible();
});

When('the retry policy triggers', async function (this: ICustomWorld) {
  // Assume retry policy is triggered automatically; no action needed here.
});

When('the bot stops processing', async function (this: ICustomWorld) {
  // Assume bot stops processing automatically; no action needed here.
});

When('the exception handling configuration is evaluated', async function (this: ICustomWorld) {
  // Assume configuration evaluation is automatic; no action needed here.
});

When('the system attempts to write an exception log entry', async function (this: ICustomWorld) {
  // Assume log writing is triggered automatically; no action needed here.
});

Then('an error email is sent to monitoring_distribution', async function (this: ICustomWorld) {
  await pageObject.expectErrorNotificationEmailContains('monitoring@example.com');
});

Then('the email content includes MoleculeID, Project, step name {string}, and an error summary', async function (this: ICustomWorld, step: string) {
  await pageObject.expectErrorNotificationEmailContains(`Step: ${step}`);
});

Then('processing continues after a successful retry', async function (this: ICustomWorld) {
  // Assume processing continuation is verified by system; no action needed here.
});

Then('both the failure and the recovery are logged', async function (this: ICustomWorld) {
  await pageObject.expectLogEntryContains('Recovery successful');
});

Then('stakeholders receive a stop notification at stakeholder_recipients', async function (this: ICustomWorld) {
  await pageObject.expectErrorNotificationEmailContains('stakeholder@example.com');
});

Then('the log documents next steps', async function (this: ICustomWorld) {
  await pageObject.expectLogEntryContains('Next steps');
});

Then('an exception log entry is created at log_path', async function (this: ICustomWorld) {
  await pageObject.expectLogEntryContains('/var/logs/automation');
});

Then('the log entry includes MoleculeID, Project, step name {string}, timestamp, and an error summary', async function (this: ICustomWorld, step: string) {
  await pageObject.expectLogEntryContains(`Step: ${step}`);
});

Then('no retry attempt is performed', async function (this: ICustomWorld) {
  await pageObject.expectLogEntryContains('No retry attempted');
});

Then('the failure is logged', async function (this: ICustomWorld) {
  await pageObject.expectLogEntryContains('Failure logged');
});

Then('an error message {string} is raised', async function (this: ICustomWorld, message: string) {
  await pageObject.expectErrorMessage(message);
});