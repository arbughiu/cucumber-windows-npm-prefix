import { After, Before, ITestCaseHookParameter, setDefaultTimeout } from '@cucumber/cucumber';

import { BaseWorld } from 'world';

setDefaultTimeout(600000);


Before(async function before(this: BaseWorld, scenario: ITestCaseHookParameter) {
  await this.init(scenario);
});

After(async function after(this: BaseWorld, testCase: ITestCaseHookParameter) {
  await this.teardown();
});

