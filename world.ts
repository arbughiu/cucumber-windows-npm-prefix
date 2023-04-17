import { World as CucumberWorld, ITestCaseHookParameter, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { remote, Browser, RemoteOptions } from 'webdriverio';

export type WorldParameters = {
  searchText: string;
};

export type WorldInterface = {
  searchText: WorldParameters['searchText'];
  browser: Browser;
};

let instance: BaseWorld;

const WEBDRIVER_OPTIONS: RemoteOptions = {
  logLevel: 'warn',
  capabilities: {
    browserName: 'chrome',
  },
};

export class BaseWorld extends CucumberWorld<WorldParameters> implements WorldInterface {
  public searchText: WorldInterface['searchText'];
  public browser: WorldInterface['browser'];

  constructor(options: IWorldOptions<WorldParameters>) {
    super(options);
    this.searchText = options.parameters.searchText;
  }

  public async init(scenario?: ITestCaseHookParameter): Promise<void> {
    this.browser = await remote(WEBDRIVER_OPTIONS);
    instance = this;
  }

  public async teardown(): Promise<void> {
    await this.browser?.deleteSession();
  }
}

setWorldConstructor(BaseWorld);
