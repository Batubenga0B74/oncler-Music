
import { test, expect } from '@playwright/test';
import {LoginPage}from "../support/fixtures/pages/login"
const playload = {
    email: "testoncler@gmail.com",
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
test('test com o senha invalida', async ({ page }) => {

    const login = LoginPage(page)
   
       await login.openSite()
   
       await login.submitForm({...playload , senha:"oncler2027"})
    //    await page.getByText('Email ou senha inválidos').click();
       await expect(page.getByText("Email ou senha inválidos")).toBeVisible();


   
   });
   test('test com o email invalida', async ({ page }) => {

    const login = LoginPage(page)
   
       await login.openSite()
   
       await login.submitForm({...playload , email:"oncler2027"})
    //    await page.getByText('Email ou senha inválidos').click();
       await expect(page.getByText("Email ou senha inválidos")).toBeVisible();
   
   });


   test('test', async ({ page }) => {
    await page.goto('https://oncler.netlify.app/login');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('testoncler@gmail.com');
    await page.getByRole('textbox', { name: 'Palavra passe' }).click();
    await page.getByRole('textbox', { name: 'Palavra passe' }).fill('oncler2025');
    await page.getByRole('button', { name: 'Acessar' }).click();
    await page.goto('https://oncler.netlify.app/login');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('testoncler@gmail.com');
    await page.getByRole('textbox', { name: 'Palavra passe' }).click();
    await page.getByRole('textbox', { name: 'Palavra passe' }).fill('oncler123');
    await page.getByRole('button', { name: 'Acessar' }).click();
    await page.getByText('Email ou senha inválidos').click();
  });