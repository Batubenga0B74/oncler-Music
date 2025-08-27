import { test, expect } from '@playwright/test';
import { cadastroPage } from "../support/fixtures/pages/cadastro"
const playload = {
    email: "freudymena@gmail.com",
    nome: "freudyMena",
    senha: "123qw"
}
test('deve cadastrar um usuario', async ({ page }) => {
    const cadastro = cadastroPage(page)
    await cadastro.open()
    await cadastro.form(playload)
});