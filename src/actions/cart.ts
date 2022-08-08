import { Cart } from "../entities/cart";
import { CartItem } from "../entities/cartItem";
import { Product } from "../entities/product";

// TODO: 3. change code to class
export function addToCart(cart: Cart, product: Product, quantity = 1) {
  if (quantity < 1) {
    throw new Error("quantity needs to be greater or equal to 1");
  }

  const item: CartItem = {
    productId: product.id,
    quantity,
    price: product.price,
  };

  const existingIndex = cart.items.findIndex(
    (item) => item.productId === item.productId
  );

  if (existingIndex > -1) {
    updateCartItemAt(existingIndex, cart, item);
  } else {
    addCartItem(cart, item);
  }

  cart.quantity += item.quantity;

  return item;
}

export function removeFromCart(cart: Cart, productId: number) {
  const cartItemIndex = cart.items.findIndex(
    (item) => item.productId === productId
  );

  if (cartItemIndex < 0) {
    throw new Error("product is not in cart");
  }

  const cartItem = cart.items[cartItemIndex];

  cart.quantity -= cartItem.quantity;
  cart.sum -= cartItem.quantity * cartItem.price;
  cart.items = cart.items.filter((_, index) => index !== cartItemIndex);

  return cart;
}

function addCartItem(cart: Cart, item: CartItem) {
  cart.items.push(item);
  cart.sum += item.price * item.quantity;

  return cart;
}

function updateCartItemAt(existingIndex: number, cart: Cart, item: CartItem) {
  const cartItem = cart.items[existingIndex];
  const newQuantity = cartItem.quantity + item.quantity;
  const newSum = cartItem.price * newQuantity;

  cart.items[existingIndex] = {
    ...cartItem,
    quantity: cartItem.quantity + item.quantity,
    price: item.price,
  };
  cart.sum += newSum - cartItem.price * cartItem.quantity;
}
