import { addToCart } from "./actions/cart";
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
    // TODO: 1. implement new code with TDD
  });

  // TODO: 1. implement "new" code with TDD
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
