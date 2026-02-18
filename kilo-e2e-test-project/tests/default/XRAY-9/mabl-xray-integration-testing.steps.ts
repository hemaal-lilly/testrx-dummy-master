// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { MablXrayIntegrationTestingPage } from '../pages/MablXrayIntegrationTestingPage';

let pageObject: MablXrayIntegrationTestingPage;

Given('I set the viewport size to 1080x1440', async function (this: ICustomWorld) {
  pageObject = new MablXrayIntegrationTestingPage(this.page);
  await pageObject.setViewportSize();
});

Given('I navigate to the application URL', async function (this: ICustomWorld) {
  const appUrl = this.parameters.app.url; // Assuming app.url is passed via configuration
  await pageObject.navigateToApp(appUrl);
});

When('I log in with valid credentials', async function (this: ICustomWorld) {
  const email = 'aso_marketplace@elililly.onmicrosoft.com';
  const password = 'your_password'; // Replace with a secure password management solution
  await pageObject.login(email, password);
});

When('I navigate through the application sections', async function (this: ICustomWorld) {
  await pageObject.navigateSections();
});

Then('I should see the brand logo with alt text "Brand Logo"', async function (this: ICustomWorld) {
  await pageObject.verifyBrandLogo();
});