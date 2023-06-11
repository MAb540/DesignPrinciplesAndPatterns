type User = {
  name: string;
};

/**
 * the current store implementation is tightly coupled with stripe payment integration, in future if we
 * decide to change payment provider we will have to change store implementation according to other
 * provider compatibility, which means our current implementation is violating solid principles.
 */
// class Store {
//   private stripe: Stripe;
//   private paypal: Paypal;
//   private user: User;

//   constructor(user: User) {
//     this.stripe = new Stripe(user);
//     this.user = user;
//     this.paypal = new Paypal();
//   }

//   purchaseBike(quantity: number) {
//     //this.stripe.makePayment(200 * quantity * 100);
//     this.paypal.makePayment(this.user, 200 * quantity * 100);
//   }

//   purchaseHelmet(quantity: number) {
//     // this.stripe.makePayment(10 * quantity * 100);
//     this.paypal.makePayment(this.user, 100 * quantity * 100);
//   }
// }

interface PaymentProcessor {
  pay: (amountInDollars: number) => void;
}

class Store {
  paymentProcessor: PaymentProcessor;
  constructor(paymentProcessor: PaymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity: number) {
    this.paymentProcessor.pay(200 * quantity * 100);
  }

  purchaseHelmet(quantity: number) {
    this.paymentProcessor.pay(100 * quantity * 100);
  }
}

class Stripe {
  private user: User;
  constructor(user: User) {
    this.user = user;
  }

  makePayment(amountInCents: number) {
    console.log(
      `${this.user.name} made payment of ${amountInCents / 100} using stripe`
    );
  }
}

class StripePaymentProcessor implements PaymentProcessor {
  private stripe: Stripe;
  private user: User;
  constructor(user: User) {
    this.stripe = new Stripe(user);
    this.user = user;
  }

  pay(amountInDollars: number) {
    this.stripe.makePayment(amountInDollars);
  }
}

class Paypal {
  constructor() {}

  makePayment(user: User, amountInCents: number) {
    console.log(
      `${user.name} made payment of ${amountInCents / 100} using paypal`
    );
  }
}

class PaypalPaymentProcessor implements PaymentProcessor {
  private paypal: Paypal;
  private user: User;
  constructor(user: User) {
    this.paypal = new Paypal();
    this.user = user;
  }
  pay(amountInDollars: number) {
    this.paypal.makePayment(this.user, amountInDollars);
  }
}

export const DependencyInversion = () => {
  const user = {
    name: "John",
  };
  //   const s = new Store(user);
  //   s.purchaseBike(2);
  //   s.purchaseHelmet(2);

  const s1 = new Store(new StripePaymentProcessor(user));
  const s2 = new Store(new PaypalPaymentProcessor(user));

  s1.purchaseBike(2);
  s1.purchaseHelmet(2);

  s2.purchaseBike(2);
  s2.purchaseHelmet(2);
};
