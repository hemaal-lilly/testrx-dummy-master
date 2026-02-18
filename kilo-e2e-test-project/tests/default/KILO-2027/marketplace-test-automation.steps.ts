// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { MarketplaceTestAutomationPage } from '../pages/MarketplaceTestAutomationPage';

let pageObject: MarketplaceTestAutomationPage;

Given('I set the viewport size to 1000x800', async function (this: ICustomWorld) {
  pageObject = new MarketplaceTestAutomationPage(this.page);
  await pageObject.setViewportSize();
});

Given('I navigate to the application URL', async function (this: ICustomWorld) {
  const appUrl = this.parameters.app.url;
  await pageObject.navigateToApp(appUrl);
});

When('I enter the username into the email field', async function (this: ICustomWorld) {
  const username = this.parameters.app.defaults.username;
  await pageObject.fillEmail(username);
});

When('I click the Next button', async function (this: ICustomWorld) {
  await pageObject.clickNext();
});

When('I enter the password into the password field', async function (this: ICustomWorld) {
  const password = this.parameters.app.defaults.password;
  await pageObject.fillPassword(password);
});

When('I click the Sign in button', async function (this: ICustomWorld) {
  await pageObject.clickSignIn();
});

When('I select the "Test Automation" option from the dropdown', async function (this: ICustomWorld) {
  await pageObject.selectTestAutomation();
});

Then('I should see the correct "Test Automation" description', async function (this: ICustomWorld) {
  await pageObject.assertTestAutomationDescription();
});

Then('I should see the correct links and their href values', async function (this: ICustomWorld) {
  await pageObject.assertTestAutomationLinkHref('https://collab.lilly.com/sites/Enterp...');
  await pageObject.assertCommunityOfPracticeLinkHref('https://engage.cloud.microsoft/main/g...');
});

Then('I should see the correct blockquote text', async function (this: ICustomWorld) {
  await pageObject.assertBlockquoteText('"Creating a cycle of automation innov...');
});

Then('I should see the "Contact Us" link with the correct mailto href', async function (this: ICustomWorld) {
  await pageObject.assertContactUsLinkHref('mailto:aso_brm@lists.lilly.com');
});

Then('I should see the image with the class "lds-image"', async function (this: ICustomWorld) {
  await pageObject.assertImagePresence();
});