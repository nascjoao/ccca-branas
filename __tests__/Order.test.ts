import Order from "../src/Order"

test('Não deve ser possível criar um pedido com CPF inválido', () => {
  const orderDetails = {
    description: 'Apple iPhone 13 (128 GB) Meia-noite',
    price: 5299,
    quantity: 1
  }
  expect(() => new Order('410.827.532-24').addOrder(orderDetails)).toThrow(/^CPF inválido$/);
  expect(() => new Order('11111111111').addOrder(orderDetails)).toThrow(/^Os números do CPF precisam ser diferentes$/);
  expect(() => new Order('').addOrder(orderDetails)).toThrow(/^CPF é necessário$/);
})

test('Deve criar um pedido com 3 itens (com descrição, preço e quantidade)', () => {
  const orders = [
    {
      description: 'Apple iPhone 13 (128 GB) Meia-noite',
      price: 5299,
      quantity: 1,
    },
    {
      description: 'Notebook Acer Aspire 5 A515-54G prata 15.6',
      price: 3618,
      quantity: 1,
    },
    {
      description: 'Vinho Tinto Chileno Reservado Cabernet 750ml Santa Carolina',
      price: 19.9,
      quantity: 2,
    }
  ]
  const order = new Order('97651366417');
  order.addOrder(orders[0]);
  order.addOrder(orders[1]);
  order.addOrder(orders[2]);
  expect(order.orders.length).toBe(3);
})

test('Deve ser possível criar um pedido com cupom de desconto', () => {
  const firstOrderDetails = {
    description: 'Apple iPhone 13 (128 GB) Meia-noite',
    price: 5299,
    quantity: 1,
  }
  const firstOrder = new Order('97651366417');
  firstOrder.addOrder(firstOrderDetails);
  firstOrder.addCoupon(10);
  expect(firstOrder.getTotal()).toBe(4769.1);

  const secondOrderOrders = [
    {
      description: 'Apple iPhone 13 (128 GB) Meia-noite',
      price: 5299,
      quantity: 1,
    },
    {
      description: 'Notebook Acer Aspire 5 A515-54G prata 15.6',
      price: 3618,
      quantity: 1,
    },
    {
      description: 'Vinho Tinto Chileno Reservado Cabernet 750ml Santa Carolina',
      price: 19.9,
      quantity: 2,
    }
  ]
  
  const secondOrder = new Order('97651366417');
  secondOrder.addOrder(secondOrderOrders[0]);
  secondOrder.addOrder(secondOrderOrders[1]);
  secondOrder.addOrder(secondOrderOrders[2]);
  secondOrder.addCoupon(10);
  expect(secondOrder.getTotal()).toBe(8061.12);
})
