import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { CartListComponent } from './components/cart-list/cart-list.component';

@NgModule({
  declarations: [
    CartComponent,
    CartDetailComponent,
    CartListComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
