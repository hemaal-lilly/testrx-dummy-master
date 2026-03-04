// Step Definitions
import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { SetUpUserAuthenticationApiPage } from './set-up-user-authentication-api.page';

let apiPage: SetUpUserAuthenticationApiPage;

Given('I send a POST request to {string} with JSON body:', async function (this: ICustomWorld, endpoint: string, dataTable: any) {
  const body = dataTable.rowsHash();
  apiPage = new SetUpUserAuthenticationApiPage(this.request!);
  this.response = await apiPage.sendPostRequest(endpoint, body);
});

Given('I send a request to the secured endpoint with a valid Authorization header', async function (this: ICustomWorld) {
  apiPage = new SetUpUserAuthenticationApiPage(this.request!);
  const token = this.token; // Assume token is stored in the world context
  this.response = await apiPage.sendSecuredRequest('/secured-endpoint', token);
});

Given('I send a request to the secured endpoint without an Authorization header', async function (this: ICustomWorld) {
  apiPage = new SetUpUserAuthenticationApiPage(this.request!);
  this.response = await apiPage.sendSecuredRequest('/secured-endpoint');
});

Then('the API response should have a status code of {int}', async function (this: ICustomWorld, expectedStatus: number) {
  await apiPage.validateStatusCode(this.response!, expectedStatus);
});

Then('the response should include a valid JWT token', async function (this: ICustomWorld) {
  await apiPage.validateJwtToken(this.response!);
});