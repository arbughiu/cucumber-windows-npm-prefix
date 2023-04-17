import { When } from '@cucumber/cucumber';

import { BaseWorld } from 'world';

When(/I type the search term in the input box/, async function (this: BaseWorld) {
  const inputElem = await this.browser.$('form input[type=text]');
  await inputElem.setValue(this.searchText);
});

When(/I click the submit button/, async function (this: BaseWorld) {
  const btn = await this.browser.$('button[type=submit]');
  await btn.click();
});

When(/I click the More Results button/, async function (this: BaseWorld) {
  const btn = await this.browser.$('.result.result--more');
  await btn.click();
});
