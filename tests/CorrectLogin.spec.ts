import { test} from '@playwright/test';

test('CorrectLogin', async ({ page }) => {
    try {
          await page.goto('https://automationexercise.com/');
          await page.getByRole('link', { name: ' Signup / Login' }).click();
          await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
          await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('han@gmail.com');
          await page.getByPlaceholder('Password').click();
          await page.getByPlaceholder('Password').fill('101010');
          await page.locator('body').click();
          await page.getByRole('button', { name: 'Login' }).click();
          await page.getByRole('link', { name: ' Logout' }).click();
    } catch (error) {
        console.log('test failed', error);
        throw error;
    }
});