// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { UserAuthenticationApiPage } from '../pages/UserAuthenticationApiPage';

let apiPage: UserAuthenticationApiPage;

Given('I have a valid registration payload', async function (this: ICustomWorld) {
  apiPage = new UserAuthenticationApiPage(this.request);
  this.payload = { name: 'Alice Example', email: 'alice.unique@example.com', password: 'P@ssw0rd123' };
});

When('I send a POST request to "/api/auth/register"', async function (this: ICustomWorld) {
  this.response = await apiPage.registerUser(this.payload);
});

Then('I should receive a successful response', async function (this: ICustomWorld) {
  const responseBody = await this.response.json();
  expect(responseBody).toHaveProperty('id');
  expect(responseBody).toHaveProperty('email', this.payload.email);
});

Given('I have valid login credentials', async function (this: ICustomWorld) {
  this.payload = { email: 'carol.login@example.com', password: 'ValidPass!234' };
});

When('I send a POST request to "/api/auth/login"', async function (this: ICustomWorld) {
  this.response = await apiPage.loginUser(this.payload);
});

Then('I should receive a valid JWT token in the response', async function (this: ICustomWorld) {
  const responseBody = await this.response.json();
  expect(responseBody).toHaveProperty('token');
});

Given('I have a valid JWT token', async function (this: ICustomWorld) {
  const loginResponse = await apiPage.loginUser({ email: 'carol.login@example.com', password: 'ValidPass!234' });
  const responseBody = await loginResponse.json();
  this.token = responseBody.token;
});

When('I send a GET request to the secured endpoint with the Authorization header', async function (this: ICustomWorld) {
  this.response = await apiPage.accessSecuredEndpoint(this.token);
});

Then('I should receive a successful response', async function (this: ICustomWorld) {
  expect(this.response.status()).toBe(200);
});

Given('I do not provide an Authorization header', async function (this: ICustomWorld) {
  // No setup required
});

When('I send a GET request to the secured endpoint', async function (this: ICustomWorld) {
  this.response = await apiPage.accessSecuredEndpointWithoutToken();
});

Then('I should receive an unauthorized response', async function (this: ICustomWorld) {
  expect(this.response.status()).toBe(401);
});