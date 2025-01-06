import { test, expect } from '@playwright/test';

test('Search', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByPlaceholder('Search Product').click();
  await page.getByPlaceholder('Search Product').fill('top');
  await page.getByRole('button', { name: '' }).click();
  await page.getByPlaceholder('Search Product').click();
  await page.getByPlaceholder('Search Product').fill('dress');
  await page.getByRole('button', { name: '' }).click();
});