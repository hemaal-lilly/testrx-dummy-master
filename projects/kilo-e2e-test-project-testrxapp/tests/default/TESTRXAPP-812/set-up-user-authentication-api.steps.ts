// Step Definitions
import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { AuthenticationApiPage } from './set-up-user-authentication-api.page';

let apiPage: AuthenticationApiPage;

Given(
  'I send a POST request to {string} with JSON body:',
  async function (this: ICustomWorld, endpoint: string, bodyTable: any) {
    const body = bodyTable.rowsHash();
    apiPage = new AuthenticationApiPage(this.request!);
    this.response = await apiPage.postRequest(endpoint, body);
  }
);

Given(
  'I send a GET request to {string} with Authorization header:',
  async function (this: ICustomWorld, endpoint: string, headerTable: any) {
    const headers = headerTable.rowsHash();
    apiPage = new AuthenticationApiPage(this.request!);
    this.response = await apiPage.getRequest(endpoint, headers);
  }
);

Given(
  'I send a GET request to {string} without Authorization header',
  async function (this: ICustomWorld, endpoint: string) {
    apiPage = new AuthenticationApiPage(this.request!);
    this.response = await apiPage.getRequest(endpoint);
  }
);

Then(
  'I should receive a {int} status code and a {string}',
  async function (this: ICustomWorld, expectedStatus: number, expectedMessage: string) {
    await apiPage.validateResponse(this.response!, expectedStatus, expectedMessage);
  }
);

Then(
  'I should receive a {int} status code',
  async function (this: ICustomWorld, expectedStatus: number) {
    await apiPage.validateResponse(this.response!, expectedStatus);
  }
);