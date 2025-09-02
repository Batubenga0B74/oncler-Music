
import { test, expect } from '@playwright/test';
import {LoginPage}from "../support/fixtures/pages/login"
const playload = {
    email: "estoncler@gmail.com",
    senha: "oncler2025"
}
test('test de login com dados validos', async ({ page }) => {
 const login = LoginPage(page)
    await login.openSite()
    await login.submitForm(playload)
  await expect(page).toHaveURL("https://oncler.netlify.app/home");
  await page.locator('div').filter({ hasText: 'The music platform empowering' }).nth(1).click();
1
});


