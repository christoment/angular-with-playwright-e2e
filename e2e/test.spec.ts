import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:4343');
  const url = await page.url();
  expect(url).toMatch(new RegExp(`.*/home`));
  expect(await page.textContent('text=This is page #0')).toBeTruthy();

  await page.click('text=Add');
  expect(await page.textContent('text=This is page #1')).toBeTruthy();
});
