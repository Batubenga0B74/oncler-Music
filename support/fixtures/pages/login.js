export const LoginPage = (Page) => {
    const openSite = async () => {
        await page.goto('https://oncler.netlify.app/login');

    }

    const submitForm = async (playload) => {
        await page.getByRole('textbox', { name: 'Email' }).fill(playload.email);
        await page.getByRole('textbox', { name: 'Palavra passe' }).fill(playload.senha);
        await page.getByRole('button', { name: 'Acessar' }).click();
    }
    return {
        openSite,
        submitForm
    }
}