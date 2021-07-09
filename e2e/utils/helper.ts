import { Page } from "@playwright/test";

export async function gotoRootUrl(page: Page) {
  await page.goto('http://localhost:4200');
}
