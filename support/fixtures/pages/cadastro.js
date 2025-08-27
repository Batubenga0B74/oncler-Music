 export const cadastroPage = (page) =>{
    const open = async ()=>{
        await page
        .goto('http://localhost:3000/cadastro');
    }
    const form = async (playload) =>{
        await page
        .getByRole('textbox', { name: 'email' })
        .fill(playload.email)
    
        await page
        .getByRole('textbox', { name: 'Nome: Palavra passe' })
        .fill(playload.nome);
    
        await page
        .getByRole('textbox', { name: '*** *** ***' })
        .fill(playload.senha);
    
        await page
        .getByRole('button', { name: 'Acessar' })
        .click();
    }
    return{
        open,
        form
    }
}