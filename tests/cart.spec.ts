import { test, expect } from '@playwright/test';

test('Login + add a product to cart', async ({ page }) => {
  // Arrange: log in and land on the products page
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');

  // Act: add a product to the cart
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

  // Assert: the cart shows one item
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

});