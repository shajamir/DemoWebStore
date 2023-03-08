import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  quantity$: Observable<number>

  constructor(private cartService: CartService) {}
  
  ngOnInit(): void {
    this.quantity$ = this.cartService.getCartQuantity();
  }
}