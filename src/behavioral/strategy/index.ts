export function runStrategy(): void {
  interface PaymentStrategy {
    pay(amount: number): void;
  }

  class CardPayment implements PaymentStrategy {
    pay(amount: number): void {
      console.log(`Strategy: paid ${amount} by card`);
    }
  }

  class CashPayment implements PaymentStrategy {
    pay(amount: number): void {
      console.log(`Strategy: paid ${amount} by cash`);
    }
  }

  class Order {
    constructor(private paymentStrategy: PaymentStrategy) {}

    setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
      this.paymentStrategy = paymentStrategy;
    }

    pay(amount: number): void {
      this.paymentStrategy.pay(amount);
    }
  }

  const order = new Order(new CardPayment());
  order.pay(100);
  order.setPaymentStrategy(new CashPayment());
  order.pay(50);
}
