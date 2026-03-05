// Page Object: SetUpUserAuthenticationApiPage
import { Page, expect } from '@playwright/test';

/**
 * Page Object for API Authentication
 */
export class SetUpUserAuthenticationApiPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Sends a POST request to the specified API endpoint with the given JSON body.
   * @param endpoint - API endpoint (e.g., "/api/auth/register").
   * @param body - JSON object to send in the request.
   * @returns Response object.
   */
  async sendPostRequest(endpoint: string, body: Record<string, unknown>): Promise<any> {
    const response = await this.page.request.post(endpoint, {
      data: body,
    });
    return response;
  }

  /**
   * Sends a request to a secured endpoint with an Authorization header.
   * @param endpoint - Secured API endpoint.
   * @param token - JWT token for Authorization header.
   * @returns Response object.
   */
  async sendSecuredRequest(endpoint: string, token: string): Promise<any> {
    const response = await this.page.request.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }

  /**
   * Asserts the response status code.
   * @param response - Response object.
   * @param expectedStatus - Expected status code.
   */
  async assertResponseStatus(response: any, expectedStatus: number): Promise<void> {
    expect(response.status()).toBe(expectedStatus);
  }

  /**
   * Asserts the response body contains a specific key-value pair.
   * @param response - Response object.
   * @param key - Key to check in the response body.
   * @param value - Expected value for the key.
   */
  async assertResponseBodyContains(response: any, key: string, value: any): Promise<void> {
    const responseBody = await response.json();
    expect(responseBody[key]).toBe(value);
  }
}