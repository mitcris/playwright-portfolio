import { test, expect } from '@playwright/test';

test('SauceDemo login page is displayed', async ({ page }) => {
  // Arrange: open the login page
  await page.goto('https://www.saucedemo.com/');

  // Assert: the Login button is visible
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});

test('Successful login on SauceDemo', async ({ page }) => {
  // Arrange: open the login page
  await page.goto('https://www.saucedemo.com/');

  // Act: log in with valid credentials
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Assert: the products page is shown
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});
