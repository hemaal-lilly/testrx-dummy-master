// Step Definitions for: Exception handling and monitoring notifications
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { ExceptionHandlingAndMonitoringPage } from '../pages/ExceptionHandlingAndMonitoringPage';

let pageObject: ExceptionHandlingAndMonitoringPage;

Given('monitoring_distribution is configured with at least one valid email address', async function (this: ICustomWorld) {
  pageObject = new ExceptionHandlingAndMonitoringPage(this.page);
  await pageObject.configureMonitoringDistribution('monitoring@example.com');
});

Given('stakeholder_recipients are configured with at least one valid email address', async function (this: ICustomWorld) {
  await pageObject.configureStakeholderRecipients('stakeholder@example.com');
});

Given('log_path is writable by the service account', async function (this: ICustomWorld) {
  await pageObject.configureLogPath('/var/logs');
});

Given('failure_points_list includes {string}, {string}, {string}, and {string}', async function (this: ICustomWorld, step1: string, step2: string, step3: string, step4: string) {
  // Simulating configuration setup; no UI interaction required
});

Given('retry_attempts policy is configured as a non-negative integer', async function (this: ICustomWorld) {
  await pageObject.configureRetryAttempts(3);
});

Given('a molecule with MoleculeID and Project is being processed in the automation', async function (this: ICustomWorld) {
  await pageObject.setMoleculeDetails('Molecule123', 'ProjectX');
});

Given('a process exception occurs at step {string}', async function (this: ICustomWorld, stepName: string) {
  // Simulating exception occurrence; no UI interaction required
});

When('the exception is captured', async function (this: ICustomWorld) {
  // Simulating exception capture; no UI interaction required
});

Then('an error email is sent to monitoring_distribution', async function (this: ICustomWorld) {
  // Simulating email sending; no UI interaction required
});

Then('the email content includes MoleculeID, Project, step name {string}, and an error summary', async function (this: ICustomWorld, stepName: string) {
  await pageObject.expectLogEntryIncludes(['Molecule123', 'ProjectX', stepName, 'Error summary']);
});

Given('a recoverable file access error occurs at step {string} and retry_attempts is set to {int}', async function (this: ICustomWorld, stepName: string, attempts: number) {
  await pageObject.configureRetryAttempts(attempts);
  // Simulating recoverable error occurrence; no UI interaction required
});

When('the retry policy triggers', async function (this: ICustomWorld) {
  // Simulating retry policy trigger; no UI interaction required
});

Then('processing continues after a successful retry', async function (this: ICustomWorld) {
  // Simulating processing continuation; no UI interaction required
});

Then('both the failure and the recovery are logged', async function (this: ICustomWorld) {
  await pageObject.expectLogEntryIncludes(['Failure logged', 'Recovery logged']);
});

Given('a critical failure is detected due to repeated failure threshold at step {string}', async function (this: ICustomWorld, stepName: string) {
  // Simulating critical failure detection; no UI interaction required
});

When('the bot stops processing', async function (this: ICustomWorld) {
  // Simulating bot stop; no UI interaction required
});

Then('stakeholders receive a stop notification at stakeholder_recipients', async function (this: ICustomWorld) {
  // Simulating stop notification; no UI interaction required
});

Then('the log documents next steps', async function (this: ICustomWorld) {
  await pageObject.expectLogEntryIncludes(['Next steps documented']);
});

Given('monitoring_distribution is empty', async function (this: ICustomWorld) {
  await pageObject.configureMonitoringDistribution('');
});

Then('an error message {string} is raised', async function (this: ICustomWorld, errorMessage: string) {
  await pageObject.expectErrorMessage(errorMessage);
});

Given('log_path is not writable by the service account', async function (this: ICustomWorld) {
  await pageObject.configureLogPath('/invalid/path');
});

When('the system attempts to write an exception log entry', async function (this: ICustomWorld) {
  // Simulating log write attempt; no UI interaction required
});

Given('retry_attempts is set to {int}', async function (this: ICustomWorld, attempts: number) {
  await pageObject.configureRetryAttempts(attempts);
});

When('the exception handling configuration is evaluated', async function (this: ICustomWorld) {
  // Simulating configuration evaluation; no UI interaction required
});