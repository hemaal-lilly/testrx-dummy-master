// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';
import { ICustomWorld } from '../support/world';

let playwrightHomePage: PlaywrightHomePage;

Given('I navigate to the Playwright homepage', async function (this: ICustomWorld) {
  playwrightHomePage = new PlaywrightHomePage(this.page);
  await playwrightHomePage.navigate();
});

When('I perform the login action', async function (this: ICustomWorld) {
  const email = 'test@example.com';
  const password = 'password123'; // Replace with actual test credentials
  await playwrightHomePage.fillLoginForm(email, password);
  await playwrightHomePage.submitLogin();
});

Then('I should see the successful login result', async function (this: ICustomWorld) {
  await playwrightHomePage.expectLoginSuccess();
});