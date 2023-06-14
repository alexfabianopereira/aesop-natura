describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.aesop.com.br')
  })

    it('validar criar novo usuario', function() {
      cy.get('.natds37 > .MuiTypography-root > .natds35').click()
      cy.get('.MuiButton-outlined > .MuiButton-label').click()
      cy.get(':nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Givago')
      cy.get(':nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Cruz')
      //inserir um novo email
      cy.get('.natds136 > :nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('givago.cruz@mailinator.com')
      cy.get('#password-field').type('!Ga171309')
      cy.get('#confirmPassword-field').type('!Ga171309')
      //inserir um novo cpf
      cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('92070243060')
      cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('18061978')
      cy.get(':nth-child(4) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('19999999999')
      cy.get('#acceptedterms').click()
      cy.get('.natds193 > .MuiButtonBase-root').click()


    })
  })