// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { UserAuthenticationApiPage } from '../pages/UserAuthenticationApiPage';

let apiPage: UserAuthenticationApiPage;

Given('I have a valid JWT token', async function (this: ICustomWorld) {
  apiPage = new UserAuthenticationApiPage(this.request!);
  const response = await apiPage.postRequest('/api/auth/login', {
    email: 'carol.login@example.com',
    password: 'ValidPass!234',
  });
  const responseBody = await response.json();
  this.jwtToken = responseBody.token;
});

When('I send a POST request to {string} with body:', async function (endpoint: string, body: Record<string, any>) {
  apiPage = new UserAuthenticationApiPage(this.request!);
  this.response = await apiPage.postRequest(endpoint, body);
});

When('I send a GET request to {string} with the Authorization header', async function (endpoint: string) {
  apiPage = new UserAuthenticationApiPage(this.request!);
  this.response = await apiPage.getRequest(endpoint, {
    Authorization: `Bearer ${this.jwtToken}`,
  });
});

When('I send a GET request to {string} without the Authorization header', async function (endpoint: string) {
  apiPage = new UserAuthenticationApiPage(this.request!);
  this.response = await apiPage.getRequest(endpoint);
});

When('I send a GET request to {string} with an invalid Authorization token', async function (endpoint: string) {
  apiPage = new UserAuthenticationApiPage(this.request!);
  this.response = await apiPage.getRequest(endpoint, {
    Authorization: 'Bearer invalid-token',
  });
});

Then('I should receive a {int} status code with a success message', async function (expectedStatus: number) {
  await apiPage.validateResponseStatus(this.response, expectedStatus);
  const responseBody = await this.response.json();
  expect(responseBody).toHaveProperty('message', 'Success');
});

Then('I should receive a {int} status code with a valid JWT token', async function (expectedStatus: number) {
  await apiPage.validateResponseStatus(this.response, expectedStatus);
  const responseBody = await this.response.json();
  expect(responseBody).toHaveProperty('token');
});

Then('I should receive a {int} status code with an error message', async function (expectedStatus: number) {
  await apiPage.validateResponseStatus(this.response, expectedStatus);
  const responseBody = await this.response.json();
  expect(responseBody).toHaveProperty('error');
});