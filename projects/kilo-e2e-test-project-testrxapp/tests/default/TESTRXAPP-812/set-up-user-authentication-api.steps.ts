// Step Definitions
import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { AuthenticationApiPage } from '../pages/AuthenticationApiPage';

let apiPage: AuthenticationApiPage;

Given('I send a POST request to "/api/auth/register" with valid JSON body', async function (this: ICustomWorld) {
  apiPage = new AuthenticationApiPage(this.request);
  const response = await apiPage.registerUser({
    name: 'Alice Example',
    email: 'alice.unique@example.com',
    password: 'P@ssw0rd123',
  });
  expect(response).toHaveProperty('id');
  expect(response).toHaveProperty('email', 'alice.unique@example.com');
});

Then('I should receive a successful response with user details', async function () {
  // Assertion is already handled in the step above.
});

Given('I send a POST request to "/api/auth/login" with valid JSON body', async function (this: ICustomWorld) {
  const response = await apiPage.loginUser({
    email: 'carol.login@example.com',
    password: 'ValidPass!234',
  });
  expect(response).toHaveProperty('token');
});

Then('I should receive a successful response with a JWT token', async function () {
  // Assertion is already handled in the step above.
});

Given('I send a request to a secured endpoint with a valid Authorization header', async function (this: ICustomWorld) {
  const token = 'valid.jwt.token';
  const response = await apiPage.accessSecuredEndpoint(token);
  expect(response).toHaveProperty('data');
});

Then('I should receive a successful response', async function () {
  // Assertion is already handled in the step above.
});

Given('I send a POST request to "/api/auth/login" with valid email and incorrect password', async function (this: ICustomWorld) {
  const response = await apiPage.loginUser({
    email: 'dave.user@example.com',
    password: 'WrongPassword123',
  });
  expect(response.status).toBe(401); // Unauthorized
});

Then('I should receive an error response', async function () {
  // Assertion is already handled in the step above.
});