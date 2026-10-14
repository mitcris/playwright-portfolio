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

test('Login locked on Saucedemo', async ({ page }) => {
  // Arrange: open the login page
  await page.goto('https://www.saucedemo.com/');

  // Act: log in with blocked user credentials
  await page.locator('[data-test="username"]').fill('locked_out_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Assert: the error message login is shown
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
});

test('Unsuccessful login on Saucedemo using wrong username', async ({ page }) => {
  // Arrange: open the login page
  await page.goto('https://www.saucedemo.com/');

  // Act: log in with invalid username & valid password
  await page.locator('[data-test="username"]').fill('wrong_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Assert: the error message login is shown
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('Unsuccessful login on Saucedemo using wrong password', async ({ page }) => {
  // Arrange: open the login page
  await page.goto('https://www.saucedemo.com/');

  // Act: log in with valid username & wrong password
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('wrong_password');
  await page.locator('[data-test="login-button"]').click();

  // Assert: the error message login is shown
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('Unsuccessful login on Saucedemo username field is empty', async ({ page }) => {
  // Arrange: open the login page
  await page.goto('https://www.saucedemo.com/');

  // Act: log in with username field empty
  await page.locator('[data-test="username"]').fill('');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Assert: the error message login is shown
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required');
});

test('Unsuccessful login on Saucedemo password field is empty', async ({ page }) => {
  // Arrange: open the login page
  await page.goto('https://www.saucedemo.com/');

  // Act: log in with username valid & password field empty
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('');
  await page.locator('[data-test="login-button"]').click();

  // Assert: the error message login is shown
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Password is required');
});
