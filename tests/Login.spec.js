import {test, expect} from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByPlaceholder('Email').fill('gaurao123@gmail.com');
    await page.getByPlaceholder('Password').fill('gaurao123');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page).toHaveURL('https://conduit.bondaracademy.com/');
    //await expect(page.locator('app-layout-header').getByRole('link', { name: 'conduit' })).toBeVisible();
})