// Step Definitions
import { Given, When, Then } from '@cucumber/cucumber';
import { SearchFunctionalityWithFiltersPage } from '../pages/SearchFunctionalityWithFiltersPage';
import { ICustomWorld } from '../support/world';

let pageObject: SearchFunctionalityWithFiltersPage;

Given('I am on the Playwright homepage', async function (this: ICustomWorld) {
  pageObject = new SearchFunctionalityWithFiltersPage(this.page);
  await pageObject.navigate();
});

When('I search for {string}', async function (this: ICustomWorld, searchTerm: string) {
  await pageObject.performSearch(searchTerm);
});

When('I apply the {string} filter', async function (this: ICustomWorld, filter: string) {
  await pageObject.applyFilter(filter);
});

Then('I should see relevant search results', async function (this: ICustomWorld) {
  await pageObject.expectSearchResults();
});