// Step Definitions
import { Given, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/world';
import { UserAuthenticationApiPage } from '../pages/UserAuthenticationApiPage';

let apiPage: UserAuthenticationApiPage;

Given('I send a POST request to "/api/auth/register" with JSON body containing name, email, and password', async function (this: ICustomWorld) {
  apiPage = new UserAuthenticationApiPage(this.request);
  await apiPage.registerUser({
    name: 'Alice Example',
    email: 'alice.unique@example.com',
    password: 'P@ssw0rd123',
  });
});

Given('I send a POST request to "/api/auth/login" with JSON body containing email and password', async function (this: ICustomWorld) {
  apiPage = new UserAuthenticationApiPage(this.request);
  const token = await apiPage.loginUser({
    email: 'carol.login@example.com',
    password: 'ValidPass!234',
  });
  this.token = token; // Save token for later use
});

Given('I send a GET request to a secured endpoint with a valid Authorization header', async function (this: ICustomWorld) {
  apiPage = new UserAuthenticationApiPage(this.request);
  await apiPage.accessSecuredEndpoint(this.token);
});

Given('I send a POST request to "/api/auth/register" with JSON body containing name, duplicate email, and password', async function (this: ICustomWorld) {
  apiPage = new UserAuthenticationApiPage(this.request);
  await apiPage.registerDuplicateEmail({
    name: 'Ellen Duplicate',
    email: 'ellen.dup@example.com',
    password: 'DuplicatePass123!',
  });
});

Given('I send a POST request to "/api/auth/login" with JSON body containing correct email and incorrect password', async function (this: ICustomWorld) {
  apiPage = new UserAuthenticationApiPage(this.request);
  await apiPage.loginIncorrectPassword({
    email: 'dave.user@example.com',
    password: 'WrongPass123!',
  });
});

Then('I should see a successful response with status code 201', async function () {
  // Assertion is handled in the Page Object
});

Then('I should see a successful response with a valid JWT token', async function () {
  // Assertion is handled in the Page Object
});

Then('I should see a successful response', async function () {
  // Assertion is handled in the Page Object
});

Then('I should see an error response with status code 409', async function () {
  // Assertion is handled in the Page Object
});

Then('I should see an error response with status code 401', async function () {
  // Assertion is handled in the Page Object
});