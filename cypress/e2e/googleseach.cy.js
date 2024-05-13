

describe(' Verify Google search', () => {
  it(' Google Search', () => {
    cy.visit('https://www.google.com/')
   // cy.get('#APjFqb').type('Tajmahal{enter}')
   cy.get('#APjFqb').type('Tajmahal{enter}', {force: true})


  })
})