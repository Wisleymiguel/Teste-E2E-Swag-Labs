describe('Teste de Checkout - Swag Labs', () => {
  
  // Login e adiciona produto antes de cada teste
  beforeEach(() => {
    cy.login()
    cy.goToCheckout()
  })

  // ========== CENÁRIOS DE CAMINHO FELIZ ==========
  
  it('deve finalizar compra com sucesso preenchendo todos os dados', () => {
    cy.fillCheckoutInfo('João', 'Silva', '12345')
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('contain','Thank you for your order!')
  })

  it('deve exibir resumo correto do pedido antes de finalizar', () => {
    cy.fillCheckoutInfo('Ana', 'Silva', '12345')
    cy.get('[data-test="inventory-item"]').should('contain','Sauce Labs Backpack',)
    .should('contain', '$29.99')
  })

  // ========== CENÁRIOS DE VALIDAÇÃO DE CAMPOS ==========

  it('deve exibir erro quando First Name estiver vazio', () => {
    cy.fillCheckoutInfo(null, 'Silva', '12345')
    //cy.get('[data-test="finish"]').click()
    cy.get('.checkout_info').should('contain','Error: First Name is required')
    cy.url().should('include', '/checkout-step-one.html')
  })

  it('deve exibir erro quando Last Name estiver vazio', () => {
    cy.fillCheckoutInfo('paula', null, '12345')
    cy.get('.checkout_info').should('contain','Error: Last Name is required')
    cy.url().should('include', '/checkout-step-one.html')
  })

  it('deve exibir erro quando Zip Code estiver vazio', () => {
    cy.fillCheckoutInfo('Carlos', 'Santos', null)
    cy.get('.checkout_info').should('contain','Error: Postal Code is required')
    cy.url().should('include', '/checkout-step-one.html')
  })

  it('deve exibir erro quando todos os campos estiverem vazios', () => {
    cy.fillCheckoutInfo(null, null, null)
    cy.get('.checkout_info').should('contain','Error: First Name is required')
    cy.url().should('include', '/checkout-step-one.html')
  })

  // ========== CENÁRIOS DE NAVEGAÇÃO ==========

  it('deve cancelar checkout e voltar para carrinho', () => {
    cy.fillCheckoutInfo('João', 'Silva', '12345')
    cy.get('[data-test="cancel"]').click()
    cy.url().should('include', '/inventory.html')
  })

  it('deve cancelar na página de overview e voltar para produtos', () => {
    cy.fillCheckoutInfo('João', 'Silva', '12345')
    cy.get('[data-test="cancel"]').click()
    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="shopping-cart-link"]').should('contain', '1')
  })

  it('deve voltar para produtos após finalizar compra', () => {
    cy.fillCheckoutInfo('João', 'Silva', '12345')
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="complete-header"]').should('contain','Thank you for your order!')
    cy.get('[data-test="back-to-products"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('not.contain', '1')
  })

  // ========== CENÁRIOS DE MÚLTIPLOS PRODUTOS ==========

  it('deve finalizar compra com múltiplos produtos', () => {
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="continue-shopping"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.fillCheckoutInfo('João', 'Silva', '12345')
    cy.get('[data-test="cart-list"]').should('contain','Sauce Labs Backpack')
    .should('contain','Sauce Labs Bike Light')
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('contain','Thank you for your order!')
  })

  // ========== CENÁRIOS DE VALIDAÇÃO DE DADOS ==========

  it('deve manter dados preenchidos ao voltar da página de overview', () => {
    cy.fillCheckoutInfo('João', 'Silva', '12345')
    cy.get('[data-test="cancel"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('.checkout_info').should('not.contain', 'João')
    cy.get('.checkout_info').should('not.contain', 'Silva')
    cy.get('.checkout_info').should('not.contain', '12345') 
  })

  // ========== CENÁRIO DE FECHAR MENSAGEM DE ERRO ==========

  it('deve permitir fechar mensagem de erro', () => {
    cy.fillCheckoutInfo(null, 'Silva', '12345')
    cy.get('.checkout_info').should('contain','Error: First Name is required')
    cy.get('.error-button').click()
    cy.get('.checkout_info').should('not.contain','Error: First Name is required')
  })

})