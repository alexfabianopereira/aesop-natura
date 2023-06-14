describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.natura.com.br/')
  })

     it('validar criar novo usuario', function() {
      cy.get('.natds40 > .MuiBox-root > .MuiTypography-caption').click()
      cy.get('.MuiButton-outlined > .MuiButton-label').click()
      cy.wait(1000) // aguarda 1 segundo para garantir que a página foi carregada completamente
      cy.get('input[name="firstName"]').type('Givago')
      cy.get('input[name="lastName"]').type('Cruz')
      cy.get('input[name="email"]').type('givago.cruz@mailinator.com')
      cy.get('input[name="password"]').type('!Ga171713')
      cy.get('input[name="confirmPassword"]').type('!Ga171713')
      cy.get('input[name="cpf"]').type('63009981007')
      cy.get('#receiveNewsLetterSms').click()
      cy.get('#acceptedterms').click()
      cy.get('button[type="submit"]').contains('CRIAR CONTA').click()
    
  

  })
})
  