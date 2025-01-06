import { test } from '@playwright/test';

test('ExistingEmail', async ({ page }) => {
    try {
        await page.goto('https://automationexercise.com/');
        await page.getByRole('link', { name: ' Signup / Login' }).click();
        await page.getByPlaceholder('Name').click();
        await page.getByPlaceholder('Name').fill('DDD');
        await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
        await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('han@gmail.com');
        await page.getByRole('button', { name: 'Signup' }).click();
        await page.getByRole('button', { name: 'Signup' }).click();

    }
    catch (error) {
        console.log('test failed', error);
        throw error;
    }
});