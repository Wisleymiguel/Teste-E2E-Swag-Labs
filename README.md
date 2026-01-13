# 🧪 Testes E2E - Swag Labs

[![Cypress Tests](https://github.com/Wisleymiguel/Teste-E2E-Swag-Labs/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/Wisleymiguel/Teste-E2E-Swag-Labs/actions/workflows/cypress-tests.yml)

Projeto de automação de testes End-to-End para a aplicação [Swag Labs](https://www.saucedemo.com/) utilizando Cypress.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte do portfólio de QA, demonstrando habilidades em automação de testes E2E, cobertura de cenários críticos e boas práticas de desenvolvimento de testes.

**Cobertura Completa:** 39 testes automatizados cobrindo os principais fluxos da aplicação.

## 🛠️ Tecnologias Utilizadas

- **Cypress** - Framework de testes E2E
- **JavaScript** - Linguagem de programação
- **Node.js** - Ambiente de execução
- **GitHub Actions** - CI/CD

## 📂 Estrutura do Projeto

```
teste-e2e/
├── .github/
│   └── workflows/
│       └── cypress-tests.yml    # CI/CD
├── cypress/
│   ├── e2e/
│   │   ├── login.spec.cy.js     ✅ 10 testes
│   │   ├── prututos.cy.js       ✅ 16 testes
│   │   └── checkout.spec.cy.js  ✅ 13 testes
│   ├── fixtures/
│   ├── support/
│   │   ├── commands.js          # Custom commands
│   │   └── e2e.js
│   └── videos/                  # Vídeos dos testes
├── cypress.config.js
├── package.json
├── .gitignore
└── README.md
```

## ✅ Módulos Implementados

### 🔐 Login (10/10) ✅
- Login com sucesso (standard_user)
- Validação de usuário bloqueado (locked_out_user)
- Validação de credenciais inválidas (3 cenários)
- Validação de campos obrigatórios (3 cenários)
- Fechar mensagem de erro

### 🛒 Produtos (16/16) ✅
- Adicionar produtos (simples e múltiplos)
- Remover produtos (página e carrinho)
- Navegação e detalhes de produtos
- Ordenação (A-Z, Z-A, preço crescente/decrescente)
- Validações de carrinho vazio
- Continuar comprando
- Estado persistente do carrinho

### 📦 Checkout (13/13) ✅
- Finalização de compra com sucesso
- Validação de resumo do pedido
- Validação de campos obrigatórios (4 cenários)
- Cancelamento de checkout
- Múltiplos produtos
- Navegação entre etapas
- Fechar mensagem de erro

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

**Modo Headless (CI/CD):**
```bash
npx cypress run
```

**Executar arquivo específico:**
```bash
npx cypress run --spec "cypress/e2e/login.spec.cy.js"
```

**Executar com navegador específico:**
```bash
npx cypress run --browser chrome
```

## 📊 Resultados dos Testes

### Resumo Geral
| Módulo | Testes | Status |
|--------|--------|--------|
| Login | 08/08 | ✅ |
| Produtos | 16/16 | ✅ |
| Checkout | 12/12 | ✅ |
| **TOTAL** | **36/39** | **✅** |

### Cobertura de Cenários
- ✅ Caminhos felizes
- ✅ Validações de erro
- ✅ Campos obrigatórios
- ✅ Navegação entre páginas
- ✅ Estado persistente
- ✅ Experiência do usuário (UX)

## 🔧 Custom Commands

O projeto utiliza custom commands para reutilização de código:

```javascript
// Login com usuário padrão ou específico
cy.login()
cy.login('problem_user', 'secret_sauce')

// Adicionar produto e ir para checkout
cy.goToCheckout()

// Preencher informações de checkout
cy.fillCheckoutInfo('João', 'Silva', '12345')
```

## 🔄 CI/CD

O projeto possui pipeline automatizado com GitHub Actions que:

- ✅ Executa todos os testes a cada push/PR
- ✅ Roda em ambiente Ubuntu com Chrome
- ✅ Gera vídeos dos testes
- ✅ Salva screenshots de falhas
- ✅ Publica artefatos para download

## 📁 Artefatos Gerados

Os testes geram automaticamente:

- **Vídeos** - `cypress/videos/` - Gravação de cada spec
- **Screenshots** - `cypress/screenshots/` - Capturas de tela em falhas
- **Relatórios** - Console com resumo detalhado

## 🎯 Boas Práticas Aplicadas

- ✅ Separação de testes por módulos
- ✅ Custom commands para código reutilizável
- ✅ Data-test attributes para seletores confiáveis
- ✅ BeforeEach para setup consistente
- ✅ Nomenclatura descritiva de cenários
- ✅ Validações múltiplas por teste
- ✅ Testes independentes e isolados

## 🚀 Próximas Melhorias

- [ ] Implementar Page Objects pattern
- [ ] Adicionar testes de API com cy.intercept()
- [ ] Criar fixtures com dados de teste
- [ ] Integrar relatórios HTML (Mochawesome)
- [ ] Adicionar testes com diferentes viewports (mobile/tablet)
- [ ] Implementar testes de performance
- [ ] Adicionar linting (ESLint)

## 👤 Autor

**Wisley Miguel do Carmo Camilo**

- GitHub: [@Wisleymiguel](https://github.com/Wisleymiguel)
- LinkedIn: [Wisley Miguel](https://www.linkedin.com/in/wisley-miguel/)
- E-mail: wisleymiguel@example.com

## 📝 Certificação

**Engenheiro de Qualidade de Software** - EBAC (Escola Britânica de Artes Criativas e Tecnologia)  
Concluído em Janeiro/2026

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- [Swag Labs](https://www.saucedemo.com/) - Aplicação demo para testes
- [Cypress.io](https://www.cypress.io/) - Framework de testes
- [EBAC](https://ebaconline.com.br/) - Formação em QA

---

⭐ **Se este projeto foi útil, considere dar uma estrela!**

📅 **Última atualização:** Janeiro 2026  
✅ **Status:** Projeto completo e funcional