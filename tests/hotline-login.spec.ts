import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://hotline.ua/ua/login/');

  await page
    .getByPlaceholder('E-mail або номер мобільного телефону')
    .fill('gottlieb');
  
  await page
    .getByPlaceholder('Пароль')
    .fill('');
  
  await page
    .getByRole('button', { name: 'Увійти' })
    .click()

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Увійти/);
});

/*test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});*/
