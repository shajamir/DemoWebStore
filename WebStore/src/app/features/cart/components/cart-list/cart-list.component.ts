import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICartItem } from 'src/app/core/models/cartItem';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartItems$: Observable<ICartItem[]>
  cartAmount$: Observable<number>
  
  constructor(private cartService: CartService) {}
   
  ngOnInit(): void {
    this.cartItems$ = this.cartService.getCartItems();
    this.cartAmount$ = this.cartService.getCartAmount();
  }
}