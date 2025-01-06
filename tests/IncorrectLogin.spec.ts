import { test} from '@playwright/test';

test('IncorrectLogin', async ({ page }) => {
    try{
        await page.goto('https://automationexercise.com/');
        await page.getByRole('link', { name: ' Signup / Login' }).click();
        await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
        await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('FGR@FDF.COM');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('32323');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByRole('button', { name: 'Login' }).click();

    }
    catch(error){
        console.log('test failed',error);
        throw error;
    }
});