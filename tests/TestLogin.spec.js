const { test, expect } = require('@playwright/test');
const { Logintest } = require('../pages/Login');

test('successful login', async ({ page }) => {
  const Login = new Logintest(page);

  await page.goto('https://www.saucedemo.com/');
  await Login.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
});