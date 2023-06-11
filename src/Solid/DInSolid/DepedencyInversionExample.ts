/**
 * high level module
 */

type Cart = {
  items: Array<string>;
};

class ShoppingCartService {
  constructor(private paymentProcessor: PaymentProcessor) {}

  checkout(cart: Cart) {
    this.paymentProcessor.processPayment(cart);
  }
}

/**
 * low level module
 */

// class PaymentProcessor {
//   processPayment(cart: any) {
//     console.log("processing payment for cart");
//   }
// }

// Abstraction
interface PaymentProcessor {
  processPayment: (cart: Cart) => void;
}

class StripePaymentProcessor implements PaymentProcessor {
  processPayment(cart: Cart) {
    console.log(`processing payment using stripe for cart items ${cart.items}`);
  }
}

class PaypalPaymentProcessor implements PaymentProcessor {
  processPayment(cart: Cart) {
    console.log(
      `processing  payment using paypal for cart items ${cart.items}`
    );
  }
}

export const DependencyInversionExample = () => {
  const cart = {
    items: ["bottle", "grocery"],
  };

  const s1 = new ShoppingCartService(new StripePaymentProcessor());
  s1.checkout(cart);

  const s2 = new ShoppingCartService(new PaypalPaymentProcessor());
  s2.checkout(cart);
};
