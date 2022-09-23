# Dia 1
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
