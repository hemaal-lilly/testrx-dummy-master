// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { AutomatedLoginTestWithXrayIntegrationPage } from '../pages/AutomatedLoginTestWithXrayIntegrationPage';

let pageObject: AutomatedLoginTestWithXrayIntegrationPage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new AutomatedLoginTestWithXrayIntegrationPage(this.page);
  await pageObject.navigateToHome();
});

When('I navigate to the login page and enter valid credentials', async function (this: ICustomWorld) {
  await pageObject.navigateToLoginPage();
  await pageObject.fillLoginCredentials('test@example.com', 'securePassword123');
  await pageObject.submitLogin();
});

Then('I should be successfully logged in', async function (this: ICustomWorld) {
  await pageObject.expectSuccessfulLogin();
});