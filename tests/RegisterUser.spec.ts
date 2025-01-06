import { test, expect } from '@playwright/test';

test('Register new user', async ({ page }) => {
  try{
      await page.goto('https://automationexercise.com/');
      await page.getByRole('link', { name: ' Signup / Login' }).click();
      await page.getByPlaceholder('Name').click();
      await page.getByPlaceholder('Name').fill('ouss');
      await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
      await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('ouss@gmail.com');
      await page.getByRole('button', { name: 'Signup' }).click();
      await page.getByLabel('Mr.').check();
      await page.getByLabel('Name *', { exact: true }).click();
      await page.getByLabel('Password *').click();
      await page.getByLabel('Password *').fill('101010');
      await page.locator('#days').selectOption('2');
      await page.locator('#months').selectOption('2');
      await page.locator('#years').selectOption('2016');
      await page.getByLabel('Sign up for our newsletter!').check();
      await page.getByLabel('Receive special offers from').check();
      await page.getByLabel('First name *').click();
      await page.getByLabel('First name *').fill('ouss');
      await page.getByLabel('Last name *').click();
      await page.getByLabel('Last name *').fill('oussy');
      await page.getByLabel('Company', { exact: true }).click();
      await page.getByLabel('Company', { exact: true }).fill('1337');
      await page.getByLabel('Address * (Street address, P.').click();
      await page.getByLabel('Address * (Street address, P.').fill('32 rue los');
      await page.getByLabel('Country *').selectOption('United States');
      await page.getByLabel('State *').click();
      await page.getByLabel('State *').fill('colorado');
      await page.getByLabel('City *').click();
      await page.getByLabel('City *').fill('colorado3');
      await page.locator('#zipcode').click();
      await page.locator('#zipcode').fill('423423');
      await page.getByLabel('Mobile Number *').click();
      await page.getByLabel('Mobile Number *').fill('+13424234234');
      await page.getByRole('button', { name: 'Create Account' }).click();
      await page.getByRole('link', { name: 'Continue' }).click();
      await page.getByRole('link', { name: ' Delete Account' }).click();
      await page.getByRole('link', { name: 'Continue' }).click();
  }catch(error){
      console.log('test failed',error);
      throw error;
  }

});