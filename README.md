# 🧪 Testes E2E - Swag Labs

> ⚠️ **Projeto em desenvolvimento** - Alguns módulos ainda estão sendo finalizados

Projeto de automação de testes End-to-End para a aplicação [Swag Labs](https://www.saucedemo.com/) utilizando Cypress.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte do portfólio de QA, demonstrando habilidades em automação de testes E2E, cobertura de cenários críticos e boas práticas de desenvolvimento de testes.

## 🛠️ Tecnologias Utilizadas

- **Cypress** - Framework de testes E2E
- **JavaScript** - Linguagem de programação
- **Node.js** - Ambiente de execução

## 📂 Estrutura do Projeto

```
teste-e2e/
├── cypress/
│   ├── e2e/
│   │   ├── login.spec.cy.js       ✅ Completo
│   │   └── prututos.cy.js         🚧 Em desenvolvimento
│   ├── fixtures/
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
├── cypress.config.js
├── package.json
└── README.md
```

## ✅ Módulos Implementados

### 🔐 Login (Completo)
- ✅ Login com sucesso (standard_user)
- ✅ Validação de usuário bloqueado (locked_out_user)
- ✅ Validação de credenciais inválidas
- ✅ Validação de campos obrigatórios
- ✅ Fechar mensagem de erro

### 🛒 Produtos (Em desenvolvimento)
- ✅ Adicionar produto ao carrinho
- ✅ Adicionar múltiplos produtos
- ✅ Remover produtos
- ✅ Navegação e detalhes de produtos
- ✅ Ordenação (A-Z, Z-A, preço)
- 🚧 Validações de carrinho (em progresso)

### 📦 Checkout (Planejado)
- 🔜 Preenchimento de dados
- 🔜 Finalização de compra
- 🔜 Validação de resumo

## 🚀 Como Executar

### Pré-requisitos
```bash
node -v  # v14 ou superior
npm -v   # v6 ou superior
```

### Instalação
```bash
# Clone o repositório
git clone https://github.com/Wisleymiguel/Teste-E2E-Swag-Labs.git

# Entre no diretório
cd Teste-E2E-Swag-Labs

# Instale as dependências
npm install
```

### Executar Testes

**Modo Interativo:**
```bash
npx cypress open
```

**Modo Headless:**
```bash
npx cypress run
```

**Executar arquivo específico:**
```bash
npx cypress run --spec "cypress/e2e/login.spec.cy.js"
```

## 📊 Resultados dos Testes

### Login - 10/10 testes passando ✅
- Caminho feliz
- Validações de erro
- Campos obrigatórios
- UX (fechar mensagens)

### Produtos - 10/20 testes implementados 🚧
- Funcionalidades principais implementadas
- Cenários de carrinho em desenvolvimento

## 🎯 Próximos Passos

- [ ] Finalizar módulo de Produtos
- [ ] Implementar módulo de Checkout
- [ ] Criar Custom Commands adicionais
- [ ] Adicionar Fixtures com dados de teste
- [ ] Configurar CI/CD (GitHub Actions)
- [ ] Implementar Page Objects
- [ ] Adicionar testes de API com cy.intercept()

## 👤 Autor

**Wisley Miguel do Carmo Camilo**

- GitHub: [@Wisleymiguel](https://github.com/Wisleymiguel)
- LinkedIn: [Wisley Miguel](https://www.linkedin.com/in/wisley-miguel/)

## 📝 Certificação

Engenheiro de Qualidade de Software - EBAC (Concluído em Janeiro/2026)

---

⚠️ **Status do Projeto:** Em desenvolvimento ativo  
📅 **Última atualização:** Janeiro 2026