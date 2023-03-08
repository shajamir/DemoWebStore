import { IProduct } from "./product";

export interface ICartItem {
    id: number;
    product: IProduct;
    quantity: number;
}