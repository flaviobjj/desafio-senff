// cypress/e2e/frontend/frontend.cy.js
describe('Desafio Senff - Teste Front-End', () => {

  // Usuário dinâmico para evitar conflito de cadastro
  const username = `user_${Date.now()}`
  const password = '123456'

  it('Fluxo completo do site Demoblaze', () => {

    // =========================
    // ACESSA O SITE
    // =========================
    cy.visit('https://www.demoblaze.com/index.html')

    // =========================
    // CADASTRO DE USUÁRIO
    // =========================
    cy.get('#signin2').should('be.visible').click()     // Abre modal de cadastro
    cy.get('#sign-username').should('be.visible').type(username) // Preenche usuário
    cy.get('#sign-password').type(password)                       // Preenche senha
    cy.get('#signInModal .btn-primary').click()                  // Clica em cadastrar

    // Captura alerta (usuário já existe ou cadastro OK)
    cy.on('window:alert', (msg) => {
      expect(msg).to.exist
    })

    cy.wait(2000) // Aguarda o site estabilizar

    // Fecha modal se ainda estiver aberto
    cy.get('body').then(($body) => {
      if ($body.find('#signInModal.show').length > 0) {
        cy.get('#signInModal .btn-secondary').click({ force: true })
      }
    })

    // =========================
    // LOGIN
    // =========================
    cy.get('#login2').should('be.visible').click()      // Abre modal de login
    cy.get('#loginusername').should('be.visible').type(username) // Digita usuário
    cy.get('#loginpassword').type(password)                     // Digita senha
    cy.get('#logInModal .btn-primary').click()                  // Clica em logar

    // =========================
    // VALIDAÇÃO DO LOGIN
    // =========================
    // Em vez de esperar "Welcome ...", valida se botão logout apareceu
    cy.get('#logout2', { timeout: 10000 }).should('be.visible')

    // =========================
    // SELECIONA PRODUTO
    // =========================
    cy.contains('Samsung galaxy s6', { timeout: 10000 })
      .should('be.visible')
      .click()

    // =========================
    // ADICIONA AO CARRINHO
    // =========================
    cy.get('.btn-success').should('be.visible').click()

    // Captura alerta de sucesso
    cy.on('window:alert', () => true)

    cy.wait(2000)

    // =========================
    // VAI PARA O CARRINHO
    // =========================
    cy.get('#cartur').should('be.visible').click()

    // =========================
    // ABRE MODAL DE COMPRA
    // =========================
    cy.contains('Place Order', { timeout: 10000 }).click()
    cy.get('#orderModal').should('be.visible')

    // =========================
    // PREENCHE DADOS DO PEDIDO
    // =========================
    cy.get('#name').type('Flavio')
    cy.get('#country').type('Brasil')
    cy.get('#city').type('Maringa')
    cy.get('#card').type('123456')
    cy.get('#month').type('03')
    cy.get('#year').type('2026')

    // =========================
    // FINALIZA COMPRA
    // =========================
    cy.get('#orderModal .btn-primary').click()

    // =========================
    // VALIDAÇÃO FINAL
    // =========================
    cy.contains('Thank you for your purchase!', { timeout: 10000 })
      .should('be.visible')
  })
})