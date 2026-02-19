// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { CheckoutProcessPage } from '../pages/CheckoutProcessPage';
import { ICustomWorld } from '../support/world';

let checkoutPage: CheckoutProcessPage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  checkoutPage = new CheckoutProcessPage(this.page);
  await checkoutPage.navigateToHomepage();
});

When('I navigate to the checkout page and complete the order', async function (this: ICustomWorld) {
  await checkoutPage.completeOrder();
});

Then('I should see the order confirmation page', async function (this: ICustomWorld) {
  await checkoutPage.expectOrderConfirmation();
});