import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ICart } from '../models/cart';
import { ICartItem } from '../models/cartItem';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})

// Сервис Cart с внутренним состоянием через BehaviorSubject
export class CartService {

  private cartSubject$: BehaviorSubject<ICart>

  constructor() {
    this.cartSubject$ = new BehaviorSubject<ICart>( { cartItems: [], totalQuantity: 0, totalAmount: 0} );
  }

  // // Получить Observable состояний, чтобы реагировать на изменения
  // getStateChange(): Observable<ICart> {
  //   return this.cartSubject$.asObservable();
  // }

  // Получить текущее состояние
  getCurrentState(): ICart {
    return this.cartSubject$.getValue();
  }

  // Установить текущее состояние
  setCartState(state: ICart) {
    this.cartSubject$.next(state);
  }

  // Метод для добавления элементов в корзину
  addToCart(product: IProduct): void {
    let cartItem: ICartItem = {
      id: product.id,
      product: product,
      quantity: 1,
    };

    const cart = this.getCurrentState();   
    let currentCartItem = cart.cartItems.find(p => p.product.id == cartItem.id);
    if (currentCartItem == null) {
      cart.cartItems.push(cartItem);
    } 
    else {
      currentCartItem.quantity++;  
    }
    this.setCartState(cart);
  }

  // Метод для получения добавленных в корзину элементов
  getCartItems(): Observable<ICartItem[]> {
    return this.cartSubject$.pipe(map(x => x.cartItems));
  }

  // Метод для получения количества элементов в корзине
  getCartQuantity(): Observable<number> {
    return this.cartSubject$.pipe(
      map(cart => {
        const quantity = cart.cartItems.length;
          // .map(cartItem => cartItem.quantity)
          //   .reduce((p,c) => p + c, 0);
        return quantity;
      })
    );
  }

  // Метод для получения суммы элементов в корзине
  getCartAmount(): Observable<number> {
    return this.cartSubject$.pipe(
      map(cart => {
        const amount = cart.cartItems
          .map(cartItem => cartItem.quantity * cartItem.product.price)
            .reduce((p,c) => p + c, 0);
        return amount;
      })
    );
  }
}