// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

let playwrightHomePage: PlaywrightHomePage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  playwrightHomePage = new PlaywrightHomePage(this.page);
  await playwrightHomePage.navigateToHome();
});

When('I navigate to the API documentation section', async function (this: ICustomWorld) {
  await playwrightHomePage.navigateToApiDocs();
});

Then('I should see the swagger integration loaded successfully', async function (this: ICustomWorld) {
  await playwrightHomePage.verifySwaggerIntegration();
});