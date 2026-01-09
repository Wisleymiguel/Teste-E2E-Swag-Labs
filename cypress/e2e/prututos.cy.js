describe('Teste de Produtos - Swag Labs', () => {
  
  // Login antes de cada teste
  beforeEach(() => {
    // Esta no commands.js
    cy.login()
  })

  // ========== CENÁRIOS DE ADICIONAR PRODUTOS ==========
  
  it('deve adicionar um produto ao carrinho com sucesso', () => {
    cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click()
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('contain','1')
    })

  it('deve adicionar múltiplos produtos ao carrinho', () => {
    cy.get('[data-test="title"]').should('contain','Products')
    cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click()
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="back-to-products"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="title"]').should('contain','Your Cart')   
    cy.get('[data-test="shopping-cart-link"]').should('contain','3')
    
        
  })

  // ========== CENÁRIOS DE REMOVER PRODUTOS ==========

  it('deve remover produto do carrinho pela página de produtos', () => { 
    cy.get('[data-test="title"]').should('contain','Products')
    cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click()
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="remove"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('not.contain','1')
    cy.get('[data-test="secondary-header"]').should('contain','Your Cart')

  })

  it('deve remover um produto quando vários estão no carrinho', () => {
    cy.get('[data-test="title"]').should('contain','Products')
    cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click()
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="back-to-products"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('contain','2')
})

  // ========== CENÁRIOS DE NAVEGAÇÃO E DETALHES ==========

  it('deve abrir detalhes do produto ao clicar na imagem/nome', () => {
    cy.get('[data-test="title"]').should('contain','Products')
    cy.get('[data-test="item-3-title-link"] > [data-test="inventory-item-name"]').should('contain','T-Shirt (Red)')
    cy.get('[data-test="item-3-title-link"] > [data-test="inventory-item-name"]').click()
    cy.get('[data-test="inventory-item-price"]').should('contain','$15.99')
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('contain','1')
  })

  it('deve adicionar produto ao carrinho pela página de detalhes', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('contain','1')
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('contain','Remove')
  })

  it('deve voltar para lista de produtos usando botão Back', () => {
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()
    cy.get('[data-test="back-to-products"]').should('contain','Back to products')
    cy.get('[data-test="back-to-products"]').click()
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
  })

  // ========== CENÁRIOS DE ORDENAÇÃO ==========

  it('deve ordenar produtos de A-Z (padrão)', () => {
    cy.get('[data-test="product-sort-container"]').should('contain','Name (A to Z)')
    cy.get('[data-test="product-sort-container"]').select('Name (A to Z)')
    cy.get('[data-test="product-sort-container"]').should('contain','Name (A to Z)')
   
  })

  it('deve ordenar produtos de Z-A', () => {
    cy.get('[data-test="product-sort-container"]').should('contain','Name (A to Z)')
    cy.get('[data-test="product-sort-container"]').select('Name (Z to A)')
    cy.get('[data-test="product-sort-container"]').should('contain','Name (Z to A)')
  })

  it('deve ordenar produtos por preço (menor para maior)', () => {
    cy.get('[data-test="product-sort-container"]').should('contain','Name (A to Z)')
    cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
    cy.get('[data-test="product-sort-container"]').should('contain','Price (low to high)')
    cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar').should('contain','$7.99')
  })

  it('deve ordenar produtos por preço (maior para menor)', () => {
    cy.get('[data-test="product-sort-container"]').should('contain','Name (A to Z)')
    cy.get('[data-test="product-sort-container"]').select('Price (high to low)')
    cy.get('[data-test="product-sort-container"]').should('contain','Price (high to low)')
    cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar').should('contain','$49.99')
  })

  // ========== CENÁRIOS DE CARRINHO ==========


  it('deve exibir carrinho vazio quando nenhum produto foi adicionado', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="cart-contents-container"]').should('not.contain','Remove')
    cy.get('[data-test="shopping-cart-link"]').should('not.contain','1')
  })

  it('deve remover produto do carrinho pela página do carrinho', () => {
    cy.get('[data-test="item-3-title-link"] > [data-test="inventory-item-name"]').click()
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click()
    cy.get('[data-test="cart-contents-container"]').should('not.contain','Test.allthethings() T-Shirt (Red)')
    cy.get('[data-test="shopping-cart-link"]').should('not.contain','1')
  })

  it('deve continuar comprando a partir do carrinho', () => {
    cy.get('[data-test="item-3-title-link"] > [data-test="inventory-item-name"]').click()
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="continue-shopping"]').click()
    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="shopping-cart-link"]').should('contain','1')
    cy.get('[data-test="secondary-header"]').should('contain','Products')
  })

  // ========== CENÁRIOS DE VALIDAÇÃO DE INFORMAÇÕES ==========

  it('deve exibir informações corretas dos produtos (nome, descrição, preço)', () => {
    cy.get('[data-test="item-2-title-link"] > [data-test="inventory-item-name"]').click()
    cy.get('.inventory_details_desc_container').should('contain','Sauce Labs Onesie')
    cy.get('.inventory_details_desc_container').should('contain','Rib snap infant onesie')
    cy.get('.inventory_details_price').should('contain','$7.99')
  })

  it('deve manter estado do carrinho ao navegar entre páginas', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="continue-shopping"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('contain','2')
  })

})