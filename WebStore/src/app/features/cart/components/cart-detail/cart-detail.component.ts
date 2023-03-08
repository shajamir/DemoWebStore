import { Component, Input } from '@angular/core';
import { ICartItem } from 'src/app/core/models/cartItem';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent {
  @Input() cartItem: ICartItem
}