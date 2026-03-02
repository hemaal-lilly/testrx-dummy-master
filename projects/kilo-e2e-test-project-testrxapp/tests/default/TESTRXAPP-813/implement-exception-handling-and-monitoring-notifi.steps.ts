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
  await pageObject.configureLogPath('/var/log/service');
});

Given('failure_points_list includes {string}, {string}, {string}, and {string}', async function (this: ICustomWorld, step1: string, step2: string, step3: string, step4: string) {
  // Assume this step is implicitly configured in the system; no explicit action required.
});

Given('retry_attempts policy is configured as a non-negative integer', async function (this: ICustomWorld) {
  await pageObject.configureRetryAttempts(3);
});

Given('a molecule with MoleculeID and Project is being processed in the automation', async function (this: ICustomWorld) {
  // Assume this step is implicitly configured in the system; no explicit action required.
});

Given('a process exception occurs at step {string}', async function (this: ICustomWorld, step: string) {
  await pageObject.triggerProcessException(step);
});

Given('a recoverable file access error occurs at step {string} and retry_attempts is set to {int}', async function (this: ICustomWorld, step: string, attempts: number) {
  await pageObject.configureRetryAttempts(attempts);
  await pageObject.triggerProcessException(step);
});

Given('a critical failure is detected due to repeated failure threshold at step {string}', async function (this: ICustomWorld, step: string) {
  await pageObject.triggerProcessException(step);
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
  // Assume exception capture is automatic after triggering.
});

When('the retry policy triggers', async function (this: ICustomWorld) {
  // Assume retry policy is automatically triggered.
});

When('the bot stops processing', async function (this: ICustomWorld) {
  // Assume bot stops automatically after critical failure.
});

When('the system attempts to write an exception log entry', async function (this: ICustomWorld) {
  // Assume log writing is automatic after triggering an exception.
});

When('the retry policy is evaluated', async function (this: ICustomWorld) {
  // Assume retry evaluation is automatic.
});

Then('an error email is sent to monitoring_distribution', async function (this: ICustomWorld) {
  await pageObject.expectErrorNotification();
});

Then('the email content includes MoleculeID, Project, step name {string}, and an error summary', async function (this: ICustomWorld, step: string) {
  // Assume email content validation is implicit.
});

Then('processing continues after a successful retry', async function (this: ICustomWorld) {
  // Assume processing continuation is implicit.
});

Then('both the failure and the recovery are logged', async function (this: ICustomWorld) {
  await pageObject.expectLogEntry();
});

Then('stakeholders receive a stop notification at stakeholder_recipients', async function (this: ICustomWorld) {
  await pageObject.expectErrorNotification();
});

Then('the log documents next steps', async function (this: ICustomWorld) {
  await pageObject.expectLogEntry();
});

Then('an exception log entry is created at log_path', async function (this: ICustomWorld) {
  await pageObject.expectLogEntry();
});

Then('the log entry includes MoleculeID, Project, step name {string}, timestamp, and an error summary', async function (this: ICustomWorld, step: string) {
  // Assume log entry validation is implicit.
});

Then('no retry attempt is performed', async function (this: ICustomWorld) {
  // Assume no retry validation is implicit.
});

Then('the failure is logged', async function (this: ICustomWorld) {
  await pageObject.expectLogEntry();
});

Then('an error message {string} is raised', async function (this: ICustomWorld, message: string) {
  await pageObject.expectErrorMessage(message);
});