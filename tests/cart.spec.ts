import { test, expect } from '@playwright/test';

test('Login + add a product to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  //await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  //await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

  //This is to validate de shopping cart badge is enabled, but its doesn't indicates how many elements it has 
  //await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(1);
  
  //This is to validate something was added to the shopping cart
  //await expect(page.locator('[data-test="shopping-cart-badge"]')).toBeVisible();
  //await page.locator('[data-test="shopping-cart-link"]').click();
});