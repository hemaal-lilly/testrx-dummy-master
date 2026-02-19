// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/world';
import { SearchFunctionalityWithFiltersPage } from '../pages/SearchFunctionalityWithFiltersPage';

let pageObject: SearchFunctionalityWithFiltersPage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new SearchFunctionalityWithFiltersPage(this.page);
  await pageObject.navigate();
});

When('I search for {string} using filters', async function (this: ICustomWorld, searchTerm: string) {
  const filterOption = 'relevant'; // Replace with actual filter logic
  await pageObject.performSearch(searchTerm, filterOption);
});

Then('I should see relevant search results', async function (this: ICustomWorld) {
  await pageObject.expectSearchResults();
});