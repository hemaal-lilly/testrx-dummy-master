// Step Definitions
import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { SetUpUserAuthenticationApiPage } from './set-up-user-authentication-api.page';

let apiPage: SetUpUserAuthenticationApiPage;

Given(
  'I send a POST request to {string} with JSON body containing {string}, {string}, and {string}',
  async function (this: ICustomWorld, endpoint: string, name: string, email: string, password: string) {
    apiPage = new SetUpUserAuthenticationApiPage(this.page);
    const response = await apiPage.sendPostRequest(endpoint, { name, email, password });
    this.response = response;
  }
);

Given(
  'I send a POST request to {string} with JSON body containing {string} and {string}',
  async function (this: ICustomWorld, endpoint: string, email: string, password: string) {
    apiPage = new SetUpUserAuthenticationApiPage(this.page);
    const response = await apiPage.sendPostRequest(endpoint, { email, password });
    this.response = response;
  }
);

Given(
  'I send a request to the secured endpoint with Authorization header containing {string}',
  async function (this: ICustomWorld, token: string) {
    apiPage = new SetUpUserAuthenticationApiPage(this.page);
    const response = await apiPage.sendSecuredRequest('/secured-endpoint', token);
    this.response = response;
  }
);

Then(
  'I should receive a successful response',
  async function (this: ICustomWorld) {
    await apiPage.assertResponseStatus(this.response, 200);
  }
);

Then(
  'I should receive an error response',
  async function (this: ICustomWorld) {
    await apiPage.assertResponseStatus(this.response, 400);
  }
);

Then(
  'I should receive a valid JWT in the response',
  async function (this: ICustomWorld) {
    await apiPage.assertResponseBodyContains(this.response, 'token', expect.any(String));
  }
);