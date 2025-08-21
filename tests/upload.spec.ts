import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/upload');
  await page.setInputFiles('input[type="file"]', "support/fixtures/docs.mp3")
  await page.getByPlaceholder('ex: Rock').fill('trap');
  await page.getByPlaceholder('ex: English').fill('portugues');
  await page.getByRole('button', { name: 'Enviar Música' }).click()
  await expect(page.getByRole('heading', { name: '✅ Upload concluído!' })).toBeVisible()
});

