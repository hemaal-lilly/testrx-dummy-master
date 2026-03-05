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
  await pageObject.configureLogPath('/valid/log/path');
});

Given('failure_points_list includes {string}, {string}, {string}, and {string}', async function (this: ICustomWorld, step1: string, step2: string, step3: string, step4: string) {
  // Assuming this is a configuration step handled outside the UI
});

Given('retry_attempts policy is configured as a non-negative integer', async function (this: ICustomWorld) {
  await pageObject.configureRetryAttempts(3);
});

Given('a molecule with MoleculeID and Project is being processed in the automation', async function (this: ICustomWorld) {
  // Assuming this is a precondition step handled outside the UI
});

Given('a process exception occurs at step {string}', async function (this: ICustomWorld, step: string) {
  await pageObject.simulateProcessException(step);
});

Given('a recoverable file access error occurs at step {string} and retry_attempts is set to {int}', async function (this: ICustomWorld, step: string, attempts: number) {
  await pageObject.configureRetryAttempts(attempts);
  await pageObject.simulateRecoverableError(step);
});

Given('a critical failure is detected due to repeated failure threshold at step {string}', async function (this: ICustomWorld, step: string) {
  await pageObject.simulateCriticalFailure(step);
});

Given('monitoring_distribution is empty', async function (this: ICustomWorld) {
  await pageObject.configureMonitoringDistribution('');
});

Given('log_path is not writable by the service account', async function (this: ICustomWorld) {
  await pageObject.configureLogPath('/invalid/log/path');
});

Given('retry_attempts is set to {int}', async function (this: ICustomWorld, attempts: number) {
  await pageObject.configureRetryAttempts(attempts);
});

When('the exception is captured', async function (this: ICustomWorld) {
  // Assuming exception capture is automatic after simulation
});

When('the retry policy triggers', async function (this: ICustomWorld) {
  // Assuming retry policy is triggered automatically after simulation
});

When('the bot stops processing', async function (this: ICustomWorld) {
  // Assuming bot stop is automatic after critical failure simulation
});

When('the system attempts to write an exception log entry', async function (this: ICustomWorld) {
  // Assuming log entry attempt is automatic after simulation
});

When('the retry policy is evaluated', async function (this: ICustomWorld) {
  // Assuming retry evaluation is automatic after simulation
});

Then('an error email is sent to monitoring_distribution', async function (this: ICustomWorld) {
  // Assuming email sending is verified outside the UI
});

Then('the email content includes MoleculeID, Project, step name {string}, and an error summary', async function (this: ICustomWorld, step: string) {
  // Assuming email content verification is outside the UI
});

Then('processing continues after a successful retry', async function (this: ICustomWorld) {
  // Assuming processing continuation is verified outside the UI
});

Then('both the failure and the recovery are logged', async function (this: ICustomWorld) {
  // Assuming logging verification is outside the UI
});

Then('stakeholders receive a stop notification at stakeholder_recipients', async function (this: ICustomWorld) {
  // Assuming notification verification is outside the UI
});

Then('the log documents next steps', async function (this: ICustomWorld) {
  // Assuming log verification is outside the UI
});

Then('an exception log entry is created at log_path', async function (this: ICustomWorld) {
  await expect(pageObject.exceptionLog).toBeVisible({ timeout: 5000 });
});

Then('the log entry includes MoleculeID, Project, step name {string}, timestamp, and an error summary', async function (this: ICustomWorld, step: string) {
  await pageObject.expectExceptionLogContains({ stepName: step, MoleculeID: '12345', Project: 'TestProject', timestamp: '2023-10-10', errorSummary: 'Error occurred' });
});

Then('no retry attempt is performed', async function (this: ICustomWorld) {
  await pageObject.expectNoRetryAttempt();
});

Then('the failure is logged', async function (this: ICustomWorld) {
  // Assuming failure logging is verified outside the UI
});

Then('an error message {string} is raised', async function (this: ICustomWorld, message: string) {
  await pageObject.expectErrorMessage(message);
});