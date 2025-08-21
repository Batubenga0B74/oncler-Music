// Record









// Target:

// Test Runner


// 1
// import { test, expect } from '@playwright/test';
// 2
// ​
// 3
// test('test', async ({ page }) => {
// 4
//   await page.goto('http://localhost:3000/upload');
// 5
//   await page.locator('label').filter({ hasText: 'Clique ou arraste sua música' }).click();
// 6
//   await page.getByRole('textbox', { name: 'ex: Rock' }).click();
// 7
//   await page.getByRole('textbox', { name: 'ex: Rock' }).fill('trap');
// 8
//   await page.getByRole('textbox', { name: 'ex: English' }).click();
// 9
//   await page.getByRole('textbox', { name: 'ex: English' }).fill('portugues');
// 10
//   page.once('dialog', dialog => {
// 11
//     console.log(`Dialog message: ${dialog.message()}`);
// 12
//     dialog.dismiss().catch(() => {});
// 13
//   });
// 14
//   await page.getByRole('button', { name: 'Enviar Música' }).click();
// 15
//   await page.locator('label').filter({ hasText: 'Clique ou arraste sua música' }).click();
// 16
//   await page.locator('body').setInputFiles('limye_mp3_32587.mp3');
// 17
//   await page.getByRole('button', { name: 'Enviar Música' }).click();
// 18
//   await expect(page.getByRole('heading')).toContainText('✅ Upload concluído!');
// 19
// });
