// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { CheckoutPage } from '../pages/CheckoutPage';

let checkoutPage: CheckoutPage;

Given('I am on the checkout page', async function (this: ICustomWorld) {
  checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.navigate();
});

When('I fill in the required details and submit the order', async function (this: ICustomWorld) {
  await checkoutPage.fillCheckoutDetails('John Doe', '123 Main St', 'credit-card');
  await checkoutPage.submitOrder();
});

Then('I should see the order confirmation page', async function (this: ICustomWorld) {
  await checkoutPage.expectOrderConfirmation();
});