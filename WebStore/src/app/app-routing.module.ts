import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./features/cart/cart.module').then(
        (m) => m.CartModule
      ),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }