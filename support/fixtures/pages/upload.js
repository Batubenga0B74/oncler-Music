
 export const uploadPage = (page) => {

    const opensite = async () => {
        await page.goto('http://localhost:3000/upload');
    }
    const submitForm = async (playload) => {
        await page
        .setInputFiles('input[type="file"]', `support/fixtures/${playload.docs}`)

        await page
        .getByPlaceholder('ex: Rock')
        .fill(playload.genero);

        await page 
        .getByPlaceholder('ex: English')
        .fill(playload.idioma);
        await page
        .getByRole('button', { name: 'Enviar Música' })
        .click()
    }
    return{
        opensite,
        submitForm
    }
}