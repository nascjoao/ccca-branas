import Coupon from "../src/Coupon";
import Item from "../src/Item";
import Order from "../src/Order"

test('Não deve ser possível criar um pedido com CPF inválido', () => {
  const orderItem = new Item(1, 'Apple iPhone 13 (128 GB) Meia-noite', 5299);
  expect(() => new Order('410.827.532-24').addItem(orderItem, 1)).toThrow(/^CPF inválido$/);
  expect(() => new Order('11111111111').addItem(orderItem, 1)).toThrow(/^Os números do CPF precisam ser diferentes$/);
  expect(() => new Order('').addItem(orderItem, 1)).toThrow(/^CPF é necessário$/);
})

test('Deve criar um pedido com 3 itens (com descrição, preço e quantidade)', () => {
  const orderItem1 = new Item(1, 'Apple iPhone 13 (128 GB) Meia-noite', 5299);
  const orderItem2 = new Item(2, 'Notebook Acer Aspire 5 A515-54G prata 15.6', 3618);
  const orderItem3 = new Item(3, 'Vinho Tinto Chileno Reservado Cabernet 750ml Santa Carolina', 19.9);
  const order = new Order('97651366417');
  order.addItem(orderItem1, 1);
  order.addItem(orderItem2, 1);
  order.addItem(orderItem3, 2);
  expect(order.getTotal()).toBe(8956.8);
})

test('Deve ser possível criar um pedido com cupom de desconto', () => {
  const firstOrderItem = new Item(1, 'Apple iPhone 13 (128 GB) Meia-noite', 5299);
  const firstOrder = new Order('97651366417');
  firstOrder.addItem(firstOrderItem, 1);
  firstOrder.addCoupon(new Coupon('VALE10', 10));
  expect(firstOrder.getTotal()).toBe(4769.1);

  const secondOrderItems = [
    new Item(1, 'Apple iPhone 13 (128 GB) Meia-noite', 5299),
    new Item(2, 'Notebook Acer Aspire 5 A515-54G prata 15.6', 3618),
    new Item(3, 'Vinho Tinto Chileno Reservado Cabernet 750ml Santa Carolina', 19.9),
  ]
  const secondOrder = new Order('97651366417');
  secondOrder.addItem(secondOrderItems[0], 1);
  secondOrder.addItem(secondOrderItems[1], 1);
  secondOrder.addItem(secondOrderItems[2], 2);
  secondOrder.addCoupon(new Coupon('VALE10', 10));
  expect(secondOrder.getTotal()).toBe(8061.12);
})
