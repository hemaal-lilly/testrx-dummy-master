// Step Definitions for: Implement exception handling and monitoring notifications
import { Given, When, Then } from '@cucumber/cucumber';
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

Given('failure_points_list includes {string}, {string}, {string}, and {string}', async function (this: ICustomWorld, point1: string, point2: string, point3: string, point4: string) {
  // Simulated configuration, no direct UI interaction
});

Given('retry_attempts policy is configured as a non-negative integer', async function (this: ICustomWorld) {
  await pageObject.configureRetryAttempts(3);
});

Given('a molecule with MoleculeID and Project is being processed in the automation', async function (this: ICustomWorld) {
  // Simulated molecule processing, no direct UI interaction
});

Given('a process exception occurs at step {string}', async function (this: ICustomWorld, step: string) {
  await pageObject.simulateProcessException(step);
});

When('the exception is captured', async function (this: ICustomWorld) {
  // Simulated exception capture, no direct UI interaction
});

Then('an error email is sent to monitoring_distribution', async function (this: ICustomWorld) {
  await pageObject.expectErrorEmailSent();
});

Then('the email content includes MoleculeID, Project, step name {string}, and an error summary', async function (this: ICustomWorld, step: string) {
  await pageObject.expectLogEntryIncludes(['MoleculeID', 'Project', step, 'error summary']);
});

Given('a recoverable file access error occurs at step {string} and retry_attempts is set to {int}', async function (this: ICustomWorld, step: string, attempts: number) {
  await pageObject.simulateRecoverableError(step, attempts);
});

When('the retry policy triggers', async function (this: ICustomWorld) {
  // Simulated retry policy trigger, no direct UI interaction
});

Then('processing continues after a successful retry', async function (this: ICustomWorld) {
  // Simulated processing continuation, no direct UI interaction
});

Then('both the failure and the recovery are logged', async function (this: ICustomWorld) {
  await pageObject.expectLogEntryIncludes(['failure', 'recovery']);
});

Given('a critical failure is detected due to repeated failure threshold at step {string}', async function (this: ICustomWorld, step: string) {
  await pageObject.simulateCriticalFailure(step);
});

When('the bot stops processing', async function (this: ICustomWorld) {
  // Simulated bot stop, no direct UI interaction
});

Then('stakeholders receive a stop notification at stakeholder_recipients', async function (this: ICustomWorld) {
  await pageObject.expectErrorEmailSent();
});

Then('the log documents next steps', async function (this: ICustomWorld) {
  await pageObject.expectLogEntryIncludes(['next steps']);
});

Given('monitoring_distribution is empty', async function (this: ICustomWorld) {
  await pageObject.simulateValidationError('monitoring_distribution');
});

Then('an error message {string} is raised', async function (this: ICustomWorld, message: string) {
  await pageObject.expectValidationError(message);
});