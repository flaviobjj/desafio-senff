describe('Front-end E2E', () => {

  const username = `user_${Date.now()}`
  const password = '123456'

  it('Fluxo completo', () => {

    cy.visit('https://www.demoblaze.com/index.html')

    // Cadastro
    cy.get('#signin2').click()
    cy.get('#sign-username').type(username)
    cy.get('#sign-password').type(password)
    cy.get('#signInModal .btn-primary').click()

    cy.on('window:alert', () => true)
    cy.get('#signInModal .btn-secondary').click()

    // Login
    cy.get('#login2').click()
    cy.get('#loginusername').type(username)
    cy.get('#loginpassword').type(password)
    cy.get('#logInModal .btn-primary').click()

    cy.contains(`Welcome ${username}`).should('be.visible')

    // Produto
    cy.contains('Samsung galaxy s6').click()
    cy.get('.btn-success').click()

    cy.on('window:alert', () => true)

    // Carrinho
    cy.get('#cartur').click()

    cy.contains('Place Order').click()

    // Formulário
    cy.get('#name').type('Flavio')
    cy.get('#country').type('Brasil')
    cy.get('#city').type('Maringa')
    cy.get('#card').type('123456')
    cy.get('#month').type('03')
    cy.get('#year').type('2026')

    cy.get('#orderModal .btn-primary').click()

    cy.contains('Thank you for your purchase!').should('be.visible')
  })
})