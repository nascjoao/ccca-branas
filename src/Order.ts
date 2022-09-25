import Cpf from "./Cpf";

type OrderDetails = {
  description: string;
  price: number;
  quantity: number;
}

export default class Order {
  readonly orders: OrderDetails[];
  private coupon?: number;

  constructor (readonly cpf: string) {
    this.orders = [];
    if (!new Cpf(cpf).validate()) throw new Error('CPF inválido');
  }

  addOrder(order: OrderDetails) {
    this.orders.push(order);
  }

  /**
   * @param coupon e.g. 10 is a value for a 10% discount coupon
   */
  addCoupon(coupon: number) {
    this.coupon = coupon;
  }

  getTotal() {
    let total = this.orders.reduce((total, order) => total += order.price * order.quantity, 0);
    if (this.coupon) total -= total * this.coupon / 100;
    return Number(total.toFixed(2));
  }
}
