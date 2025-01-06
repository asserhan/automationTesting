import { test } from '@playwright/test';

test('Logout', async ({ page }) => {
    try{
        await page.goto('https://automationexercise.com/');
        await page.getByRole('link', { name: ' Signup / Login' }).click();
        await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
        await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('han@gmail.com');
        await page.locator('form').filter({ hasText: 'Login' }).click();
        await page.getByPlaceholder('Password').fill('101010');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByRole('link', { name: ' Logout' }).click();
    }
    catch(error){
        console.log('test failed',error);
        throw error;
    }
});