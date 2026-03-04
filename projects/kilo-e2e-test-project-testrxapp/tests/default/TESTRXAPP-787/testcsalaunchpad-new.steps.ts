// Step Definitions for: Test_csa_launchpad-New
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../../../support/world';
import { TestCsaLaunchpadNewPage } from './testcsalaunchpad-new.page';

let pageObject: TestCsaLaunchpadNewPage;

Given('the user navigates to {string}', async function (this: ICustomWorld, url: string) {
  pageObject = new TestCsaLaunchpadNewPage(this.page);
  await pageObject.navigateToHomePage();
});

Given('the user is on the home page', async function (this: ICustomWorld) {
  pageObject = new TestCsaLaunchpadNewPage(this.page);
  await pageObject.navigateToHomePage();
});

When('the user views the top header', async function () {
  // No specific action needed as this is a view step
});

When('the home page is loaded', async function () {
  // No specific action needed as this is a load step
});

When('the user clicks the {string} card', async function (cardName: string) {
  if (cardName === 'My LQS302 Risk Evaluations (LEval)') {
    await pageObject.clickMyLqsCard();
  } else if (cardName === 'My IT Assets') {
    await pageObject.clickMyItAssetsCard();
  }
});

When('the user tries to click the {string} card', async function (cardName: string) {
  if (cardName === 'My IT Assets') {
    await expect(pageObject.myItAssetsCard).toBeHidden();
  }
});

Then('{string} is visible in the top header', async function (itemName: string) {
  await pageObject.expectHeaderNavigationItemsVisible();
});

Then('the {string} button is visible', async function (buttonName: string) {
  if (buttonName === 'Submit an Idea') {
    await pageObject.expectSubmitIdeaButtonVisible();
  }
});

Then('the {string} tab is highlighted as active/selected', async function (tabName: string) {
  if (tabName === 'Home') {
    await pageObject.expectHomeTabActive();
  }
});

Then('the {string} tab is not highlighted as active/selected', async function (tabName: string) {
  if (tabName === 'Home') {
    await pageObject.expectHomeTabNotActive();
  }
});

Then('{string} card is visible', async function (cardName: string) {
  if (cardName === 'My LQS302 Risk Evaluations (LEval)') {
    await pageObject.expectMyLqsCardVisible();
  } else if (cardName === 'My IT Assets') {
    await pageObject.expectMyItAssetsCardVisible();
  }
});

Then('the {string} card shows a relevant icon', async function (cardName: string) {
  if (cardName === 'My LQS302 Risk Evaluations (LEval)') {
    await expect(pageObject.myLqsCardIcon).toBeVisible();
  } else if (cardName === 'My IT Assets') {
    await expect(pageObject.myItAssetsCardIcon).toBeVisible();
  }
});

Then('the {string} card shows a right-arrow navigation indicator', async function (cardName: string) {
  if (cardName === 'My LQS302 Risk Evaluations (LEval)') {
    await expect(pageObject.myLqsCardArrow).toBeVisible();
  } else if (cardName === 'My IT Assets') {
    await expect(pageObject.myItAssetsCardArrow).toBeVisible();
  }
});

Then('the user is redirected to the {string} page', async function (pageName: string) {
  if (pageName === 'LQS302 Risk Evaluations') {
    await pageObject.expectRedirectToLqsPage();
  } else if (pageName === 'My IT Assets') {
    await pageObject.expectRedirectToItAssetsPage();
  }
});

Then('the {string} card is not visible', async function (cardName: string) {
  if (cardName === 'My IT Assets') {
    await pageObject.expectMyItAssetsCardNotVisible();
  }
});

Then('the click action on {string} is not available', async function (cardName: string) {
  if (cardName === 'My IT Assets') {
    await expect(pageObject.myItAssetsCard).toBeHidden();
  }
});