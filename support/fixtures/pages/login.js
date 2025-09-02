// support/fixtures/pages/login.js
export const LoginPage = (page) => {
    const openSite = async () => {
      await page.goto('https://oncler.netlify.app/login');
    };
  
    const submitForm = async (payload) => {
      await page.getByRole('textbox', { name: 'Email' }).fill(payload.email);
      await page.getByRole('textbox', { name: 'Palavra passe' }).fill(payload.senha);
      await page.getByRole('button', { name: 'Acessar' }).click();
    };
  
    return {
      openSite,
      submitForm,
    };
  };
  