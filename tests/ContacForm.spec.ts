import { test } from '@playwright/test';

test.describe.configure({ retries: 2 }); // Retry the test up to 2 times

test('ContactForm', async ({ page }) => {
  try {
      await page.goto('https://automationexercise.com/');
      await page.getByRole('link', { name: ' Contact us' }).click();
      await page.getByPlaceholder('Name').click();
      await page.getByPlaceholder('Name').fill('fff');
      await page.getByPlaceholder('Email', { exact: true }).click();
      await page.getByPlaceholder('Email', { exact: true }).fill('han@gmail.com');
      await page.locator('#contact-us-form').click();
      await page.getByPlaceholder('Subject').click();
      await page.getByPlaceholder('Subject').fill('commande');
      await page.getByPlaceholder('Your Message Here').click();
      await page.getByPlaceholder('Your Message Here').fill('fgjreifjrefjrefje');
      await page.locator('input[name="upload_file"]').click();
      await page.locator('input[name="upload_file"]').setInputFiles('test_cases.pdf');
      page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
      });
      await page.getByRole('button', { name: 'Submit' }).click();
      await page.getByRole('link', { name: ' Home' }).click();
  } catch (error) {
    console.error('Test failed:', error);
    throw error;
  }
});
