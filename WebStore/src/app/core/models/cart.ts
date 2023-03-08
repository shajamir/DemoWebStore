import { ICartItem } from "./cartItem";

export interface ICart {
    cartItems: ICartItem[];
    totalQuantity: number;
    totalAmount: number;
}