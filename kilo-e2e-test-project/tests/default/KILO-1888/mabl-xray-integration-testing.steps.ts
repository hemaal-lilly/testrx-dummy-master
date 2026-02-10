// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { MablXrayIntegrationTestingPage } from '../pages/MablXrayIntegrationTestingPage';

let pageObject: MablXrayIntegrationTestingPage;

Given('I set the viewport size to {int}x{int}', async function (this: ICustomWorld, width: number, height: number) {
  pageObject = new MablXrayIntegrationTestingPage(this.page);
  await pageObject.setViewportSize(width, height);
});

Given('I navigate to the application URL', async function (this: ICustomWorld) {
  const appUrl = this.parameters.app.url;
  await pageObject.navigateToApp(appUrl);
});

When('I enter {string} in the email field', async function (this: ICustomWorld, email: string) {
  await pageObject.fillEmail(email);
});

When('I click the login button', async function (this: ICustomWorld) {
  await pageObject.clickLoginButton();
});

When('I enter the password in the password field', async function (this: ICustomWorld) {
  const password = this.parameters.app.password;
  await pageObject.fillPassword(password);
});

When('I navigate through the Intelligent Automation menu', async function (this: ICustomWorld) {
  await pageObject.navigateMenu(pageObject.intelligentAutomationMenu);
});

When('I navigate through the Test Automation menu', async function (this: ICustomWorld) {
  await pageObject.navigateMenu(pageObject.testAutomationMenu);
});

When('I navigate through the Document Processing menu', async function (this: ICustomWorld) {
  await pageObject.navigateMenu(pageObject.documentProcessingMenu);
});

When('I navigate through the Content Automation menu', async function (this: ICustomWorld) {
  await pageObject.navigateMenu(pageObject.contentAutomationMenu);
});

When('I navigate through the Process Optimization menu', async function (this: ICustomWorld) {
  await pageObject.navigateMenu(pageObject.processOptimizationMenu);
});

When('I navigate to the Marketplace section', async function (this: ICustomWorld) {
  await pageObject.navigateMenu(pageObject.marketplaceMenu);
});

When('I navigate to the TechZone section', async function (this: ICustomWorld) {
  await pageObject.navigateMenu(pageObject.techZoneMenu);
});

When('I navigate to the Home section', async function (this: ICustomWorld) {
  await pageObject.navigateMenu(pageObject.homeMenu);
});

Then('I should see the brand logo with alt text {string}', async function (this: ICustomWorld, expectedAltText: string) {
  await pageObject.assertBrandLogoAltText(expectedAltText);
});