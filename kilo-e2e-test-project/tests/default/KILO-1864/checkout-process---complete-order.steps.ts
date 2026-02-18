// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ICustomWorld } from '../support/world';

let checkoutPage: CheckoutPage;

Given('I am on the checkout page', async function (this: ICustomWorld) {
  checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.navigate();
});

When('I complete the order process', async function (this: ICustomWorld) {
  await checkoutPage.fillShippingAddress('123 Main Street, Springfield');
  await checkoutPage.selectPaymentMethod('credit-card');
  await checkoutPage.clickCheckoutButton();
  await checkoutPage.placeOrder();
});

Then('I should see the order confirmation page', async function (this: ICustomWorld) {
  await checkoutPage.expectOrderConfirmation();
});