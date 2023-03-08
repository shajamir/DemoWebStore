import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { CartListComponent } from './components/cart-list/cart-list.component';

const routes: Routes = [
  { 
    path: '', component: CartComponent, children: [
      {
        path: '', component: CartListComponent, children: [
          {
            path: '', component: CartDetailComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }