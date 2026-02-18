// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { PlaywrightLoginPage } from '../pages/PlaywrightLoginPage';

let loginPage: PlaywrightLoginPage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  loginPage = new PlaywrightLoginPage(this.page);
  await loginPage.navigateToHomepage();
});

When('I navigate to the login page and enter valid credentials', async function (this: ICustomWorld) {
  await loginPage.navigateToLoginPage();
  await loginPage.fillLoginCredentials('test@example.com', 'securePassword123');
  await loginPage.submitLoginForm();
});

Then('I should be successfully logged in', async function (this: ICustomWorld) {
  await loginPage.expectSuccessfulLogin();
});