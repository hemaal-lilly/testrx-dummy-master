// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { PlaywrightLoginPage } from '../pages/PlaywrightLoginPage';
import { ICustomWorld } from '../support/world';

let loginPage: PlaywrightLoginPage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  loginPage = new PlaywrightLoginPage(this.page);
  await loginPage.navigateToHomepage();
});

When('I navigate to the login page and enter valid credentials', async function (this: ICustomWorld) {
  await loginPage.navigateToLoginPage();
  await loginPage.fillCredentials('test@example.com', 'password123');
  await loginPage.submitLogin();
});

Then('I should be successfully logged in', async function (this: ICustomWorld) {
  await loginPage.expectSuccessfulLogin();
});