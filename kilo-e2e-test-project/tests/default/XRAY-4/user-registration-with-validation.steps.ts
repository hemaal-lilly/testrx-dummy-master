// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { UserRegistrationWithValidationPage } from '../pages/UserRegistrationWithValidationPage';

let pageObject: UserRegistrationWithValidationPage;

Given('I am on the registration page', async function (this: ICustomWorld) {
  pageObject = new UserRegistrationWithValidationPage(this.page);
  await pageObject.navigate();
});

When('I fill in the registration form with valid data', async function (this: ICustomWorld) {
  await pageObject.fillRegistrationForm('test@example.com', 'Password123!', 'Password123!');
});

When('I submit the registration form', async function (this: ICustomWorld) {
  await pageObject.submitForm();
});

Then('I should see a success message', async function (this: ICustomWorld) {
  await pageObject.expectSuccessMessage();
});