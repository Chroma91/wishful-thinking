import { addToCart, removeFromCart } from "./actions/cart";
import { Cart } from "./entities/cart";
import { Product } from "./entities/product";

describe("Cart", () => {
  it("adds an item to the cart", () => {
    const cart: Cart = { quantity: 0, sum: 0, items: [] };

    addToCart(cart, { price: 10, id: 1, name: "Test" }, 3);

    expect(cart.sum).toBe(30);
    expect(cart.quantity).toBe(3);
    expect(cart.items.length).toBe(1);
  });

  it("removes an item from the cart", () => {
    const productId = 1;
    const cart: Cart = {
      quantity: 5,
      sum: 50,
      items: [{ productId: productId, quantity: 5, price: 10 }],
    };

    removeFromCart(cart, productId);

    expect(cart.sum).toBe(0);
    expect(cart.quantity).toBe(0);
    expect(cart.items.length).toBe(0);
  });

  it("updates an item in the cart", () => {
    const cart: Cart = { quantity: 0, sum: 0, items: [] };
    const product: Product = { id: 1, price: 10, name: "Test" };

    addToCart(cart, product, 3);
    addToCart(cart, product, 2);

    expect(cart.sum).toBe(50);
    expect(cart.quantity).toBe(5);
    expect(cart.items.length).toBe(1);
  });
});
