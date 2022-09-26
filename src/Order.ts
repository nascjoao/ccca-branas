import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
  readonly orderItems: OrderItem[];
  private coupon?: Coupon;

  constructor (readonly cpf: string) {
    this.orderItems = [];
    if (!new Cpf(cpf).validate()) throw new Error('CPF inválido');
  }

  addItem(item: Item, quantity: number) {
    this.orderItems.push(new OrderItem(item.id, item.price, quantity));
  }

  addCoupon(coupon: Coupon) {
    this.coupon = coupon;
  }

  getTotal() {
    let total = this.orderItems.reduce((total, orderItem) => total += orderItem.getTotal(), 0);
    if (this.coupon) total -= this.coupon.calculateDiscount(total);
    return Number(total.toFixed(2));
  }
}
