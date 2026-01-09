describe('Teste de Autenticação - Swag Labs', () => {
  
  // Este bloco executa antes de cada cenário de teste (cada it)
  // Garante que todos os testes comecem na página de login limpa
  beforeEach(() => {
    cy.visit('/')
  })

  // ========== CENÁRIOS DE CAMINHO FELIZ ==========
  
  it('deve realizar login com sucesso usando standard_user', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.app_logo').should('contain','Swag Labs')
  })

  // ========== CENÁRIOS DE VALIDAÇÃO DE ERRO ==========
  it('deve exibir erro ao tentar login com usuário bloqueado', () => {
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain',' Sorry, this user has been locked out.')

    
  })

  it('deve exibir erro ao tentar login com senha incorreta', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauc')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain','Username and password do not match any user in this service')
  })

  it('deve exibir erro ao tentar login com ambas credenciais inválidas', () => {
    cy.get('[data-test="username"]').type('standard_use')
    cy.get('[data-test="password"]').type('secret_sauc')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain','Username and password do not match any user in this service')
  })

  // ========== CENÁRIOS DE CAMPOS OBRIGATÓRIOS ==========

  it('deve exibir erro quando o campo username estiver vazio', () => {
    //cy.get('[data-test="username"]')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.error-message-container').should('contain','Epic sadface: Username is required')
  })

  it('deve exibir erro quando o campo password estiver vazio', () => {
    cy.get('[data-test="username"]').type('standard_user')
    //cy.get('[data-test="password"]')
    cy.get('[data-test="login-button"]').click()
    cy.get('.error-message-container').should('contain.text','Password is required')
  })

  it('deve exibir erro quando ambos os campos estiverem vazios', () => {
    //cy.get('[data-test="username"]')
    //cy.get('[data-test="password"]')
    cy.get('[data-test="login-button"]').click()
    cy.get('.error-message-container').should('contain','Epic sadface: Username is required')
    
  })

  // ========== CENÁRIOS ADICIONAIS DE UX ==========

  it('deve permitir limpar mensagem de erro ao clicar no botão X', () => {
    cy.get('[data-test="username"]').type('standard_user')
    //cy.get('[data-test="password"]')
    cy.get('[data-test="login-button"]').click()
    cy.get('.error-message-container').should('contain.text','Password is required')
    cy.get('[data-test="error-button"]').click()
    cy.get('#login_button_container').should('not.contain','Password is required')
  })

})