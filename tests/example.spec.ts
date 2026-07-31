import { test, expect } from '@playwright/test';

// This test validates the login on saucedemo.com page, 1st practice week 2

test('Saucedemo page is displayed', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Expect a button for "Login" to be visible on the page.
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});
 
test('Login into Saucedemo page', async({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Swag Labs')).toBeVisible();
});

