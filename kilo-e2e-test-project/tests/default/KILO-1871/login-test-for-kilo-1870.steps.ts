// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { PlaywrightLoginPage } from '../pages/PlaywrightLoginPage';
import { ICustomWorld } from '../support/world';

let pageObject: PlaywrightLoginPage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new PlaywrightLoginPage(this.page);
  await pageObject.navigateToHomepage();
});

When('I navigate to the login page and enter valid credentials', async function (this: ICustomWorld) {
  await pageObject.navigateToLoginPage();
  await pageObject.fillLoginCredentials('test@example.com', 'securePassword123');
  await pageObject.submitLogin();
});

Then('I should be successfully logged in', async function (this: ICustomWorld) {
  await pageObject.expectSuccessfulLogin();
});