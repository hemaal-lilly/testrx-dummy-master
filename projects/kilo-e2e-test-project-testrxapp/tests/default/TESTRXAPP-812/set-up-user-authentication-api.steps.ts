// Step Definitions
import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { SetUpUserAuthenticationApiPage } from './set-up-user-authentication-api.page';

let apiPage: SetUpUserAuthenticationApiPage;

Given(
  'I send a POST request to {string} with JSON body:',
  async function (this: ICustomWorld, endpoint: string, body: any) {
    apiPage = new SetUpUserAuthenticationApiPage(this.request);
    this.response = await apiPage.sendPostRequest(endpoint, JSON.parse(body));
  }
);

Given(
  'I send a GET request to the secured endpoint without an Authorization header',
  async function (this: ICustomWorld) {
    apiPage = new SetUpUserAuthenticationApiPage(this.request);
    this.response = await apiPage.sendGetRequest('/secured-endpoint');
  }
);

Then(
  'I should receive a {int} status code',
  async function (this: ICustomWorld, expectedStatus: number) {
    await apiPage.expectStatusCode(this.response, expectedStatus);
  }
);

Then(
  'the response should contain a {string} message',
  async function (this: ICustomWorld, key: string) {
    const responseBody = await this.response.json();
    expect(responseBody.message).toBe(key);
  }
);

Then(
  'the response should contain a valid JWT token',
  async function (this: ICustomWorld) {
    await apiPage.expectJwtToken(this.response);
  }
);