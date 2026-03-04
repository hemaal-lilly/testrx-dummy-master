// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../../../support/world';
import { SetUpUserAuthenticationApiPage } from './set-up-user-authentication-api.page';

let pageObject: SetUpUserAuthenticationApiPage;

Given('I have a valid JWT', async function (this: ICustomWorld) {
  const request = this.request!;
  pageObject = new SetUpUserAuthenticationApiPage(request);

  const response = await pageObject.sendPostRequest('/api/auth/login', {
    email: 'carol.login@example.com',
    password: 'ValidPass!234',
  });

  const responseBody = await response.json();
  this.jwt = responseBody.token;
});

When(
  'I send a POST request to {string} with body:',
  async function (this: ICustomWorld, endpoint: string, table: any) {
    const request = this.request!;
    pageObject = new SetUpUserAuthenticationApiPage(request);

    const body = table.rowsHash();
    const response = await pageObject.sendPostRequest(endpoint, body);
    this.response = response;
  }
);

When(
  'I send a GET request to {string} with Authorization header',
  async function (this: ICustomWorld, endpoint: string) {
    const request = this.request!;
    pageObject = new SetUpUserAuthenticationApiPage(request);

    const response = await pageObject.sendGetRequest(endpoint, {
      Authorization: `Bearer ${this.jwt}`,
    });
    this.response = response;
  }
);

When(
  'I send a GET request to {string} without Authorization header',
  async function (this: ICustomWorld, endpoint: string) {
    const request = this.request!;
    pageObject = new SetUpUserAuthenticationApiPage(request);

    const response = await pageObject.sendGetRequest(endpoint);
    this.response = response;
  }
);

Then(
  'I should receive a {int} status code',
  async function (this: ICustomWorld, expectedStatusCode: number) {
    const response = this.response!;
    await pageObject.validateStatusCode(response, expectedStatusCode);
  }
);