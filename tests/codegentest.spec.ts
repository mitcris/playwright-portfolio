import { test, expect } from '@playwright/test';

test('Successful Login on SauceDemo using Codegen', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.getByText('Swag Labs')).toBeVisible();
  //await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  //await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});