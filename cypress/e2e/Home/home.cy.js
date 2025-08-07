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
    it('ANALISANDO  SE AS MUSICAS FORAM LISTADAS CORRECTAMENTE',()=>{
      cy.get('[data-testid="imagemMusic"]').should('be.visible')
      cy.get('#Titulo').should('exist')                // título do card
      cy.get('#subtitulo').should('exist')  
    })
  })

