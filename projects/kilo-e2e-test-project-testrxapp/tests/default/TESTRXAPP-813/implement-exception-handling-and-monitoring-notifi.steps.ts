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
  await pageObject.configureLogPath('/var/logs/service.log');
});

Given('failure_points_list includes {string}', async function (this: ICustomWorld, steps: string) {
  const stepsArray = steps.split(', ');
  for (const step of stepsArray) {
    await expect(pageObject.page.locator(`[data-testid="failure-point-${step}"]`)).toBeVisible();
  }
});

Given('retry_attempts policy is configured as a non-negative integer', async function (this: ICustomWorld) {
  await pageObject.configureRetryAttempts(3);
});

Given('a molecule with MoleculeID {string} and Project {string} is being processed in the automation', async function (this: ICustomWorld, moleculeID: string, project: string) {
  await pageObject.processMolecule(moleculeID, project);
});

Given('a process exception occurs at step {string}', async function (this: ICustomWorld, stepName: string) {
  await pageObject.captureException(stepName);
});

When('the exception is captured', async function (this: ICustomWorld) {
  await expect(pageObject.errorNotification).toBeVisible();
});

Then('an error email is sent to monitoring_distribution', async function (this: ICustomWorld) {
  await expect(pageObject.page.locator('[data-testid="email-sent"]')).toBeVisible();
});

Then('the email content includes MoleculeID, Project, step name {string}, and an error summary', async function (this: ICustomWorld, stepName: string) {
  const emailContent = await pageObject.page.locator('[data-testid="email-content"]').textContent();
  expect(emailContent).toContain(stepName);
});

Given('a recoverable file access error occurs at step {string} and retry_attempts is set to {int}', async function (this: ICustomWorld, stepName: string, attempts: number) {
  await pageObject.configureRetryAttempts(attempts);
  await pageObject.captureException(stepName);
});

When('the retry policy triggers', async function (this: ICustomWorld) {
  await pageObject.triggerRetryPolicy();
});

Then('processing continues after a successful retry', async function (this: ICustomWorld) {
  await expect(pageObject.page.locator('[data-testid="processing-continued"]')).toBeVisible();
});

Then('both the failure and the recovery are logged', async function (this: ICustomWorld) {
  await pageObject.validateLogEntry();
});

Given('monitoring_distribution is empty', async function (this: ICustomWorld) {
  await pageObject.configureMonitoringDistribution('');
});

When('an exception is captured', async function (this: ICustomWorld) {
  await pageObject.captureException('CPCA');
});

Then('an error message {string} is raised', async function (this: ICustomWorld, errorMessage: string) {
  const errorText = await pageObject.page.locator('[data-testid="error-message"]').textContent();
  expect(errorText).toContain(errorMessage);
});