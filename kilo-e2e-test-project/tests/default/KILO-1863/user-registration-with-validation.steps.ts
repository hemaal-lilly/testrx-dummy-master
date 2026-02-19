// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { UserRegistrationPage } from '../pages/UserRegistrationPage';

let registrationPage: UserRegistrationPage;

Given('I am on the registration page', async function (this: ICustomWorld) {
  registrationPage = new UserRegistrationPage(this.page);
  await registrationPage.navigate();
});

When('I fill in valid registration details', async function (this: ICustomWorld) {
  await registrationPage.fillRegistrationForm('John Doe', 'john.doe@example.com', 'securePassword123');
});

When('I submit the registration form', async function (this: ICustomWorld) {
  await registrationPage.submitForm();
});

Then('I should see a confirmation message', async function (this: ICustomWorld) {
  await registrationPage.expectConfirmationMessage();
});