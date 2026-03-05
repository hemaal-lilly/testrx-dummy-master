// Step Definitions
import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { SetUpUserAuthenticationApiPage } from './set-up-user-authentication-api.page';
import { getCredential } from '../../../utils/common';

let pageObject: SetUpUserAuthenticationApiPage;

Given('I send a POST request to {string} with JSON body:', async function (this: ICustomWorld, endpoint: string, table: any) {
  const payload = table.rowsHash();
  pageObject = new SetUpUserAuthenticationApiPage(this.request);
  if (endpoint === '/api/auth/register') {
    await pageObject.registerUser(payload);
  } else if (endpoint === '/api/auth/login') {
    await pageObject.loginUser(payload);
  }
});

Given('I send a GET request to {string} with Authorization header containing a valid JWT', async function (this: ICustomWorld, endpoint: string) {
  const token = getCredential('API_TOKEN');
  pageObject = new SetUpUserAuthenticationApiPage(this.request);
  await pageObject.accessSecuredEndpoint(token);
});

Given('I send a GET request to {string} without Authorization header', async function (this: ICustomWorld, endpoint: string) {
  pageObject = new SetUpUserAuthenticationApiPage(this.request);
  await pageObject.accessSecuredEndpointWithoutAuth();
});

Given('I send a GET request to {string} with Authorization header containing an invalid JWT', async function (this: ICustomWorld, endpoint: string) {
  const invalidToken = 'invalid.jwt.token';
  pageObject = new SetUpUserAuthenticationApiPage(this.request);
  await pageObject.accessSecuredEndpointWithInvalidToken(invalidToken);
});

Then('I should see a successful response with status code {int}', async function (this: ICustomWorld, statusCode: number) {
  const response = this.response;
  expect(response.status()).toBe(statusCode);
});

Then('I should see an error response with status code {int}', async function (this: ICustomWorld, statusCode: number) {
  const response = this.response;
  expect(response.status()).toBe(statusCode);
});