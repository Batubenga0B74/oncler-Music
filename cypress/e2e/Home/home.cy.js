/// <reference types="cypress" />



describe('Teste do Haeader na Home', () => {
  beforeEach(() => {
    cy.visit('https://oncler.netlify.app')
  })

  it('deve exibir a logo correctamente', () => {
    cy.get('img[alt="Logo"]').should('be.visible')


  
  })
  it('deve exibir o campo de pesquisa',()=>{
    cy.get('input[placeholder="Search your music"]').should('exist')

  })

  it('deve conter o item do menu de navegação',()=>{
    cy.contains('DISCOVER').should('be.visible') // com C
    cy.contains('PLAYLIST').should('be.visible')
    cy.contains('ORIGINAL').should('be.visible')
  })

it('deve conter as opções de criar conta e login',()=>{
  cy.contains('Create an accout').should('be.visible')
  cy.contains('SING IN').should('be.visible')
  cy.contains('UPLOAD').should('be.visible')
})
  })
  describe('teste da listagem de musicas',()=>{
    beforeEach(() => {
      cy.visit('https://oncler.netlify.app')
    })
    it('ANALISANDO  SE AS MUSICAS FORAM LISTADAS CORRECTAMENTE ',()=>{
      cy.get('[data-testid="imagemMusic"]').should('be.visible')
      cy.get('#Titulo').should('exist')                
      cy.get('#subtitulo').should('exist')  
    })
    it('ANALISANDO  SE O O MENU LATERAL APARECE CORRECTAMENTE BROWSER e seu items',()=>{
      cy.contains('BROWSER').should('be.visible')
      cy.contains('Trending songs').should('be.visible')
      cy.contains('Trending').should('be.visible')
      cy.contains('Albums').should('be.visible')
      cy.contains('supportated ').should('be.visible')
      cy.contains('Recently added').should('be.visible')
      cy.contains('Acount for you ').should('be.visible')
      cy.contains('added  ').should('be.visible')
     
    })
    it('ANALISANDO  SE O O MENU LATERAL APARECE CORRECTAMENTE CHATS e seu items',()=>{
      cy.contains('CHATS').should('be.visible')
      cy.contains('Trending songs').should('be.visible')
      cy.contains('Trending').should('be.visible')
      cy.contains('Albums').should('be.visible')
      cy.contains('supportated ').should('be.visible')
      cy.contains('Recently added').should('be.visible')
      cy.contains('Acount for you ').should('be.visible')
      cy.contains('added  ').should('be.visible')
     
    })
  })

