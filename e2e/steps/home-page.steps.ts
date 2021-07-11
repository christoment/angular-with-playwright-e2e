import { Given, Then, When } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/custom-world';
import { assert } from 'chai';

Given('Go to the Angular App', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto('http://localhost:4343');

  const url = await page.url();
  assert.match(url, new RegExp(`.*/home`));
});

When('I click {string} button', async function (this: ICustomWorld, buttonName: string) {
  const page = this.page!;
  await page.click(`text=${buttonName}`);
});

Then(/Text should show (\d+)/, async function (this: ICustomWorld, displayedText: string) {
  const page = this.page!;
  await page.textContent(`text=This is page #${displayedText}`);
});
