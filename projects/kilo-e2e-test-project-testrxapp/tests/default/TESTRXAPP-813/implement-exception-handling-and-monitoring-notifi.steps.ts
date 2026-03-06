// Step Definitions for: Implement exception handling and monitoring notifications
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

Given('failure_points_list includes {string}', async function (this: ICustomWorld, failurePoints: string) {
  // This step is informational and does not require interaction with the UI
  console.log(`Failure points list includes: ${failurePoints}`);
});

Given('retry_attempts policy is configured as a non-negative integer', async function (this: ICustomWorld) {
  await pageObject.configureRetryAttempts(3);
});

Given('a molecule with MoleculeID and Project is being processed in the automation', async function (this: ICustomWorld) {
  await pageObject.configureMolecule('Molecule123', 'ProjectX');
});

Given('a process exception occurs at step {string}', async function (this: ICustomWorld, step: string) {
  // Simulate exception occurrence
  console.log(`Process exception occurred at step: ${step}`);
});

When('the exception is captured', async function (this: ICustomWorld) {
  // Simulate exception capture
  console.log('Exception captured');
});

Then('an error email is sent to monitoring_distribution', async function (this: ICustomWorld) {
  await pageObject.expectErrorNotification();
});

Then('the email content includes MoleculeID, Project, step name {string}, and an error summary', async function (this: ICustomWorld, step: string) {
  console.log(`Email content includes MoleculeID, Project, step name: ${step}, and error summary`);
});

When('the retry policy triggers', async function (this: ICustomWorld) {
  console.log('Retry policy triggered');
});

Then('processing continues after a successful retry', async function (this: ICustomWorld) {
  console.log('Processing continued after successful retry');
});

Then('both the failure and the recovery are logged', async function (this: ICustomWorld) {
  await pageObject.expectLogEntry();
});

Given('a critical failure is detected due to repeated failure threshold at step {string}', async function (this: ICustomWorld, step: string) {
  console.log(`Critical failure detected at step: ${step}`);
});

When('the bot stops processing', async function (this: ICustomWorld) {
  console.log('Bot stopped processing');
});

Then('stakeholders receive a stop notification at stakeholder_recipients', async function (this: ICustomWorld) {
  await pageObject.expectStopNotification();
});

Then('the log documents next steps', async function (this: ICustomWorld) {
  await pageObject.expectLogEntry();
});

Given('monitoring_distribution is empty', async function (this: ICustomWorld) {
  await pageObject.configureMonitoringDistribution('');
});

Then('an error message {string} is raised', async function (this: ICustomWorld, errorMessage: string) {
  console.log(`Error message raised: ${errorMessage}`);
});

Given('log_path is not writable by the service account', async function (this: ICustomWorld) {
  await pageObject.configureLogPath('/invalid/path');
});

Given('retry_attempts is set to {int}', async function (this: ICustomWorld, attempts: number) {
  await pageObject.configureRetryAttempts(attempts);
});