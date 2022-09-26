# Curso Clean Code e Clean Architecture (Turma 8)
## Com Rodrigo Branas

### Esse repositório armazenará tudo o que for colocado em prática ao longo do curso.

Curso sobre Clean Code, Refactoring, TDD, OO, Ports and Adapters, Clean Architecture, DDD, SOLID e Design Patterns.

Ao longo do curso construirei uma aplicação completa, dividida em vários microservices utilizando TypeScript com Clean Code, Refactoring, TDD, OO, Ports and Adapters, Clean Architecture, Domain-Driven Design, Design Patterns, SOLID, Event-Driven Architecture, CQRS além de um frontend com Vue.js 3 e Composition API.

<details>
<summary>Aula 1</summary>

- Clean Code
- Refactoring
- Code Smells e Técnicas de Refactoring

## Projeto

### Cenário
Implementaremos um sistema de vendas online com a possibilidade de realizar pedidos com múltiplos itens, cada um deles com uma quantidade variável, calculando o frete, os impostos, aplicando um cupom de desconto e ainda interagindo com o estoque. Além disso teremos ainda fluxos de pagamento e cancelamento do pedido realizado.

### Testes
1. Não deve criar um pedido com cpf inválido
2. Deve criar um pedido com 3 itens (com descrição, preço e quantidade)
3. Deve criar um pedido com cupom de desconto (percentual sobre o total do pedido)

### Refatoração
Algoritmo de validação de cpf: https://github.com/nascjoao/ccca-branas/blob/lesson-1/cpf.ts
</details>
