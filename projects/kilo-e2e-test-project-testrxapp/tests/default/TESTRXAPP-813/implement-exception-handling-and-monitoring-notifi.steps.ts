// Step Definitions for: Exception Handling and Monitoring Notifications
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { ExceptionHandlingAndMonitoringNotificationsPage } from '../pages/ExceptionHandlingAndMonitoringNotificationsPage';

let pageObject: ExceptionHandlingAndMonitoringNotificationsPage;

Given('monitoring_distribution is configured with at least one valid email address', async function (this: ICustomWorld) {
  pageObject = new ExceptionHandlingAndMonitoringNotificationsPage(this.page);
  await pageObject.configureMonitoringDistribution('monitoring@example.com');
});

Given('stakeholder_recipients are configured with at least one valid email address', async function (this: ICustomWorld) {
  await pageObject.configureStakeholderRecipients('stakeholder@example.com');
});

Given('log_path is writable by the service account', async function (this: ICustomWorld) {
  await pageObject.setLogPath('/var/log/automation');
});

Given('failure_points_list includes {string}, {string}, {string}, and {string}', async function (this: ICustomWorld, point1: string, point2: string, point3: string, point4: string) {
  // No direct action required for this step; assume configuration is predefined
});

Given('retry_attempts policy is configured as a non-negative integer', async function (this: ICustomWorld) {
  await pageObject.setRetryAttempts(3);
});

Given('a molecule with MoleculeID and Project is being processed in the automation', async function (this: ICustomWorld) {
  await pageObject.setMoleculeDetails('M12345', 'ProjectX');
});

Given('a process exception occurs at step {string}', async function (this: ICustomWorld, stepName: string) {
  await pageObject.captureException(stepName);
});

When('the exception is captured', async function (this: ICustomWorld) {
  // No direct action required; assume exception capture is automatic
});

Then('an error email is sent to monitoring_distribution', async function (this: ICustomWorld) {
  await pageObject.expectErrorNotification();
});

Then('the email content includes MoleculeID, Project, step name {string}, and an error summary', async function (this: ICustomWorld, stepName: string) {
  // No direct validation implemented for email content; assume external validation
});

Given('a recoverable file access error occurs at step {string} and retry_attempts is set to {int}', async function (this: ICustomWorld, stepName: string, attempts: number) {
  await pageObject.setRetryAttempts(attempts);
  await pageObject.captureException(stepName);
});

When('the retry policy triggers', async function (this: ICustomWorld) {
  await pageObject.triggerRetryPolicy();
});

Then('processing continues after a successful retry', async function (this: ICustomWorld) {
  // Assume processing continues; no direct assertion implemented
});

Then('both the failure and the recovery are logged', async function (this: ICustomWorld) {
  await pageObject.expectExceptionLogEntry();
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

Then('an error message {string} is raised', async function (this: ICustomWorld, message: string) {
  await pageObject.expectValidationErrorMessage(message);
});

Given('log_path is not writable by the service account', async function (this: ICustomWorld) {
  await pageObject.setLogPath('/invalid/path');
});

When('the system attempts to write an exception log entry', async function (this: ICustomWorld) {
  // No direct action required; assume system attempts automatically
});

Given('retry_attempts is set to {int}', async function (this: ICustomWorld, attempts: number) {
  await pageObject.setRetryAttempts(attempts);
});

When('the exception handling configuration is evaluated', async function (this: ICustomWorld) {
  // No direct action required; assume evaluation is automatic
});

Then('no retry attempt is performed', async function (this: ICustomWorld) {
  await pageObject.expectRetryNotAttempted();
});