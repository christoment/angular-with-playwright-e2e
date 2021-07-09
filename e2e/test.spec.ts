import { test, expect } from '@playwright/test';
import { gotoRootUrl } from './utils/helper';

test('basic test', async ({ page }) => {
  await gotoRootUrl(page);
  const url = await page.url();
  expect(url).toMatch(new RegExp(`.*/home`));
  expect(await page.textContent('text=This is page #0')).toBeTruthy();

  await page.click('text=Add');
  expect(await page.textContent('text=This is page #1')).toBeTruthy();
  await page.click('text=Add');
  expect(await page.textContent('text=This is page #2')).toBeTruthy();

  await page.click('text=Remove');
  expect(await page.textContent('text=This is page #0')).toBeTruthy();
});
