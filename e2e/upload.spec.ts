import { test, expect } from '@playwright/test';

import { uploadPage } from '../support/fixtures/pages/upload'

const playload = {
  docs: "docs.mp3",
  genero: "kuduro",
  idioma: "portugues"

}

test('deve fazer upload ', async ({ page }) => {
  const upload = uploadPage(page)

  await upload.opensite()
  await upload.submitForm(playload)

  await expect(page.getByRole('heading', { name: '✅ Upload concluído!' }))
    .toBeVisible({ timeout: 15000 });

});
// test('não deve fazer upload genero está em falta', async ({ page }) => {
//   const upload = uploadPage(page)

//   await upload.opensite()
//   await upload.submitForm({...playload, genero:" "})

//   await expect(page.getByRole('heading', { name: '✅ Upload concluído!' }))
//     .toBeVisible({ timeout: 15000 });

// });

