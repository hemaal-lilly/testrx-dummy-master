// Step Definitions
import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { ApiHelper } from '../helpers/ApiHelper';

let apiHelper: ApiHelper;

Given('I send a POST request to {string} with JSON body:', async function (this: ICustomWorld, endpoint: string, dataTable: any) {
  const body = dataTable.rowsHash();
  apiHelper = new ApiHelper(this.request!);
  this.response = await apiHelper.postRequest(endpoint, body);
});

Given('I send a GET request to {string} with Authorization header set to a valid JWT', async function (this: ICustomWorld, endpoint: string) {
  const validToken = 'your-valid-jwt-token'; // Replace with a valid token
  apiHelper = new ApiHelper(this.request!);
  this.response = await apiHelper.getRequest(endpoint, {
    Authorization: `Bearer ${validToken}`,
  });
});

Then('I should receive a {int} status code', async function (this: ICustomWorld, expectedStatus: number) {
  await apiHelper.validateStatusCode(this.response!, expectedStatus);
});

Then('the response should contain {string}', async function (this: ICustomWorld, field: string) {
  await apiHelper.validateResponseField(this.response!, field);
});