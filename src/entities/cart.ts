import { CartItem } from "./cartItem";

// TODO: 3. change code to class
export interface Cart {
  quantity: number;
  sum: number;
  items: CartItem[];
}
