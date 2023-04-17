import { Given, When } from '@cucumber/cucumber';

import { BaseWorld } from 'world';

Given(/I launch DuckDuckGo search engine/, async function (this: BaseWorld) {
  await this.browser.url('https://duckduckgo.com');
});

When(/I wait for (\d+) seconds/, { timeout: 60000 }, async function (seconds: number): Promise<void> {
  await this.browser.pause(seconds * 1000);
});

When(/I scroll down/, async function (this: BaseWorld) {
  await this.browser.scroll(0, 999999);
});
