import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Pickle } from '@cucumber/messages';
import { BrowserContext, Page } from 'playwright';

export interface ICustomWorld extends World {
  debug: boolean;
  feature?: Pickle;
  context?: BrowserContext;
  page: Page;
}

export class CustomWorld extends World implements ICustomWorld {
  constructor(options: IWorldOptions) {
    super(options);
  }
  debug = false;
  page = null!; // page is initialised in the Before hook and will always be defined as far as the test context concerned
}

setWorldConstructor(CustomWorld);
