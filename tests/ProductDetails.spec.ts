import { test} from '@playwright/test';

test('product', async ({ page }) => {
      await page.goto('https://automationexercise.com/');
      await page.getByRole('link', { name: ' Products' }).click();
      await page.locator('.choose > .nav > li > a').first().click();
      await page.getByRole('img', { name: 'ecommerce website products' }).first().click();
      await page.getByRole('heading', { name: 'Blue Top' }).click();
    
});