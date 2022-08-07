import { Cart } from "../entities/cart";
import { CartItem } from "../entities/cartItem";
import { Product } from "../entities/product";

// TODO: 2. code smell
// TODO: 3. change code to class
export function addToCart(cart: Cart, product: Product, quantity = 1) {
  if (quantity < 1) {
    throw new Error("quantity needs to be greater or equal to 1");
  }

  // TODO: 2. code smell / bug -> it should increase quantity when already in cart
  const item: CartItem = {
    productId: product.id,
    quantity,
    price: product.price,
  };

  cart.items.push(item);
  cart.quantity += item.quantity;
  cart.sum += item.price * item.quantity;

  return item;
}
