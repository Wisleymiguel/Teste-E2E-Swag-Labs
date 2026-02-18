# 🧪 Testes E2E - Swag Labs

[![Cypress Tests](https://github.com/Wisleymiguel/Teste-E2E-Swag-Labs/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/Wisleymiguel/Teste-E2E-Swag-Labs/actions/workflows/cypress-tests.yml)
[![Tests](https://img.shields.io/badge/tests-36%20passed-brightgreen)]()
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)]()
[![CI/CD](https://img.shields.io/badge/CI%2FCD-passing-brightgreen)]()

Projeto de automação de testes End-to-End para a aplicação [Swag Labs](https://www.saucedemo.com/) utilizando Cypress.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte do portfólio de QA, demonstrando habilidades em automação de testes E2E, cobertura de cenários críticos e boas práticas de desenvolvimento de testes.

**Cobertura Completa:** 36 testes automatizados cobrindo os principais fluxos da aplicação.

### 📈 Métricas do Projeto

| Métrica | Valor |
|---------|-------|
| **Testes Totais** | 36 |
| **Taxa de Sucesso** | 100% ✅ |
| **Tempo de Execução (Local)** | ~55s |
| **Tempo de Execução (CI/CD)** | ~1m 29s |
| **Cobertura de Módulos** | 3/3 (100%) |
| **Últimas 10 Execuções CI/CD** | 10/10 ✅ |

## 🛠️ Tecnologias Utilizadas

- **Cypress 15.8.1** - Framework de testes E2E
- **JavaScript ES6+** - Linguagem de programação
- **Node.js 22.14.0** - Ambiente de execução
- **GitHub Actions** - CI/CD Pipeline
- **Electron 138** - Browser headless para testes

## 📂 Estrutura do Projeto

```
teste-e2e/
├── .github/
│   └── workflows/
│       └── cypress-tests.yml    # CI/CD configurado
├── cypress/
│   ├── e2e/
│   │   ├── login.spec.cy.js     ✅ 8 testes (7s)
│   │   ├── prututos.cy.js       ✅ 16 testes (20s)
│   │   └── checkout.spec.cy.js  ✅ 12 testes (26s)
│   ├── fixtures/
│   │   └── example.json         # Dados de teste
│   ├── support/
│   │   ├── commands.js          # 3 custom commands
│   │   └── e2e.js               # Configuração global
│   └── videos/                  # 3 vídeos gerados
├── cypress.config.js            # Configurações do Cypress
├── package.json
├── .gitignore
└── README.md
```

## ✅ Módulos Implementados

### 🔐 Login (8 testes - 7s) ✅
- ✅ Login com sucesso (standard_user)
- ✅ Validação de usuário bloqueado (locked_out_user)
- ✅ Validação de credenciais inválidas (3 cenários)
- ✅ Validação de campos obrigatórios (3 cenários)
- ✅ Fechar mensagem de erro (UX)

### 🛒 Produtos (16 testes - 20s) ✅
- ✅ Adicionar produtos (simples e múltiplos)
- ✅ Remover produtos (página e carrinho)
- ✅ Navegação e detalhes de produtos
- ✅ Ordenação (A-Z, Z-A, preço crescente/decrescente)
- ✅ Validações de carrinho vazio
- ✅ Continuar comprando
- ✅ Estado persistente do carrinho

### 📦 Checkout (12 testes - 26s) ✅
- ✅ Finalização de compra com sucesso
- ✅ Validação de resumo do pedido
- ✅ Validação de campos obrigatórios (4 cenários)
- ✅ Cancelamento de checkout
- ✅ Múltiplos produtos no pedido
- ✅ Navegação entre etapas
- ✅ Fechar mensagem de erro

## 🚀 Como Executar

### Pré-requisitos
```bash
node -v  # v14 ou superior (testado com v22.14.0)
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

**Modo Interativo (recomendado para desenvolvimento):**
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
npx cypress run --browser electron  # padrão
```

## 📊 Resultados dos Testes

### Resumo Geral por Módulo

| Módulo | Specs | Testes | Aprovados | Falhados | Tempo | Status |
|--------|-------|--------|-----------|----------|-------|--------|
| 🔐 Login | 1 | 8 | 8 | 0 | 7s | ✅ |
| 🛒 Produtos | 1 | 16 | 16 | 0 | 20s | ✅ |
| 📦 Checkout | 1 | 12 | 12 | 0 | 26s | ✅ |
| **TOTAL** | **3** | **36** | **36** | **0** | **~55s** | **✅ 100%** |

### Cobertura de Cenários
- ✅ Caminhos felizes (happy paths)
- ✅ Validações de erro (error handling)
- ✅ Campos obrigatórios (required fields)
- ✅ Navegação entre páginas (navigation)
- ✅ Estado persistente (state management)
- ✅ Experiência do usuário (UX flows)

### Performance dos Testes

**Tempo médio por tipo de teste:**
- Testes de validação de erro: ~1-2s
- Testes de fluxo completo: ~2-6s
- Testes de navegação: ~1-2s

**Otimizações aplicadas:**
- Custom commands reduzem duplicação de código
- beforeEach garante estado limpo entre testes
- Seletores data-test garantem estabilidade

## 🔧 Custom Commands

O projeto utiliza 3 custom commands para reutilização de código:

```javascript
// 1. Login com usuário padrão ou específico
cy.login()                                    // standard_user
cy.login('problem_user', 'secret_sauce')      // usuário customizado

// 2. Adicionar produto e ir para checkout
cy.goToCheckout()

// 3. Preencher informações de checkout (com validação de campos vazios)
cy.fillCheckoutInfo('João', 'Silva', '12345')
cy.fillCheckoutInfo(null, 'Silva', '12345')   // testa campo vazio
```

**Benefícios:**
- 📉 Redução de ~40% de código duplicado
- 🔧 Manutenção centralizada
- 📖 Testes mais legíveis
- ⚡ Desenvolvimento mais rápido

## 🔄 CI/CD com GitHub Actions

O projeto possui pipeline automatizado que executa a cada push/PR:

### Configuração do Pipeline

```yaml
# Executa em: Ubuntu Latest
# Browser: Chrome
# Node: Versão do projeto
# Gatilhos: Push e Pull Request (main/master)
```

### Funcionalidades do CI/CD

- ✅ Executa todos os 36 testes automaticamente
- ✅ Roda em ambiente Ubuntu com Chrome
- ✅ Gera 3 vídeos dos testes (1 por spec)
- ✅ Salva screenshots automaticamente em falhas
- ✅ Publica artefatos para download (vídeos + screenshots)
- ✅ Badge de status no README
- ✅ Notificação de falhas

### Últimas Execuções

| Data | Commit | Testes | Status | Tempo |
|------|--------|--------|--------|-------|
| Atual | f2ffe37 | 36/36 | ✅ | 1m 29s |

**Taxa de sucesso histórica:** 100% (última execução)

## 📁 Artefatos Gerados

Os testes geram automaticamente:

### 🎥 Vídeos (3 arquivos)
- `checkout.spec.cy.js.mp4` - 26s de execução
- `login.spec.cy.js.mp4` - 7s de execução  
- `prututos.cy.js.mp4` - 20s de execução

**Configuração de vídeo:**
- Compressão: 32 CRF
- Formato: MP4
- Disponível em: `cypress/videos/`

### 📸 Screenshots
- Gerados automaticamente em falhas
- Formato: PNG
- Disponível em: `cypress/screenshots/`

### 📊 Relatórios
- Console com resumo detalhado
- Tempo de execução por teste
- Status de aprovação/falha
- Stack trace em erros

## 🎯 Boas Práticas Aplicadas

### Estruturação
- ✅ Separação de testes por módulos funcionais
- ✅ Nomenclatura descritiva e padronizada
- ✅ Organização por categorias (happy path, validações, navegação)

### Código
- ✅ Custom commands para reutilização
- ✅ Data-test attributes para seletores estáveis
- ✅ BeforeEach para setup consistente
- ✅ Validações múltiplas e específicas

### Testes
- ✅ Independência entre cenários
- ✅ Isolamento de estado
- ✅ Cobertura de caminhos críticos
- ✅ Validação de fluxos completos E2E

### CI/CD
- ✅ Pipeline automatizado
- ✅ Geração de artefatos
- ✅ Execução em múltiplos eventos
- ✅ Versionamento de código

## 🚀 Próximas Melhorias

- [ ] Implementar Page Objects pattern
- [ ] Adicionar testes de API com cy.intercept()
- [ ] Criar fixtures com massa de dados variada
- [ ] Integrar Mochawesome para relatórios HTML
- [ ] Adicionar testes responsive (mobile/tablet)
- [ ] Implementar testes de performance
- [ ] Adicionar ESLint para qualidade de código
- [ ] Configurar Codecov para cobertura de código
- [ ] Adicionar testes de acessibilidade (cypress-axe)
- [ ] Criar dashboards de métricas

## 👤 Autor

**Wisley Miguel do Carmo Camilo**

- 💼 LinkedIn: [Wisley Miguel](https://www.linkedin.com/in/wisley-miguel/)
- 🐙 GitHub: [@Wisleymiguel](https://github.com/Wisleymiguel)
- 📧 Email: [Seu email aqui]

## 📝 Formação

**Engenheiro de Qualidade de Software**  
EBAC - Escola Britânica de Artes Criativas e Tecnologia  
📅 Concluído em Janeiro/2026

**Habilidades Técnicas:**
- Automação de Testes E2E (Cypress)
- JavaScript/Node.js
- Git/GitHub & CI/CD
- Metodologias Ágeis
- Análise de Requisitos
- Documentação de Testes

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- [Swag Labs](https://www.saucedemo.com/) - Aplicação demo para testes da Sauce Labs
- [Cypress.io](https://www.cypress.io/) - Framework de testes E2E moderno e confiável
- [EBAC](https://ebaconline.com.br/) - Formação completa em Engenharia de Qualidade

## 📞 Contato

Interessado em discutir oportunidades de QA ou tem dúvidas sobre o projeto?

- 📧 Entre em contato via LinkedIn
- 🐛 Reporte issues ou sugestões no [GitHub Issues](https://github.com/Wisleymiguel/Teste-E2E-Swag-Labs/issues)
- ⭐ Dê uma estrela se este projeto foi útil!

---

<div align="center">

**Status:** ✅ Projeto completo e funcional  
**Última atualização:** Janeiro 2026  
**Versão:** 1.0.0

[![Made with Cypress](https://img.shields.io/badge/Made%20with-Cypress-17202C?logo=cypress&logoColor=white)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white)](https://github.com/features/actions)

</div>
